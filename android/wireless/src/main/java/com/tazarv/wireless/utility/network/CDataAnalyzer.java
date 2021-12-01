package com.tazarv.wireless.utility.network;

import android.util.Log;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.regex.Matcher;

import com.tazarv.taclibrary.Classes.CEncrypt;
import com.tazarv.taclibrary.Helpers.BitConverter;
import com.tazarv.taclibrary.Helpers.tacHelpers;
import com.tazarv.wireless.classes.CAppStatus;
import com.tazarv.wireless.classes.OnlineUserInfo;


public class CDataAnalyzer {
    private static String TAG = "CDataAnalyzer";

    private String mOriginalData = "";
    private JSONObject mVoiceData = null;
    private TreeMap<Integer, OnlineUserInfo> mOnlineUsers = null;
    private ArrayList<String> mErrorList = null;
    public JSONObject getVoiceData() {
        return mVoiceData;
    }

    private boolean mIsChangeOnlineUsers = false;

    public CDataAnalyzer() {
        mErrorList = new ArrayList<>();
        mOnlineUsers = new TreeMap<>();
    }

    public boolean isChangeOnlineUsers() {
        return mIsChangeOnlineUsers;
    }

    public void AnalyzeData(String aData) {
        try {
            mIsChangeOnlineUsers = false;

            mOriginalData = aData;
            mErrorList.clear();

            String lTag = "";

            Matcher lMatcher = tacHelpers.getMatcher(mOriginalData, "<[^/>]+>");
            while (lMatcher.find()) {

                lTag = lMatcher.group();

                int lDataIndex = lMatcher.end();
                int lEndTagIndex = mOriginalData.indexOf(lTag.replace("<", "</"), lDataIndex);
                String lData = mOriginalData.substring(lDataIndex, lEndTagIndex);

                if (lTag.equals("<OUser>")) {

                    mIsChangeOnlineUsers = true;
                    CheckOnlineUsers(lData);

                } else if (lTag.equals("<?>")) {

                }

            }

        } catch (Exception ex) {
            Log.e(TAG, "AnalyzeData: " + ex.getMessage() );
        }
    }

    private void CheckOnlineUsers(String aData) {
        try {

            String lData = CEncrypt.RC4Decode(aData, CAppStatus.NetworkManager.getMainTCP().getPassword());
            Log.i(TAG, "CheckStatus: " + lData);

            byte[] lDataBytes = lData.substring(0, 2).getBytes("ISO-8859-1");
            int lUserCount = BitConverter.toInt16(lDataBytes, 0);

            lDataBytes = lData.substring(2, 4).getBytes("ISO-8859-1");
            int lUserBusyCount = BitConverter.toInt16(lDataBytes, 0);

            lDataBytes = lData.substring(4, 6).getBytes("ISO-8859-1");
            int lSizeOfBusy = BitConverter.toInt16(lDataBytes, 0);

            mOnlineUsers.clear();

            for (int i = 0; i < lUserCount; i++) {

                OnlineUserInfo lOUser = new OnlineUserInfo();

                lDataBytes = lData.substring(6 + i * 2, 6 + i * 2 + 2).getBytes();
                int lUserId = BitConverter.toInt16(lDataBytes, 0);
                lOUser.UserId = lUserId;

                String lChecksum =
                        String.valueOf(lOUser.IsBusy) +
                                String.valueOf(lOUser.SourceUserId) +
                                String.valueOf(lOUser.TargetChannelId) +
                                String.valueOf(lOUser.TargetUserId);
                lOUser.Checksum = lChecksum;

                mOnlineUsers.put(lUserId, lOUser);
            }

            for (int i = 0, j = 6 + lUserCount * 2; i < lUserBusyCount; i++, j += lSizeOfBusy) {

                lDataBytes = lData.substring(j, j + 2).getBytes("ISO-8859-1");
                int lUserId = BitConverter.toInt16(lDataBytes, 0);

                OnlineUserInfo lOUser = null;
                if (mOnlineUsers.containsKey(lUserId)) {

                    lOUser = mOnlineUsers.get(lUserId);

                    lDataBytes = lData.substring(j + 2, j + 4).getBytes("ISO-8859-1");
                    int lSourceUserId = BitConverter.toInt16(lDataBytes, 0);

                    lDataBytes = lData.substring(j + 4, j + 6).getBytes("ISO-8859-1");
                    int lTargetId = BitConverter.toInt16(lDataBytes, 0);

                    lOUser.IsBusy = true;
                    lOUser.SourceUserId = lSourceUserId;

                    if (lTargetId > 0) {

                        lOUser.TargetUserId = lTargetId;
                        lOUser.TargetChannelId = 0;

                    } else {

                        lOUser.TargetUserId = 0;
                        lOUser.TargetChannelId = -lTargetId;

                    }
                }
            }

        } catch (Exception ex) {
            mErrorList.add(ex.getMessage());
        }
    }
    private void CheckAudio(String aData) {
        try {

        } catch (Exception ex) {
            mErrorList.add(ex.getMessage());
        }
    }

    public boolean UpdateOnlineUsers(SortedMap<Integer, OnlineUserInfo> aTargetList) {
        boolean lIsUpdate = false;
        try {
            if(aTargetList != null) {

                for (OnlineUserInfo lNewOUser : mOnlineUsers.values()) {

                    OnlineUserInfo lOUser;
                    if (aTargetList.containsKey(lNewOUser.UserId))
                        lOUser = aTargetList.get(lNewOUser.UserId);
                    else {
                        lOUser = new OnlineUserInfo();
                        aTargetList.put(lNewOUser.UserId, lOUser);
                    }

                    lIsUpdate = lOUser.Upadte(lNewOUser);
                }

                for (OnlineUserInfo lOUser : aTargetList.values()) {
                    if (!mOnlineUsers.containsKey(lOUser.UserId)) {
                        aTargetList.remove(lOUser.UserId);
                    }
                }

            }
        } catch (Exception ex) {
            Log.e(TAG, "UpdateOnlineUsers: " + ex.getMessage() );
        }
        return lIsUpdate;
    }
}
