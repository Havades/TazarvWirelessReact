package com.tazarv.wireless.modules;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class PlayerModule extends ReactContextBaseJavaModule {
    ReactApplicationContext context;
    public PlayerModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "PlayerModule";
    }

}