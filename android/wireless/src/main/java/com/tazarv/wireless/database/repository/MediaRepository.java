package com.tazarv.wireless.database.repository;

import android.content.Context;
import android.os.AsyncTask;
import com.tazarv.wireless.database.WirelessDatabase;
import com.tazarv.wireless.database.dao.MediaDao;
import com.tazarv.wireless.database.entity.Media;
import java.util.List;

public class MediaRepository {

    private MediaDao mediaDao;
    private List<Media> allMedia;

    public MediaRepository(Context context){
        WirelessDatabase database = WirelessDatabase.getInstance(context);
        mediaDao = database.MediaDao();
    }
    public void Insert(Media media) {
        new InsertMediaAsync(mediaDao).execute(media);
    }
    public void Update(Media media){
        new UpdateMediaAsync(mediaDao).execute(media);
    }
    public void Delete(Media media){
        new DeleteMediaAsync(mediaDao).execute(media);
    }
    public void DeleteAll(){
        new DeleteAllMediaAsync(mediaDao).execute();
    }
    public List<Media> SelectAll(){
        return mediaDao.SelectAll();
    }
    public List<Media> SelectByIds(String[] mediaIdList){
        return mediaDao.SelectByIds(mediaIdList);
    }
    public List<Media> SelectByIds(List<String> mediaIdList){
        return mediaDao.SelectByIds(mediaIdList);
    }
    public Media SelectById(int mediaId){
        return mediaDao.SelectById(mediaId);
    }
    public Media SelectById(String mediaId){
        return mediaDao.SelectById(mediaId);
    }

    private static class InsertMediaAsync extends AsyncTask<Media , Void , Void>{
        private MediaDao mediaDao;
        private InsertMediaAsync(MediaDao dao){
            this.mediaDao = dao;
        }
        @Override
        protected Void doInBackground(Media... medias) {
            mediaDao.Insert(medias[0]);
            return null;
        }
    }
    private static class UpdateMediaAsync extends AsyncTask<Media , Void , Void>{
        private MediaDao mediaDao;
        private UpdateMediaAsync(MediaDao dao){
            this.mediaDao = dao;
        }
        @Override
        protected Void doInBackground(Media... medias) {
            mediaDao.Update(medias[0]);
            return null;
        }
    }
    private static class DeleteMediaAsync extends AsyncTask<Media , Void , Void>{
        private MediaDao mediaDao;
        private DeleteMediaAsync(MediaDao dao){
            this.mediaDao = dao;
        }
        @Override
        protected Void doInBackground(Media... medias) {
            mediaDao.Delete(medias[0]);
            return null;
        }
    }
    private static class DeleteAllMediaAsync extends AsyncTask<Void , Void , Void>{
        private MediaDao mediaDao;
        private DeleteAllMediaAsync(MediaDao dao){
            this.mediaDao = dao;
        }
        @Override
        protected Void doInBackground(Void ...voids) {
            mediaDao.DeleteAll();
            return null;
        }
    }
    private static class SelectAllMediaAsync extends AsyncTask<Void , Void,List<Media>>{
        private MediaDao mediaDao;
        private SelectAllMediaAsync(MediaDao dao){
            this.mediaDao = dao;
        }
        @Override
        protected List<Media> doInBackground(Void ...voids) {
            mediaDao.DeleteAll();
            return null;
        }
    }
}
