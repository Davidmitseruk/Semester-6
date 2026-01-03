import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from "./App"
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
);


