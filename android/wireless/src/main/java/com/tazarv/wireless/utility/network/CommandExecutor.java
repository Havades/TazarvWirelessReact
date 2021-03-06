package com.tazarv.wireless.utility.network;


import com.tazarv.taclibrary.Classes.CSocketData;
import com.tazarv.wireless.utility.network.CRunCommandTask.RunCommandTaskParams;

import org.json.JSONArray;
import org.json.JSONObject;

public class CommandExecutor {
    private JSONObject mLastResult = null;

    private CRunCommandTask.OnTaskFinishListener mOnRunFinish = null;
    String mTableCommand = "", mTableName = "", mTablePKId = "";

    public CommandExecutor() {}
    public CommandExecutor(CRunCommandTask.OnTaskFinishListener aOnRunFinish) {
        mOnRunFinish = aOnRunFinish;
    }

    public JSONObject runCommand(String aCommand) {
        return runCommand(aCommand, true);
    }
    public JSONObject runCommand(String aCommand, boolean aIsWait) {
        JSONObject lJO = new JSONObject();
        try {
            RunCommandTaskParams lParams = new RunCommandTaskParams();
            lParams.onTaskFinishListener = mOnRunFinish;

            CRunCommandTask lRCT = new CRunCommandTask(lParams);
            lRCT.execute(aCommand);

            if(aIsWait) {
                while (lRCT.isTaskRunning() && !lRCT.isTaskFinished()) {
                    String lK = "";
                    Thread.sleep(100);
                }

                CSocketData lSD = lRCT.getSocketDate();
                if (lSD != null && lSD.getFieldCount() > 0) {
                    String lColList = lSD.getFieldList();
                    String[] lNames = lColList.split("\t", -1);
                    String[] lValues = lSD.getData();

                    for (int i = 0; i < lNames.length; i++)
                        lJO.put(lNames[i], lValues[i]);
                }
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
    public JSONArray runQuery(String aCommand) {
        return runQuery(aCommand, false);
    }
    public JSONArray runQuery(String aCommand, boolean aIsFullCommand) {
        JSONArray lJA = new JSONArray();
        try {
            RunCommandTaskParams lParams = new RunCommandTaskParams();
            lParams.onTaskFinishListener = mOnRunFinish;
            lParams.IsFullCommand = aIsFullCommand;

            CRunCommandTask lRCT = new CRunCommandTask(lParams);
            lRCT.execute(aCommand);

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
                while (lVIdx <lValues.length);

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

        CRunCommandTask lRCT = new CRunCommandTask(lParams);
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
