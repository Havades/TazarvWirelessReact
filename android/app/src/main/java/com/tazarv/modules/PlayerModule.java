package com.tazarv.modules;

import android.widget.Toast;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.*;
import com.tazarv.database.entity.Media;
import com.tazarv.database.repository.MediaRepository;
import java.util.List;

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