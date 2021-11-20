package com.tazarv.wireless;

import android.content.Context;

import com.tazarv.wireless.database.WirelessDatabase;
import com.tazarv.wireless.database.entity.Media;
import com.tazarv.wireless.database.repository.MediaRepository;

import java.util.List;

public class TestThread extends Thread{
    private Context context;
    private List<Media> mediaList;
    public TestThread(Context context)
    {
        this.context = context;
    }
    public void run(){
        MediaRepository repository = new MediaRepository(context);
        mediaList = repository.SelectAll();
    }
    public List<Media> getData(){
        return mediaList;
    }
}
