import React, { useState } from "react";
import { Button, Input, Modal, Popconfirm, Tooltip, message } from "antd";
import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../../redux/useSlice/searchSlice";

const Header = ({ adminLogin, setAdminLogin }) => {
  const navigate = useNavigate();
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setQuery(e.target.value));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    localStorage.removeItem("adminLogin");
    setAdminLogin(false);
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
      <Modal
        title="Confirm Logout?"
        open={isModalOpen}
        okType="danger"
        onOk={handleOk}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <div className="fixed top-0 left-0 right-0 bg-white z-[99] h-[56px] border-b border-gray-300 w-full flex items-center justify-between px-10 ">
        <Link to="/admin" className="text-3xl text-black font-semibold">
          MASTERISE
        </Link>
        <Input
          value={query}
          onChange={handleSearchChange}
          placeholder="Search"
          className="w-[35%] border-black"
        />
        <div className="flex items-center gap-4">
          <Tooltip placement="bottom" title="message">
            <MessageOutlined className="text-xl p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300" />
          </Tooltip>
          <Tooltip placement="bottom" title="notification">
            <BellOutlined className="text-xl p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300" />
          </Tooltip>
          <Popconfirm
            className="px-5"
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
            <Button danger>{adminLogin?.email}</Button>
          </Popconfirm>
        </div>
      </div>
    </>
  );
};

export default Header;
