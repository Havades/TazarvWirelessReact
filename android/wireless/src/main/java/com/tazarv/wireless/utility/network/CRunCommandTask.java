package com.tazarv.wireless.utility.network;

import android.os.AsyncTask;

import com.tazarv.taclibrary.Classes.CSocketData;
import com.tazarv.taclibrary.DataHelpers.CTableCreator;
import com.tazarv.wireless.classes.CAppStatus;

import org.json.JSONObject;

public class CRunCommandTask extends AsyncTask<String,Void,String> {
    private String mTableName = "", mPKIdName = "";
    private boolean mIsFullCommand = false;

    private boolean mIsCreateTable = false;
    private boolean mIsRunFinished = false;
    private boolean mIsRunning = false;
    private CSocketData mSD = null;
    private OnTaskFinishListener mOnTaskFinishListener = null;

    public boolean isTaskFinished() {
        return mIsRunFinished;
    }
    public boolean isTaskRunning() {
        return mIsRunning;
    }
    public CSocketData getSocketDate() {
        return mSD;
    }

    public CRunCommandTask(RunCommandTaskParams aParams) {
        if(aParams!=null) {
            mOnTaskFinishListener = aParams.onTaskFinishListener;
            mIsCreateTable = aParams.IsCreateTable;
            mIsFullCommand = aParams.IsFullCommand;
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
            String lCommand = aCommands[0];
            if(!mIsFullCommand)
                lCommand = "<SQL>" + lCommand;

            String lResultData = CAppStatus.networkManager.getMainTCP().runCommand(lCommand, null, null, 20000);
            if (lResultData.isEmpty()) {
                String lErr = CAppStatus.networkManager.getMainTCP().getErrorMessage();
                throw new Exception(lErr);
            }

            lSD = new CSocketData("Res");
            lSD.GetDataFromStreamStr(lResultData);

            if (lSD != null)
                lErrMsg = lSD.getErrorMassage();

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

                JSONObject lJO = new JSONObject();

                try {
                    if (mSD.getFieldCount() > 0) {
                        String lColList = mSD.getFieldList();
                        String[] lNames = lColList.split("\t", -1);
                        String[] lValues = mSD.getData();

                        for (int i = 0; i < lNames.length; i++)
                            lJO.put(lNames[i], lValues[i]);
                    }

                } catch (Throwable tr) {
                    try {
                        lJO.put("Error", tr.getMessage());
                    } catch (Throwable tr1) {
                        lJO = null;
                    }
                }

                if (mOnTaskFinishListener != null)
                    mOnTaskFinishListener.OnRunCommandFinished(lJO);

            }
        }
    }

    public static class RunCommandTaskParams {
        public boolean IsCreateTable;
        public boolean IsFullCommand;
        public String TableName;
        public String PKIdName;
        public OnTaskFinishListener onTaskFinishListener;

        public RunCommandTaskParams() {
            IsCreateTable = false;
            IsFullCommand = false;
            TableName = "";
            PKIdName = "";
            onTaskFinishListener = null;
        }
    }
    public interface OnTaskFinishListener {
        void OnMakeTableFinish(String aErrorMessage);
        void OnRunCommandFinished(JSONObject aResult);
    }
}
