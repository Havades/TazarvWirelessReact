package com.tazarv.wireless.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.tazarv.taclibrary.Classes.CCommandResult;
import com.tazarv.wireless.database.entity.Media;
import com.tazarv.wireless.database.repository.MediaRepository;
import com.tazarv.wireless.utility.network.CommandExecutor;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;

public class DBDataModule extends ReactContextBaseJavaModule {
    ReactApplicationContext mContext;

    public DBDataModule(ReactApplicationContext context) {
        super(context);
        mContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "DBDataModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableArray GetData(String aTableName) {
        WritableArray lWA = null;
        try {
            CommandExecutor lCE = new CommandExecutor();
            JSONArray lJA = lCE.runQuery("select * from " + aTableName);
            //JSONArray lJA = new JSONArray("[{\"name\":\"amir\",\"family\":\"hashemi\"},{\"name\":\"omid\",\"family\":\"dadvar\"}]");
            lWA = ToJsMapList(lJA);
        } catch (Exception ex) {

        }
        return null;
    }

    private WritableArray ToJsMapList(JSONArray aRows) throws Exception {
        WritableArray mediaArray = Arguments.createArray();
        for (int i = 0; i<aRows.length(); i++) {
            WritableMap map = Arguments.createMap();
            JSONObject lRow = aRows.getJSONObject(i);
            for(int c = 0; c<lRow.length(); c++) {
                Object lCol = lRow.names().get(c);
                String lColName = lCol.toString();
                map.putString(lColName, lRow.getString(lColName));
            }
            mediaArray.pushMap(map);
        }
        return mediaArray;
    }
}
