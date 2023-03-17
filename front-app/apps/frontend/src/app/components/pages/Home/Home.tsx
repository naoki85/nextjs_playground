import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../api";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div>
      <p>ログイン中</p>
      <button onClick={() => handleLogout()}>ログアウト</button>
    </div>
  );
};

export default Home;
