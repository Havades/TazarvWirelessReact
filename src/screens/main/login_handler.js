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
const loginCheck = (navigation , AuthModule) =>
{
    console.log(navigation.route)
    if(typeof navigation.route!== 'undefined')
        return navigation.route.params.userId
    let res = AuthModule.CheckRemember()
    if(res.IsLogin)
        return res.UserId
    return -1;
}
export {
    onUserIdChange,
    loginCheck
}