package com.tazarv.modules;

import android.app.Application;
import android.widget.Toast;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.*;
import com.tazarv.database.entity.Media;
import com.tazarv.database.repository.MediaRepository;
import com.tazarv.models.TCPModel;

import java.util.ArrayList;
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
    public WritableMap TestModel(){
        TCPModel model = new TCPModel(1000 , "192.168.1.1" , 5000 , false);
        return model.ToJsMap();
    }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableArray StartDB(){
        MediaRepository mediaRepository = new MediaRepository(context);
        return ToJsMapList(mediaRepository.SelectAll());
    }
    public WritableArray ToJsMapList(List<Media> mediaList) {
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