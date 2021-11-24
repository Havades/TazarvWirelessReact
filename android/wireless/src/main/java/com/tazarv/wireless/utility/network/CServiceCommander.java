package com.tazarv.wireless.utility.network;

import android.bluetooth.BluetoothServerSocket;

public class CServiceCommander {
    private int mUserId = 0;

    public ServiceCommanderResult InitUser(int aUserId) {
        ServiceCommanderResult lResult = new ServiceCommanderResult();
        try {
            CCommandExecutor lCE = new CCommandExecutor();
            String lServiceResult = lCE.runCommand(String.format("<InitUser>HD1,%s", aUserId));

            if (!lServiceResult.startsWith("Error:")) {
                lResult.IsOK = true;
                mUserId = aUserId;
            } else
                throw new Exception(lServiceResult);

        } catch (Exception ex) {
            lResult.ErrorMessage = ex.getMessage();
        }
        return lResult;
    }

    public class ServiceCommanderResult {
        public boolean IsOK;
        public String ErrorMessage;

        public ServiceCommanderResult() {
            IsOK = false;
            ErrorMessage = "";
        }
    }
}
