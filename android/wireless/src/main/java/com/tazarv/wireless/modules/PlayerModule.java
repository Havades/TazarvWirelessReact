package com.tazarv.wireless.modules;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.tazarv.wireless.utility.audio.AudioConverter;

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

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void PlaySound() throws Exception {
        AudioConverter.PlayGSMSound(this.context);
    }
}