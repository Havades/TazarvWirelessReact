package com.tazarv.wireless.utility.network;

import android.os.AsyncTask;

import com.tazarv.taclibrary.Classes.CSocketData;
import com.tazarv.taclibrary.Classes.CTCPClient;
import com.tazarv.taclibrary.DataHelpers.CTableCreator;
import com.tazarv.wireless.classes.CAppStatus;

import org.json.JSONArray;
import org.json.JSONObject;

public class CRunCommandTask extends AsyncTask<String,Void,String> {
    private String mTableName = "", mPKIdName = "";

    private boolean mIsCreateTable = false;
    private boolean mIsRunFinished = false;
    private boolean mIsRunning = false;
    private CSocketData mSD = null;
    private OnTaskFinishListener mOnTaskFinishListener = null;

    private String mErrorMessage = "";

    public boolean isTaskFinished() {
        return mIsRunFinished;
    }
    public boolean isTaskRunning() {
        return mIsRunning;
    }
    public CSocketData getSocketDate() {
        return mSD;
    }
    public String getErrorMessage() {
        return mErrorMessage;
    }

    public CRunCommandTask(RunCommandTaskParams aParams) {
        mErrorMessage = "";
        if(aParams!=null) {
            mOnTaskFinishListener = aParams.onTaskFinishListener;
            mIsCreateTable = aParams.IsCreateTable;
            mTableName = aParams.TableName;
            mPKIdName = aParams.PKIdName;
        }
    }

    @Override
    protected void onPreExecute() {
        mIsRunning = true;
        mIsRunFinished = false;
    }

    @Override
    protected String doInBackground(String... aCommands) {
        CSocketData lSD = null;
        String lErrMsg = "";

        try {
            String lCommand = "<SQL>" + aCommands[0];
            CTCPClient lTCP = CAppStatus.networkManager.getMainTCP();

            boolean lIsTimeout = lTCP.WaitToEndRunning();
            if(!lIsTimeout) {
                String lResultData = lTCP.runCommand(lCommand, null, null, 20000);
                if (lResultData.isEmpty()) {
                    String lErr = CAppStatus.networkManager.getMainTCP().getErrorMessage();
                    throw new Exception(lErr);
                }

                if(lResultData.endsWith("\t"))
                    lResultData = lResultData.replaceAll("\t$","");

                lSD = new CSocketData("Res");
                lSD.GetDataFromStreamStr(lResultData);

                if (lSD == null)
                    lErrMsg = lSD.getErrorMassage();
            } else
                throw new Exception("TCP Timeout");

        } catch (Exception ex) {
            lErrMsg = ex.getMessage();
        }

        mIsRunning = false;
        mIsRunFinished = true;
        mSD = lSD;

        return lErrMsg;
    }

    @Override
    protected void onPostExecute(String aErrorMessage) {
        super.onPostExecute(aErrorMessage);

        mErrorMessage = aErrorMessage;

        if (mSD != null) {

            if (mIsCreateTable) {

                if (aErrorMessage.isEmpty()) {

                    String lColumnList = mSD.getFieldList();
                    String[] lDataArray = mSD.getData();
                    int lRecordCount = mSD.getRecordCount();

                    CTableCreator lTC = new CTableCreator(mTableName, lColumnList, mPKIdName, null);
                    lTC.CreateTableFromColumnList();
                    if (lRecordCount > 0) {
                        lTC.AddRowFromValueListGroup(lDataArray);
                    }

                }

                if (mOnTaskFinishListener != null)
                    mOnTaskFinishListener.OnMakeTableFinish(aErrorMessage);

            } else {

                JSONArray lJA = new JSONArray();

                try {
                    if (!aErrorMessage.isEmpty())
                        throw new Exception(aErrorMessage);

                    if (mSD.getFieldCount() > 0) {
                        String lColList = mSD.getFieldList();
                        String[] lNames = lColList.split("\t", -1);
                        String[] lValues = mSD.getData();

                        int lVIdx = 0, lIndex = 0;
                        do {
                            JSONObject lJO = new JSONObject();
                            for (int i = 0; i < lNames.length; i++) {
                                lJO.put(lNames[i], lValues[lVIdx]);
                                lVIdx++;
                            }
                            lJA.put(lIndex++, lJO);
                        }
                        while (lVIdx < lValues.length);
                    }

                } catch (Throwable tr) {
                    JSONObject lJO = new JSONObject();
                    try {
                        lJO.put("Error", tr.getMessage());
                    } catch (Throwable tr1) {
                        lJO = null;
                    }
                    lJA.put(lJO);
                }

                if (mOnTaskFinishListener != null)
                    mOnTaskFinishListener.OnRunCommandFinished(lJA, aErrorMessage);

            }
        }
    }

    public static class RunCommandTaskParams {
        public boolean IsCreateTable;
        public String TableName;
        public String PKIdName;
        public OnTaskFinishListener onTaskFinishListener;

        public RunCommandTaskParams() {
            IsCreateTable = false;
            TableName = "";
            PKIdName = "";
            onTaskFinishListener = null;
        }
    }
    public interface OnTaskFinishListener {
        void OnMakeTableFinish(String aErrorMessage);
        void OnRunCommandFinished(JSONArray aResult, String aErrorMessage);
    }
}
