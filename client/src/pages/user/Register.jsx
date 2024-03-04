import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { post } from "../../service/user.service";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (userEmail === "") {
      message.info({
        content: "Please enter your email",
      });
    } else if (password === "") {
      message.info({
        content: "Please enter your password",
      });
    } else {
      const newUser = {
        id: uuidv4(),
        email: userEmail,
        password: password,
        type: "user",
        createdTime: new Date().toLocaleString(),
      };
      dispatch(post(newUser));
      message.success({
        content: "Registration successful. Welcome!",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <>
      <img
        className="w-[100vw] h-[100vh] object-cover fixed top-0 left-0 bottom-0 right-0 z-[-10]"
        src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1708784218~exp=1708787818~hmac=a0565cd9f1ac0147adf0d0ac10b29a8653021811343cd37128965768347550a8&w=1800"
        alt=""
      />
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex justify-around items-center rounded-2xl w-[80%] h-[80%] bg-blue-200 bg-opacity-50">
          <div className="w-[60%] flex flex-col gap-3 items-center justify-center">
            <Link to="/" className="text-5xl mb-5 text-white font-extrabold">
              MASTERISE LAND
            </Link>
            <h3 className="text-3xl text-[#cbe040] font-extrabold">
              Turn your dreams into reality
            </h3>
            <h3 className="text-3xl text-white font-extrabold">
              Delivering the finest services
            </h3>
          </div>
          <div className="flex-1 flex flex-col py-5 px-10 bg-white h-full">
            <h3 className="text-3xl text-black font-medium">
              Welcome To Masterise
            </h3>
            <span className="mt-3">Please enter your info</span>
            <form onSubmit={handleRegister} className="mt-3 flex flex-col">
              <Input
                className="py-2 my-2 border-black"
                type="text"
                placeholder="Your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <Input
                className="py-2 my-2 border-black"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                htmlType="submit"
                className="mt-4 text-lg py-5 font-medium bg-blue-600 text-white flex items-center justify-center"
              >
                Register
              </Button>
            </form>
            <div className="my-5 flex items-center justify-between">
              <div className="w-[40%] h-[1px] bg-black"></div>
              <div className="">OR</div>
              <div className="w-[40%] h-[1px] bg-black"></div>
            </div>
            <Button className=" mb-3 text-lg py-5 font-medium bg-blue-600 text-white flex items-center justify-center">
              <GoogleOutlined />
              Gooogle
            </Button>
            <Button className="text-lg py-5 font-medium bg-blue-600 text-white flex items-center justify-center">
              <FacebookOutlined />
              Facebook
            </Button>
            <span className="mt-5 text-center">
              You have account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
