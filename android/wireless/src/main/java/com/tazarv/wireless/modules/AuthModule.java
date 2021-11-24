package com.tazarv.wireless.modules;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresPermission;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.tazarv.taclibrary.Classes.CEncrypt;
import com.tazarv.taclibrary.Classes.CStatus;
import com.tazarv.taclibrary.DataHelpers.DatabaseHelper;
import com.tazarv.wireless.classes.CAppStatus;

import org.json.JSONArray;

public class AuthModule extends ReactContextBaseJavaModule {

    private static final String TAG = "AuthModule";

    ReactApplicationContext mContext;
    public AuthModule(ReactApplicationContext context) {
        super(context);
        this.mContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "AuthModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap Login() {
        WritableMap lWM = Arguments.createMap();
        try {

            SharedPreferences lPrefs = mContext.getSharedPreferences("wireless", Context.MODE_PRIVATE);
            int lUserId = lPrefs.getInt("LastUserId",0);

            lWM = Arguments.createMap();
            lWM.putBoolean("IsLogin", lUserId > 0);
            lWM.putInt("UserId", lUserId);

        } catch (Exception ex) {
            Log.e(TAG, "Login: " + ex.getMessage());
        }
        return lWM;
    }

    @ReactMethod
    public void Login(ReadableMap aUserInfo, Callback aCallback) {
        WritableMap lWM = Arguments.createMap();
        String lErrorMessage = null;
        try {
            String lUsername = aUserInfo.getString("Username");
            String lLoginPassword = aUserInfo.getString("Password");
            Boolean lisRemember = aUserInfo.getBoolean("IsRemember");

            DBDataModule lDBData = new DBDataModule(mContext);
            ReadableArray lWA = lDBData.GetData(
                    "Tbl_User",
                    String.format("Username='%s'", lUsername)
            );

            if( lWA.size() > 0 ) {

                ReadableMap lMap = lWA.getMap(0);
                String lEnPassword = lMap.getString("Password");
                String lDcPassword = "";
                try {
                    lDcPassword = CEncrypt.AesDecrypt(lEnPassword);
                } catch (Exception ex) {
                    throw new Exception(ex.getMessage());
                }

                if (lDcPassword.equals(lLoginPassword)) {
                    int lUserId = lMap.getInt("UserId");

                    CAppStatus.LoginUserId = lUserId;
                    CAppStatus.LoginUsername = lUsername;

                    lWM.putBoolean("IsLogin", true);
                    lWM.putInt("UserId", lUserId);

                    if(lisRemember) {
                        //SharedPreferences lPrefs = PreferenceManager.getDefaultSharedPreferences(mContext);
                        SharedPreferences lPrefs = mContext.getSharedPreferences("wireless", Context.MODE_PRIVATE);
                        SharedPreferences.Editor lPrefEditor = lPrefs.edit();
                        lPrefEditor.putInt("LastUserId", lUserId);
                        lPrefEditor.apply();
                    }

                } else
                    throw new Exception("incorrect username or password");

            } else
                throw new Exception("incorrect username or password");

        } catch (Exception ex) {
            lErrorMessage = ex.getMessage();
            lWM.putBoolean("IsLogin", false);
            lWM.putInt("UserId", 0);
        }

        aCallback.invoke(lErrorMessage, lWM);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void Logout() {
        try {
            CAppStatus.LoginUserId = 0;
            CAppStatus.LoginUsername = "";

            SharedPreferences lPrefs = mContext.getSharedPreferences("wireless", Context.MODE_PRIVATE);
            int lUserId = lPrefs.getInt("LastUserId",0);

            if(lUserId>0) {
                SharedPreferences.Editor lPrefEditor = lPrefs.edit();
                lPrefEditor.remove("LastUserId");
                lPrefEditor.apply();
            }

        } catch (Exception ex) {
            Log.e(TAG, "Login: " + ex.getMessage());
        }
    }
}