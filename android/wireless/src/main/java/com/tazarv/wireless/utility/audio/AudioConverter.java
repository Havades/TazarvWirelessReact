package com.tazarv.wireless.utility.audio;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.media.MediaDataSource;
import android.media.MediaPlayer;
import android.opengl.GLSurfaceView;

import com.tazarv.javax.sound.sampled.AudioInputStream;
import com.tazarv.javax.sound.sampled.AudioSystem;
import com.tazarv.javax.sound.sampled.Clip;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

public class AudioConverter {

    public static void PlayGSMSound(Context aContext) {
        PlaySoundFromAsset(aContext, "gsm610_8000.wav");
    }
    public static void PlaySoundFromAsset(Context mContext, String aSoundName) {
        MediaPlayer lPlayer = null;
        try {
            //AssetFileDescriptor lAFD = mContext.getAssets().openFd("sounds/" + aSoundName  + "");
            InputStream lIn = mContext.getAssets().open("sounds/" + aSoundName  + "");

            byte[] lData = new byte[lIn.available()];
            lIn.read(lData,0,lIn.available());

            byte[] lDataOut = new byte[lData.length*2];

            GSMDecoder lGSMDecoder = new GSMDecoder();
            lGSMDecoder.decode(lData, 44, lDataOut,0, true);

            File tempMp3 = File.createTempFile("tac", "wav", mContext.getCacheDir());
            tempMp3.deleteOnExit();
            FileOutputStream fos = new FileOutputStream(tempMp3);
            fos.write(lDataOut);
            fos.close();

            FileInputStream fis = new FileInputStream(tempMp3);

            lPlayer = new MediaPlayer();
            lPlayer.setDataSource(fis.getFD());
            lPlayer.prepare();
            lPlayer.start();

        } catch (Exception ex) {
            String s = ex.getMessage();
        }
    }
}
