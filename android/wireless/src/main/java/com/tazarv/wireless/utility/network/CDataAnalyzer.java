package com.tazarv.wireless.utility.network;

import org.json.JSONObject;

import java.util.ArrayList;


public class CDataAnalyzer {
    private String mData = "";
    private JSONObject mVoiceData = null;
    //private ArrayDeque<String> mDataQueue = null;
    private ArrayList<String> mErrorList = null;

    public JSONObject getVoiceData() {
        return mVoiceData;
    }
    public String getMainData() {
        return mData;
    }

    public CDataAnalyzer() {
        //mDataQueue = new ArrayDeque<>();
        mErrorList = new ArrayList<>();
    }

    public void AnalyzeNewData(String aData) {
        try {

            mData = aData;
            mErrorList.clear();

        } catch (Exception ex) {

        }
    }

    private void CheckStatus() {
        try {

        } catch (Exception ex) {
            mErrorList.add(ex.getMessage());
        }
    }
    private void CheckAudio() {
        try {

        } catch (Exception ex) {
            mErrorList.add(ex.getMessage());
        }
    }
    private void Check() {
        try {

        } catch (Exception ex) {
            mErrorList.add(ex.getMessage());
        }
    }
}
