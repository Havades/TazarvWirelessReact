package com.tazarv.wireless.database.dao;

import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import com.tazarv.wireless.database.entity.Media;

import java.util.List;

@Dao
public interface MediaDao {
    @Insert
    void Insert(Media media);
    @Update
    void Update(Media media);
    @Delete
    void Delete(Media media);

    @Query("DELETE FROM Tbl_Media")
    void DeleteAll();

    @Query("SELECT * FROM Tbl_Media ORDER BY created_date DESC")
    List<Media> SelectAll();

    @Query("SELECT * FROM Tbl_Media WHERE MediaId IN (:mediaIdList)")
    List<Media> SelectByIds(String[] mediaIdList);

    @Query("SELECT * FROM Tbl_Media WHERE MediaId IN (:mediaIdList)")
    List<Media> SelectByIds(List<String> mediaIdList);

    @Query("SELECT * FROM Tbl_Media WHERE MediaId = :mediaId")
    Media SelectById(int mediaId);

    @Query("SELECT * FROM Tbl_Media WHERE MediaId = :mediaId")
    Media SelectById(String mediaId);
}
