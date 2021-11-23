package com.tazarv.wireless.utility.network;

import android.os.AsyncTask;
import android.util.Log;

import com.tazarv.taclibrary.Classes.CConfig;

import java.io.IOException;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketException;

public class NetworkConnectionTest extends AsyncTask<Integer, Integer, Boolean> {
    private final String TAG = "CTestConnection";

    private Boolean mIsConnected = false;
    private String mCurrentIpAddress = "";
    String mIP1 = "", mIP2 = "", mTestIP;
    int mPort = 0;
    private String mErrorMessage = "";
    private OnFinishTestListener mOnFinishTestLitener = null;


    public NetworkConnectionTest(String aIP1, String aIP2, int aPort) {
        mIP1 = aIP1;
        mIP2 = aIP2;
        mPort = aPort;
    }

    public String getCurrentIpAddress() {
        return mCurrentIpAddress;
    }

    public Boolean isConnectionOK() {
        return mIsConnected;
    }

    public String getErrorMessage() {
        return mErrorMessage;
    }

    @Override
    protected Boolean doInBackground(Integer... params) {
        Boolean lIsOK = false;
        Log.d(TAG, "Test Connection: doInBackground");

        boolean lIsOneIP = false;
        int lPort = CConfig.TCPPort;

        InetSocketAddress serverAddress = null;
        InetAddress ipAddress = null;
        mTestIP = mIP1;
        if (mTestIP.isEmpty()) {
            lIsOneIP = true;
            mTestIP = mIP2;
        }

        mCurrentIpAddress = mTestIP;

        Socket lSocket = new Socket();

        if (!mTestIP.isEmpty()) {
            try {

                ipAddress = InetAddress.getByName(mTestIP);
                serverAddress = new InetSocketAddress(ipAddress, lPort);
                Log.d(TAG, "Testing IP: " + mTestIP);
                lSocket.connect(serverAddress, 5000);
                Log.d(TAG, "IP OK: " + mTestIP);

                mCurrentIpAddress = mTestIP;
                lIsOK = true;

            } catch (Exception ex) {

                Log.d(TAG, "IP failed: " + mTestIP);
                mErrorMessage = "IP failed: " + mTestIP;

                try {
                    if (lIsOneIP) {
                        throw new SocketException();
                    }

                    mTestIP = mIP2;
                    ipAddress = InetAddress.getByName(mTestIP);
                    serverAddress = new InetSocketAddress(ipAddress, lPort);
                    try {
                        lSocket.close();
                    } catch (IOException ex1) {
                    }

                    lSocket = new Socket();
                    Log.d(TAG, "Testing IP: " + mTestIP);
                    lSocket.connect(serverAddress, 10000);
                    Log.d(TAG, "IP OK: " + mTestIP);

                    mCurrentIpAddress = mTestIP;
                    lIsOK = true;

                } catch (SocketException e) {
                    Log.d(TAG, mErrorMessage);
                    mTestIP = "";
                } catch (Exception e) {
                    Log.d(TAG, "IP failed: " + mTestIP);
                    mErrorMessage += "\n" + "IP failed: " + mTestIP; // + "\n" + e.getMessage();
                    mTestIP = "";
                }
            } finally {
                try {
                    if (!lSocket.isClosed())
                        lSocket.close();
                } catch (IOException ex) {
                }
            }
        } else {
            mErrorMessage = "IP-Empty";
        }

        Log.d(TAG, "Test Connection: finish doInBackground");
        mIsConnected = lIsOK;
        return lIsOK;
    }

    public void setOnFinishTestLitener(OnFinishTestListener aOnFinishTestListener) {
        mOnFinishTestLitener = aOnFinishTestListener;
    }

    @Override
    protected void onPostExecute(Boolean aIsOK) {
        super.onPostExecute(aIsOK);
        if (mOnFinishTestLitener != null) {
            mOnFinishTestLitener.OnFinishTest(aIsOK, (aIsOK ? mTestIP : mErrorMessage));
        }
    }

    @Override
    protected void onProgressUpdate(Integer... values) {
        super.onProgressUpdate(values);
    }

    public interface OnFinishTestListener {
        void OnFinishTest(Boolean isOK, String ipMessage);
    }
}
