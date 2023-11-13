import React from 'react'
import GoogleLogin from 'react-google-login'
function Google() {
    const clientId = "1027394913320-j3uue43cnlj1mrge46ctgohkpo1okjhn.apps.googleusercontent.com"
    const responseGoogle = (response) =>{
        if(response && response.accessToken){
            console.log(response)
        }
    }
    const onFailure = (response) =>{
        console.log("failed")
    }
  return (
    <div>
       <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
    </div>
  )
}

export default Google
