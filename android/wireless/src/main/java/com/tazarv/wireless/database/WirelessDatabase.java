package com.tazarv.wireless.database;

import android.content.Context;
import android.os.AsyncTask;

import androidx.annotation.NonNull;
import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.TypeConverter;
import androidx.room.TypeConverters;
import androidx.sqlite.db.SupportSQLiteDatabase;

import com.tazarv.wireless.database.dao.MediaDao;
import com.tazarv.wireless.database.entity.Media;

import java.util.Date;

@Database(entities = {Media.class} , version = 1)
@TypeConverters({WirelessDatabase.Converters.class})
public abstract class WirelessDatabase extends RoomDatabase {

    private static WirelessDatabase instance;

    public abstract MediaDao MediaDao();

    public static synchronized WirelessDatabase getInstance(Context context){
        if(instance == null){
            instance = Room.databaseBuilder(context.getApplicationContext(),
                    WirelessDatabase.class , "Wireless_Databse")
                    .fallbackToDestructiveMigration()
                    .addCallback(roomCallback) // Test
                    .build();
        }
        return instance;
    }
    public static class Converters {
        @TypeConverter
        public static Date fromTimestamp(Long value) {
            return value == null ? null : new Date(value);
        }

        @TypeConverter
        public static Long dateToTimestamp(Date date) {
            return date == null ? null : date.getTime();
        }
    }

//---------------------------------<Test>-----------------------------------
    private static RoomDatabase.Callback roomCallback =  new RoomDatabase.Callback(){
        @Override
        public void onCreate(@NonNull SupportSQLiteDatabase db) {
            super.onCreate(db);
            new populateAsync(instance).execute();
        }
    };
    private static class populateAsync extends AsyncTask<Void , Void , Void> {
        MediaDao mediaDao;
        public populateAsync(WirelessDatabase db){
            this.mediaDao = db.MediaDao();
        }
        @Override
        protected Void doInBackground(Void... voids) {
            mediaDao.Insert(new Media(100 , true , 2 , 123 , new Date()));
            mediaDao.Insert(new Media(101 , true , 2 , 123 , new Date()));
            mediaDao.Insert(new Media(102 , false , 2 , 123 , new Date()));
            return null;
        }
    }
//---------------------------------</Test>-----------------------------------

}
