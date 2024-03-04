import React, { useState } from "react";
import {
  BellOutlined,
  CrownOutlined,
  DollarOutlined,
  HeartOutlined,
  ProfileOutlined,
  ShopOutlined,
  TabletOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Navigate from "../../components/user/Navigate";
import { Button, Modal, Popconfirm, message } from "antd";

const Header = ({ userLogin, setUserLogin }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    localStorage.removeItem("userLogin");
    setUserLogin(false);
    message.success({
      content: "Logged out successfully",
    });
    navigate("/");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="w-full z-[999] px-[5%] fixed top-0  bg-white bg-opacity-90 mx-auto h-[60px] flex items-center justify-between ">
        <Link to="/" className=" font-bold text-3xl ">
          Masteriseland
        </Link>
        <div className="flex items-center gap-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Navigate navigate={"/"} icon={<CrownOutlined />} text={"Home"} />

          <Navigate
            navigate={"/buys"}
            icon={<DollarOutlined />}
            text={"Buys"}
          />
          <Navigate navigate={"/rent"} icon={<ShopOutlined />} text={"Rent"} />
          <Navigate
            navigate={"/posts"}
            icon={<ProfileOutlined />}
            text={"Posts"}
          />
          <Navigate
            navigate={"/likes"}
            icon={<HeartOutlined />}
            text={"Likes"}
          />
          <Navigate
            navigate={"/contact"}
            icon={<TabletOutlined />}
            text={"Contact"}
          />
        </div>
        <div className="flex items-center gap-3 max-w-[200px]">
          <Navigate navigate={"/notification"} icon={<BellOutlined />} />
          {userLogin ? (
            <Popconfirm
              title={
                <>
                  <h3 className="text-center">Log out here</h3>
                </>
              }
              description={
                <>
                  <Button
                    onClick={showModal}
                    danger
                    className="mt-5 px-8 py-5 flex items-center justify-center"
                  >
                    Log out
                  </Button>
                </>
              }
              showCancel={false}
              icon={false}
            >
              <Button danger>{userLogin?.email}</Button>
            </Popconfirm>
          ) : (
            <Navigate
              navigate={"/login"}
              icon={<UserOutlined />}
              text={"Login"}
            />
          )}
        </div>
      </div>
      <Modal
        title="Confirm Logout?"
        open={isModalOpen}
        okType="danger"
        onOk={handleOk}
        onCancel={handleCancel}
        width={400}
      ></Modal>
    </>
  );
};

export default Header;
