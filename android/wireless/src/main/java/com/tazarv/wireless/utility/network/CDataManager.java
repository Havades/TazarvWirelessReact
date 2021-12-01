package com.tazarv.wireless.utility.network;

import com.tazarv.wireless.classes.CAppStatus;

import java.util.TreeMap;

public class CDataManager {
    private static String TAG = "CDataManager";

    private Thread mDataThread;
    private boolean mIsRunning, mIsStop;
    private DataManagerListener mListener;

    public CDataManager(DataManagerListener aListener) {
        mDataThread = new Thread(new DataThread());
        mIsRunning = false;
        mIsStop = false;
        mListener = aListener;
    }

    public void Start() {
        mDataThread.start();
    }
    public void Stop() {
        mIsStop = true;
    }
    public boolean isRunning() {
        return mIsRunning;
    }

    private class DataThread implements Runnable {
        @Override
        public void run() {
            mIsRunning = true;

            try {
                if(CAppStatus.OnlineUsers == null)
                    CAppStatus.OnlineUsers = new TreeMap<>();

                while (!mIsStop) {

                    String lData = CAppStatus.NetworkManager.getMainTCP().readMessage();
                    if(lData.length()>0) {
                        CDataAnalyzer lAn = new CDataAnalyzer();
                        lAn.AnalyzeData(lData);
                        if (lAn.isChangeOnlineUsers()) {
                            boolean lIsUpdate = lAn.UpdateOnlineUsers(CAppStatus.OnlineUsers);
                            if (mListener != null)
                                mListener.OnUpdateOnlineUsers();
                        }
                    }

                    Thread.sleep(500);
                }

            } catch (Exception ex) {

            } finally {
                mIsRunning = false;
            }
        }
    };

    public interface DataManagerListener {
        void OnUpdateOnlineUsers();
    }
}
