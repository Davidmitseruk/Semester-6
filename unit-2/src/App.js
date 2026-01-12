
// 1

import {replace, useNavigate} from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const res = await fakeAPI.login(values)
    if(res.succes){
      navigate("/profile"), {replace: true}
    }
  };

  return(
    <div>
      <h1>login page</h1>
      <LoginForm onsubmit={handleSubmit}/>
    </div>
  )
};



// 2
import { Navigate, useState } from "react-router-dom";

export const Llogin = () => {
  const [isLoginSucces, setIsLoginSucces] = useState(false);

  const handleSubmit = async values => {
    const res = await fakeAPI.login(values)
    setIsLoginSucces(res.succes);
  };

  if(isLoginSucces){
    return <Navigate to="/profile" replace/>
  }

  return(
    <div>
      <h1>login page</h1>
      <LoginForm onsubmit={handleSubmit}/>
    </div>
  )
}


