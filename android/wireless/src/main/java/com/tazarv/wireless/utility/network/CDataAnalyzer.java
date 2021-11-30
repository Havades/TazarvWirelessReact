package com.tazarv.wireless.utility.network;

import android.util.Log;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.regex.Matcher;

import com.tazarv.taclibrary.Classes.CEncrypt;
import com.tazarv.taclibrary.Helpers.tacHelpers;
import com.tazarv.wireless.classes.CAppStatus;


public class CDataAnalyzer {
    private String mData = "";
    private JSONObject mVoiceData = null;
    private ArrayList<String> mErrorList = null;

    public JSONObject getVoiceData() {
        return mVoiceData;
    }
    public String getMainData() {
        return mData;
    }

    public CDataAnalyzer() {
        mErrorList = new ArrayList<>();
    }

    public void AnalyzeData(String aData) {
        try {

            mData = aData;
            mErrorList.clear();

            String lTag = "";

            Matcher lMatcher = tacHelpers.getMatcher(mData, "<[^/>]+>");
            while (lMatcher.find()) {

                lTag = lMatcher.group();

                int lDataIndex = lMatcher.end();
                int lEndTagIndex = mData.indexOf(lTag.replace("<", "</"), lDataIndex);
                String lData = mData.substring(lDataIndex, lEndTagIndex);

                if (lTag.equals("<OUser>")) {

                    CheckStatus(lData);

                } else if (lTag.equals("<?>")) {

                }

            }

        } catch (Exception ex) {

        }
    }

    private void CheckStatus(String aData) {
        try {

            String lData = CEncrypt.RC4Decode(aData, CAppStatus.NetworkManager.getMainTCP().getPassword());
            Log.i("CDataAnaluzer", "CheckStatus: " + lData);

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
}
