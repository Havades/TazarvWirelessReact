const onSubmit = (AuthModule, userInfo ,isRemember , navigation , signIn, alert) => 
{
    signIn(1)
    navigation.navigate('Main' , { userId : 50 });
    return;
    const params = {
        Username : userInfo.username,
        Password : userInfo.password,
        IsRemember : isRemember
    }
    AuthModule.Login( params , (error , res) => {
    navigation.navigate('Main' , { userId : 50 })
    if(res.IsLogin)
    {   signIn(res.UserId)
        navigation.navigate('Main' , { userId : res.UserId })
    }
    else
        alert(error)
   })
}
// function pause(milliseconds) {
// 	var dt = new Date();
// 	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
// }
export {
    onSubmit
}