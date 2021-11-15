package com.tazarv;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class MyModule extends ReactContextBaseJavaModule {
    public MyModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "MyModule";
    }
    @ReactMethod
    public void MakeToast(String message){
        Toast.makeText(getReactApplicationContext() , message , Toast.LENGTH_LONG).show();
    }
}