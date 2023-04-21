import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { useState,useEffect } from "react";
import Stack from '@mui/material/Stack';
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [profile,setProfile] = useState([])
    const navigate = useNavigate()


    const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID Token : ",response.credential)
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
    const Password = `${userObject.given_name}wegvfejwy1@`
    // Use the decoded JWT ID token to log the user in
    axios
      .post("http://localhost:8000/api/users/login/", {
        email: userObject.email,
        password: Password,
      })
      .then((res) => {
        toast.success("login successful");
        if (res.data) {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          navigate("/home");
        }
        setpassword("");
        setEmail("");
      })
      .catch((err) => {
       toast.error(JSON.stringify(err.response.data));
      });
  }
  

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id : '224073338639-us7klguo2oge970dmf953r2s79kvtt6n.apps.googleusercontent.com',
      callback:handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    )

    
  },[])
  google.accounts.id.prompt()
  return (
    <div className='log'>
    <Stack
      component="form"
      sx={{
        width: '45ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      className='fis'
      
    >
 <div className="infos">
  <h3 className="log-head">Login to ReadNow</h3>
 <div id="signInDiv" className='google'></div>
  <div  className='google'>
  <LoginSocialFacebook
          appId="254106580416175"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
  </div>
  <div className="or">
    or
  </div>
  <a  className='google' href="/register">
  create an account
  </a>
 </div>

    </Stack>
    </div>
  )
}

export default Login