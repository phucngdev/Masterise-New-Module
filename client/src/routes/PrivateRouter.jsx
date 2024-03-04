import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layout/admin/Header";
import SideBar from "../layout/admin/SideBar";

const PrivateRouter = () => {
  const [adminLogin, setAdminLogin] = useState(() => {
    const adminLocal = JSON.parse(localStorage.getItem("adminLogin")) || false;
    return adminLocal;
  });

  return (
    <>
      {adminLogin ? (
        <>
          <Header
            adminLogin={adminLogin}
            setAdminLogin={setAdminLogin}
          ></Header>
          <SideBar></SideBar>
          <div className="mt-[56px] ms-[256px]">
            <Outlet></Outlet>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRouter;
