
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


// 3

//https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Analitycs from 'to/analitycs-service';

const App = () => {
  const location = useLocation();
  useEffect(() => {Analitycs.send(location)}, [location])

  return <div>...</div>
}




//const Products = () => {

//  const location = useLocation();

//  return <Link to={location.state.from}>
//  Product 1 </Link>
//}

const Products = () => {

  const location = useLocation();

  return <Link state={{from:location}} to="/products/hoodie-1">
  Product 1 </Link>
}

//{
//   "pathname": "/products",
//   "search": "?name=hoodie&color=orange&maxPrice=500",
//   "hash": "",
//   "state": null,
//   "key": "random-browser-gen-id"
//}

