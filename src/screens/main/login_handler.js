const onUserIdChange = (userId , navigation) => 
{
    console.log('--onUserIdChange--' , userId)
    switch(userId)
    {
        case 0 :
            //Show Spinner
            break;
        case -1 :
            navigation.navigate('Login');
            break;
        default :
            //Hide Spinner
            break;
    }
}
const loginCheck = (navigation ,route, AuthModule , setUserId) =>
{
    console.log(route)
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