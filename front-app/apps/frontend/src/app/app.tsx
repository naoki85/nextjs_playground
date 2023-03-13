// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import {Route, Routes} from "react-router-dom";
import {GuestRoute, PrivateRoute} from "./routers/AuthRouter";
import Top from "./components/pages/Top/Top";
import Signup from "./components/pages/Signup/Signup";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import NotFoundPage from "./components/pages/Errors/NotFound";

export function App() {
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
  );
}

export default App;
