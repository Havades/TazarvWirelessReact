package com.tazarv.wireless.modules;

import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.*;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.tazarv.wireless.database.entity.Media;
import com.tazarv.wireless.database.repository.MediaRepository;

import java.util.List;

public class TCPModule extends ReactContextBaseJavaModule {
    ReactApplicationContext context;
    public TCPModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "TCPModule";
    }
    @ReactMethod
    public void MakeToast(String message){
        Toast.makeText(getReactApplicationContext() , "From TCP : " + message , Toast.LENGTH_LONG).show();
    }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableArray StartDB(){
        MediaRepository mediaRepository = new MediaRepository(context);
        return ToJsMapList(mediaRepository.SelectAll());
    }

    private WritableArray ToJsMapList(List<Media> mediaList) {
        WritableArray mediaArray = Arguments.createArray();
        for(Media media : mediaList){
            WritableMap map = Arguments.createMap();
            map.putInt("Id" , media.Id);
            map.putBoolean("IsOnlineVoice" , media.IsOnlineVoice);
            map.putInt("MediaId" , media.MediaId);
            map.putString("DateTime" , media.createDate.toString());
            mediaArray.pushMap(map);
        }
        return mediaArray;
    }
}