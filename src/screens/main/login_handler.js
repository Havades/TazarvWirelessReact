const onUserIdChange = (userId , navigation , setIsWaiting) => 
{
    switch(userId)
    {
        case 0 :
            // setIsWaiting(true)
            break;
        case -1 :
            navigation.navigate('Login');
            break;
        default :
            // setIsWaiting(false)
            break;
    }
}
const loginCheck = (navigation ,route, AuthModule , setUserId) =>
{
    if(typeof route !== 'undefined'){
        // setUserId(route.params.userId)
        return;
    }
    AuthModule.CheckRemember((error , res) => {
        if(res.IsLogin)
            setUserId(res.UserId)
        else
            navigation.navigate('Login')
    })
}

export {
    onUserIdChange,
    loginCheck
}