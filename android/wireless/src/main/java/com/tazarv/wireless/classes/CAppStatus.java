package com.tazarv.wireless.classes;

import com.tazarv.wireless.utility.network.CDataManager;
import com.tazarv.wireless.utility.network.CServiceCommander;
import com.tazarv.wireless.utility.network.CNetworkManager;

public class CAppStatus {
    public static int Port = 6835;

    public static CNetworkManager NetworkManager = null;
    public static CServiceCommander ServiceCommander = null;
    public static CDataManager DataManager = null;

    public static int LoginUserId = 0;
    public static String LoginUsername = "";
}
