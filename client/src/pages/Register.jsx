import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { useState,useEffect } from "react";
import Stack from '@mui/material/Stack';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [profile, setProfile] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate()

  //fetches the users location automatically
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.city);
      });
  }, []);
    const handleCallbackResponse = (response) => {
        console.log("Encoded JWT ID Token : ",response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        const Password = `${userObject.given_name}wegvfejwy1@`
        axios
        .post("http://localhost:8000/api/users/register/", {
          email: userObject.email,
          password: Password,
          profile:userObject.picture,
          fullName:userObject.name,
          location
    
        })
        .then((res) => {
          toast.success("Register successful");
          if (res.data) {
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            navigate("/home");
          }
          setpassword("");
          setEmail("");
        })
        .catch((err) => {
          toast.error(err.message)
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
  <h3 className="log-head">Create a ReadNow Account</h3>
 <div id="signInDiv" className='google'></div>
  <div  className='google'>
    sign in with Facebook
  </div>
  <div className="or">
    or
  </div>
  <a  className='google' href="/register">
  Log into  account
  </a>
 </div>

    </Stack>
    </div>
  )
}

export default Register