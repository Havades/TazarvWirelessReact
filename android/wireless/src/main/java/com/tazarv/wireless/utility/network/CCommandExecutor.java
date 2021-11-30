package com.tazarv.wireless.utility.network;


import com.tazarv.taclibrary.Classes.CSocketData;
import com.tazarv.taclibrary.Classes.CTCPClient;
import com.tazarv.wireless.utility.network.CRunCommandTask.RunCommandTaskParams;

import org.json.JSONArray;
import org.json.JSONObject;

public class CCommandExecutor {
    private JSONObject mLastResult = null;

    private CRunCommandTask.OnTaskFinishListener mOnRunFinish = null;
    String mTableCommand = "", mTableName = "", mTablePKId = "";
    CTCPClient mTCP = null;

    public CCommandExecutor(CTCPClient aTCPClient) {
        mTCP = aTCPClient;
    }
    public CCommandExecutor(CTCPClient aTCPClient, CRunCommandTask.OnTaskFinishListener aOnRunFinish) {
        mTCP = aTCPClient;
        mOnRunFinish = aOnRunFinish;
    }

    public String runCommand(String aCommand) {
        return runCommand(aCommand, true);
    }
    public String runCommand(String aCommand, boolean aIsWait) {
        String lResult = "";
        try {
            RunCommandTaskParams lParams = new RunCommandTaskParams();
            lParams.onTaskFinishListener = mOnRunFinish;
            lParams.IsSQLCommand = false;

            CRunCommandTask lRCT = new CRunCommandTask(lParams, mTCP);
            lRCT.execute(aCommand);

            if (aIsWait) {
                while (lRCT.isTaskRunning() && !lRCT.isTaskFinished()) {
                    String lK = "";
                    Thread.sleep(100);
                }

                String lErr = lRCT.getErrorMessage();
                if (lErr.isEmpty())
                    lResult = lRCT.getResultData();
                else
                    throw new Exception(lErr);
            }

        } catch (Exception ex) {
            lResult = String.format("Error: %s", ex.getMessage());
        }
        return lResult;
    }
    public JSONArray runQuery(String aCommand) {
        return runQuery(aCommand, true);
    }
    public JSONArray runQuery(String aCommand, boolean aIsWait) {
        JSONArray lJA = new JSONArray();
        try {
            RunCommandTaskParams lParams = new RunCommandTaskParams();
            lParams.onTaskFinishListener = mOnRunFinish;

            CRunCommandTask lRCT = new CRunCommandTask(lParams, mTCP);
            lRCT.execute(aCommand);

            if (aIsWait) {
                while (lRCT.isTaskRunning() && !lRCT.isTaskFinished()) {
                    String lK = "";
                    Thread.sleep(100);
                }

                CSocketData lSD = lRCT.getSocketDate();
                if (lSD != null && lSD.getFieldCount() > 0) {
                    String lColList = lSD.getFieldList();
                    String[] lNames = lColList.split("\t", -1);
                    String[] lValues = lSD.getData();

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
            }

        } catch (Exception ex) {
            try {
                JSONObject lJO = new JSONObject();
                lJO.put("Error", ex.getMessage());
                lJA.put(lJO);
            } catch (Exception ex1) {
            }
        }
        return lJA;
    }
    public void SetTableCommand(String aTableCommand, String aTableName, String aPKIdName){
        mTableCommand = aTableCommand;
        mTableName = aTableName;
        mTablePKId = aPKIdName;
    }
    public void RunTableCommand() {
        MakeTableFromCommand(mTableCommand, mTableName, mTablePKId);
    }
    public void MakeTableFromCommand(String aTableCommand, String aTableName, String aPKIdName) {
        RunCommandTaskParams lParams = new RunCommandTaskParams();
        lParams.onTaskFinishListener = mOnRunFinish;
        lParams.IsCreateTable = true;
        lParams.TableName = aTableName;
        lParams.PKIdName = aPKIdName;

        CRunCommandTask lRCT = new CRunCommandTask(lParams, mTCP);
        lRCT.execute(aTableCommand);
    }

    public static JSONObject GetJSONFromSocketDataStream(String aSoketDateStream) {
        JSONObject lJO = new JSONObject();
        try {

            CSocketData lSD = new CSocketData("Tbl_Tablet");
            lSD.GetDataFromStreamStr(aSoketDateStream);

            if (lSD.getRecordCount() > 0) {
                String lColList = lSD.getFieldList();
                String[] lNames = lColList.split("\t", -1);
                String[] lValues = lSD.getData();

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
        return lJO;
    }
}
