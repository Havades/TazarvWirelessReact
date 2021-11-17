package com.tazarv.wireless.database.entity;

import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;
import java.util.Date;

@Entity(tableName = "Tbl_Media")
public class Media {

    public Media(int mediaId, boolean isOnlineVoice, int mediaTypeId, int mediaTime, Date createDate) {
        this.MediaId = mediaId;
        this.IsOnlineVoice = isOnlineVoice;
        this.MediaTypeId = mediaTypeId;
        this.MediaTime = mediaTime;
        this.createDate = createDate;
    }
    public Media(){}

    @PrimaryKey(autoGenerate = true)
    public int Id;

    public int MediaId;

    public boolean IsOnlineVoice;

    public int MediaTypeId;

    public int MediaTime;

    @ColumnInfo(name = "created_date")
    public Date createDate;
}
