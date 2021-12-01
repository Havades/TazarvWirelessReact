package com.tazarv.wireless.classes;

public class OnlineUserInfo {
    public static String TAG = "OnlineUserInfo";

    public int UserId;
    public String DisplayName = "";
    public boolean IsBusy = false;
    public int SourceUserId = 0;
    public int TargetUserId = 0;
    public int TargetChannelId = 0;
    public boolean IsUpdated = true;
    public String Checksum = "";

    public OnlineUserInfo Clone() {
        OnlineUserInfo lOUserInfo = new OnlineUserInfo();
        lOUserInfo.UserId = UserId;
        lOUserInfo.DisplayName = DisplayName;
        lOUserInfo.IsBusy = IsBusy;
        lOUserInfo.SourceUserId = SourceUserId;
        lOUserInfo.TargetUserId = TargetUserId;
        lOUserInfo.TargetChannelId = TargetChannelId;
        lOUserInfo.IsUpdated = IsUpdated;
        lOUserInfo.Checksum = Checksum;
        return lOUserInfo;
    }

    public boolean Upadte(OnlineUserInfo aOUserInfo) {
        boolean lIsUpdate = false;
        try {

            this.UserId = aOUserInfo.UserId;
            this.DisplayName = aOUserInfo.DisplayName;
            this.IsBusy = aOUserInfo.IsBusy;
            this.SourceUserId = aOUserInfo.SourceUserId;
            this.TargetUserId = aOUserInfo.TargetUserId;
            this.TargetChannelId = aOUserInfo.TargetChannelId;
            this.IsUpdated = aOUserInfo.IsUpdated;

            if (!aOUserInfo.Checksum.equals(this.Checksum)) {
                this.Checksum = aOUserInfo.Checksum;
                lIsUpdate = true;
            }

        } catch (Exception ex) {

        }
        return lIsUpdate;
    }
}
