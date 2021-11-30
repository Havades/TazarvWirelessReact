package com.tazarv.wireless.utility.network;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.widget.Toast;

import com.tazarv.taclibrary.Classes.CTCPClient;
import com.tazarv.taclibrary.Helpers.tacHelpers;
import com.tazarv.wireless.classes.CAppStatus;

public class CNetworkManager {
    private Context mContext;

    private boolean mIsInitialized = false;
    private String mIP = "10.10.15.98";
    private CTCPClient mainTCP = null;

    private boolean mIsConnecting = false;
    private String mErrorMessage = "";

    public CNetworkManager(Context aContext) {
        mContext = aContext;
    }

    public boolean IsInitialized() {
        return mIsInitialized;
    }
    public void setIP(String aIPString) {
        mIP = aIPString;
    }
    public String getIP() {
        return mIP;
    }
    public CTCPClient getMainTCP() {
        return mainTCP;
    }

    public void InitializeNetwork() {
        InitializeNetwork(null);
    }
    public void InitializeNetwork(final OnNetworkManagerInitializedListener onInitialaized) {
        SharedPreferences lPrefs = PreferenceManager.getDefaultSharedPreferences(mContext);

        String lIP1 = mIP;//tacHelpers.getConfig("LocalServerIP");
        if (lIP1.isEmpty())
            lIP1 = lPrefs.getString("LocalServerIP", "");

        String lIP2 = tacHelpers.getConfig("InternetServerIP");
        if (lIP2.isEmpty())
            lIP2 = lPrefs.getString("InternetServerIP", "");

        final CNetworkConnectionTest testConnection = new CNetworkConnectionTest(lIP1, lIP2, CAppStatus.Port);
        testConnection.setOnFinishTestLitener(new CNetworkConnectionTest.OnFinishTestListener() {
            @Override
            public void OnFinishTest(Boolean isOK, String ipMessage) {
                if (isOK) {
                    mIP = ipMessage;

                    if (mainTCP == null)
                        mainTCP = new CTCPClient(mIP, CAppStatus.Port);

                    if (!mainTCP.isConnected()) {
                        mIsConnecting = true;
                        Runnable lTask = new Runnable() {
                            @Override
                            public void run() {
                                mainTCP.Connect();
                                mIsConnecting = false;
                            }
                        };
                        new Thread(lTask).start();

                        while(mIsConnecting);
                    }

                    if(mainTCP.isConnected()) {
                        mIsInitialized = true;

                        if (onInitialaized != null)
                            onInitialaized.OnInitialized(true);
                    } else {
                        Toast.makeText(mContext, mainTCP.getErrorMessage(), Toast.LENGTH_SHORT).show();

                        if (onInitialaized != null)
                            onInitialaized.OnInitialized(false);
                    }

                } else {
                    Toast.makeText(mContext, ipMessage, Toast.LENGTH_SHORT).show();

                }
            }
        });

        testConnection.execute();
    }

    public interface OnNetworkManagerInitializedListener {
        void OnInitialized(boolean isOK);
    }
}
