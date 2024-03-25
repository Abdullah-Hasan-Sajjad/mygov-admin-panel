export default function Authentication(){

    let auth = false;

    if ((JSON.parse(localStorage.getItem('userInfo'))).token){
        auth = true;
    }else{
        auth = false;
    }
    
    return auth;
}