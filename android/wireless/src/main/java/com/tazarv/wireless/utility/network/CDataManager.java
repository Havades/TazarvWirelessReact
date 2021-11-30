package com.tazarv.wireless.utility.network;

import com.tazarv.wireless.classes.CAppStatus;

public class CDataManager {
    private Thread mDataThread;
    private boolean mIsRunning, mIsStop;

    public CDataManager() {
        mDataThread = new Thread(new DataThread());
        mIsRunning = false;
        mIsStop = false;
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

                while (!mIsStop) {

                    String lData = CAppStatus.NetworkManager.getMainTCP().readMessage();
                    if(lData.length()>0)
                    {
                        CDataAnalyzer lAn = new CDataAnalyzer();
                        lAn.AnalyzeData(lData);
                    }

                    Thread.sleep(500);
                }

            } catch (Exception ex) {

            } finally {
                mIsRunning = false;
            }
        }
    };
}
