import React, { useState } from "react";
import Header from "../layout/user/Header";
import { Outlet } from "react-router-dom";

const PublicRouter = () => {
  const [userLogin, setUserLogin] = useState(() => {
    const userLocal = JSON.parse(localStorage.getItem("userLogin")) || false;
    return userLocal;
  });
  return (
    <>
      <Header userLogin={userLogin} setUserLogin={setUserLogin}></Header>
      <Outlet />
    </>
  );
};

export default PublicRouter;
