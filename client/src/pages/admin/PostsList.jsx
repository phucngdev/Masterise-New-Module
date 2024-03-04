import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findAllPost,
  removePost,
  uploadPost,
} from "../../service/post.service";
import { Button, Image, Modal, message } from "antd";

const PostsList = ({ status }) => {
  const dispatch = useDispatch();
  const dataPost = useSelector((state) => state.post.data);
  const [filterStatus, setFilterStatus] = useState();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);
  const [isModalHiddenOpen, setIsModalHiddenOpen] = useState(false);
  const [isModalUnHiddenOpen, setIsModalUnHiddenOpen] = useState(false);
  const [selectId, setSelectId] = useState("");

  const loadData = () => {
    dispatch(findAllPost());
  };
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const filterData = dataPost.filter((post) => post.status === status);
    setFilterStatus(filterData);
  }, [status]);

  const statusFilter = status === 9 ? dataPost : filterStatus;

  const showModalDelete = (id) => {
    setIsModalDeleteOpen(true);
    setSelectId(id);
  };
  const handleOkDelete = () => {
    dispatch(removePost(selectId));
    message.success({
      content: "Delete successfully",
    });
    setIsModalDeleteOpen(false);
  };

  const showModalHidden = (id) => {
    setIsModalHiddenOpen(true);
    setSelectId(id);
  };
  const showModalUnHidden = (id) => {
    setIsModalUnHiddenOpen(true);
    setSelectId(id);
  };

  const handleCancel = () => {
    setIsModalDeleteOpen(false);
    setIsModalUploadOpen(false);
  };

  const showModalUpload = (id) => {
    setIsModalUploadOpen(true);
    setSelectId(id);
  };
  const handleOkUpload = (statusUpload) => {
    dispatch(
      uploadPost({ id: selectId, statusUpdate: { status: statusUpload } })
    )
      .then(() => {
        message.success({
          content: `${statusUpload === 1 ? "Upload" : "Hidden"} successfully`,
        });
        setIsModalUploadOpen(false);
        setIsModalHiddenOpen(false);
        setIsModalUnHiddenOpen(false);
        loadData();
      })
      .catch((error) => {
        console.log("Error uploading post:", error);
        message.error({
          content: "Failed to upload post",
        });
      });
  };

  return (
    <>
      <Modal
        title="Confirm delete?"
        open={isModalDeleteOpen}
        okType="danger"
        onOk={handleOkDelete}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <Modal
        title="Confirm upload?"
        open={isModalUploadOpen}
        okType="danger"
        onOk={() => handleOkUpload(1)}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <Modal
        title="Confirm hidden?"
        open={isModalHiddenOpen}
        okType="danger"
        onOk={() => handleOkUpload(2)}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <Modal
        title="Confirm unhidden?"
        open={isModalUnHiddenOpen}
        okType="danger"
        onOk={() => handleOkUpload(1)}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <div className="w-full h-[100vh] overflow-auto p-4">
        <h3 className="text-2xl font-semibold text-black mb-3">Create post</h3>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border">
            <div className="w-[5%] text-center">Stt</div>
            <div className="w-[55%] border-x  text-center">Post</div>
            <div className="w-[20%] border-e  text-center">Author</div>
            <div className="w-[20%]  text-center">Feture</div>
          </div>
          <div className="flex flex-col">
            {statusFilter?.map((item, index) => (
              <div key={item.id} className="h-[200px] flex items-center border">
                <div className="w-[5%] text-center">{index + 1}</div>
                <div className="w-[55%] border-x p-2">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[40%] h-[180px] rounded-xl object-cover"
                      src={item.cover_img}
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-base">{item.title}</h3>
                      <p className="text-sm">{item.created_at}</p>
                    </div>
                  </div>
                </div>
                <div className="w-[20%] border-e h-full flex items-center justify-center text-center">
                  {item.author}
                </div>
                <div className="w-[20%] flex flex-col gap-2 items-center justify-around">
                  <Button className="w-[70%] " type="default">
                    Edit
                  </Button>
                  <Button
                    onClick={() => showModalDelete(item.id)}
                    className="w-[70%] "
                    danger
                  >
                    Delete
                  </Button>
                  {item.status === 0 ? (
                    <Button
                      onClick={() => showModalUpload(item.id)}
                      className="w-[70%] bg-blue-500"
                      type="primary"
                    >
                      Upload
                    </Button>
                  ) : item.status === 1 ? (
                    <Button
                      onClick={() => showModalHidden(item.id)}
                      className="w-[70%] bg-blue-500"
                      type="primary"
                    >
                      Hidden
                    </Button>
                  ) : (
                    <Button
                      onClick={() => showModalUnHidden(item.id)}
                      className="w-[70%] bg-blue-500"
                      type="primary"
                    >
                      Un hidden
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsList;
