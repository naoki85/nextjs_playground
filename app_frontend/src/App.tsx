import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {GuestRoute, PrivateRoute} from "./AuthRouter";
import {Top} from "./components/pages/top";
import {Signup} from "./components/pages/signup";
import {Login} from "./components/pages/login";
import {Home} from "./components/pages/home";
import {NotFoundPage} from "./components/pages/errors/notfound";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<GuestRoute children={<Top />}></GuestRoute>}/>
        <Route path={"/signup"} element={<GuestRoute children={<Signup />}></GuestRoute>}/>
        <Route path={"/login"} element={<GuestRoute children={<Login />}></GuestRoute>}/>
        <Route path={"/home"} element={<PrivateRoute children={<Home />}></PrivateRoute>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App;
