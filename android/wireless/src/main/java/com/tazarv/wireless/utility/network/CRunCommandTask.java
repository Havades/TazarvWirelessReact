package com.tazarv.wireless.utility.network;

import android.os.AsyncTask;

import com.tazarv.taclibrary.Classes.CSocketData;
import com.tazarv.taclibrary.Classes.CTCPClient;
import com.tazarv.taclibrary.DataHelpers.CTableCreator;
import com.tazarv.wireless.classes.CAppStatus;

import org.json.JSONArray;
import org.json.JSONObject;

public class CRunCommandTask extends AsyncTask<String,Void,String> {

    private RunCommandTaskParams mTaskParams = null;
    private boolean mIsRunFinished = false;
    private boolean mIsRunning = false;
    private CSocketData mSD = null;
    private String mResultData = "";
    private CTCPClient mTCP = null;

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
    public String getResultData() {
        return mResultData;
    }
    public String getErrorMessage() {
        return mErrorMessage;
    }

    public CRunCommandTask(RunCommandTaskParams aParams, CTCPClient aTCPClient) {
        mErrorMessage = "";
        mTaskParams = aParams;
        mTCP = aTCPClient;
        if(mTaskParams==null)
            mTaskParams = new CRunCommandTask.RunCommandTaskParams();
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
        String lResultData = "";

        try {
            String lCommand = (mTaskParams.IsSQLCommand ? "<SQL>" : "") + aCommands[0];

            boolean lIsTimeout = mTCP.WaitToEndRunning();
            if(!lIsTimeout) {
                lResultData = mTCP.runCommand(lCommand, null, null, 20000);
                if (lResultData.isEmpty()) {
                    String lErr = CAppStatus.NetworkManager.getMainTCP().getErrorMessage();
                    throw new Exception(lErr);
                }

                if(lResultData.endsWith("\t"))
                    lResultData = lResultData.replaceAll("\t$","");

                if(mTaskParams.IsSQLCommand) {

                    lSD = new CSocketData("Res");
                    lSD.GetDataFromStreamStr(lResultData);

                    if (lSD == null)
                        lErrMsg = lSD.getErrorMassage();

                }

            } else
                throw new Exception("TCP Timeout");

        } catch (Exception ex) {
            lErrMsg = ex.getMessage();
        }

        mIsRunning = false;
        mIsRunFinished = true;
        mSD = lSD;
        mResultData = lResultData;

        mErrorMessage = lErrMsg;
        return lErrMsg;
    }

    @Override
    protected void onPostExecute(String aErrorMessage) {
        super.onPostExecute(aErrorMessage);

        mErrorMessage = aErrorMessage;

        if (mSD != null) {

            if (mTaskParams.IsCreateTable) {

                if (aErrorMessage.isEmpty()) {

                    String lColumnList = mSD.getFieldList();
                    String[] lDataArray = mSD.getData();
                    int lRecordCount = mSD.getRecordCount();

                    CTableCreator lTC = new CTableCreator(mTaskParams.TableName, lColumnList, mTaskParams.PKIdName, null);
                    lTC.CreateTableFromColumnList();
                    if (lRecordCount > 0) {
                        lTC.AddRowFromValueListGroup(lDataArray);
                    }

                }

                if (mTaskParams.onTaskFinishListener != null)
                    mTaskParams.onTaskFinishListener.OnMakeTableFinish(aErrorMessage);

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

                if (mTaskParams.onTaskFinishListener != null)
                    mTaskParams.onTaskFinishListener.OnRunQueryFinished(lJA, aErrorMessage);

            }
        } else {

            if (mTaskParams.onTaskFinishListener != null)
                mTaskParams.onTaskFinishListener.OnRunCommandFinished(mResultData, aErrorMessage);

        }
    }

    public static class RunCommandTaskParams {
        public boolean IsSQLCommand;
        public boolean IsCreateTable;
        public String TableName;
        public String PKIdName;
        public OnTaskFinishListener onTaskFinishListener;

        public RunCommandTaskParams() {
            IsSQLCommand = true;
            IsCreateTable = false;
            TableName = "";
            PKIdName = "";
            onTaskFinishListener = null;
        }
    }
    public interface OnTaskFinishListener {
        void OnMakeTableFinish(String aErrorMessage);
        void OnRunQueryFinished(JSONArray aResult, String aErrorMessage);
        void OnRunCommandFinished(String aResult, String aErrorMessage);
    }
}
