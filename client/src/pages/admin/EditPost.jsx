import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import { findOnePost, uploadPost } from "../../service/post.service";
import * as Yup from "yup";
import "react-markdown-editor-lite/lib/index.css";
import { Button, Input, message } from "antd";
import UploadSingle from "../../components/admin/UploadSingle";
import TextEditor from "../../components/admin/TextEditor";
import TextArea from "antd/es/input/TextArea";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const dispatch = useDispatch();
  const dataPost = useSelector((state) => state.post.userEdit);
  const [imageUpload, setImageUpload] = useState(dataPost?.cover_img);
  const [contentChange, setContentChange] = useState(dataPost?.content);
  const { id } = useParams();

  const loadData = () => {
    dispatch(findOnePost(id));
  };

  useEffect(() => {
    loadData();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: dataPost?.title,
      description: dataPost?.description,
      author: dataPost?.author,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title không được để trống"),
      description: Yup.string().required("description không được để trống"),
      author: Yup.string().required("Author không được để trống"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const newPost = {
        id: uuidv4(),
        cover_img: imageUpload,
        content: contentChange,
        ...values,
        view: 0,
        like: 0,
        comment: [],
        status: 0, // dự định: 0 đã tạo, 1 đã đăng, 2 đã ẩn
        created_at: new Date().toLocaleString(),
      };
      //   dispatch(uploadPost(newPost));
      message.success({
        content: "Upload successful!",
      });
      console.log(newPost);
      //   resetForm();
      //   setImageUpload("");
      //   setContentChange(null);
    },
  });
  return (
    <>
      <div className="w-full h-[100vh] p-4">
        <h3 className="text-2xl font-semibold text-black">Edit post</h3>
        <form className="pb-10" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mt-3">
            <label className="text-lg font-medium" htmlFor="">
              Title post
            </label>
            <Input
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="py-2 my-2"
              placeholder="enter title"
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="form-text error text-red-600">
                {formik.errors.title}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-lg font-medium" htmlFor="">
              Description
            </label>
            <TextArea
              showCount
              maxLength={200}
              rows={4}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="py-2 my-2"
              placeholder="enter description"
              style={{
                resize: "none",
              }}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="form-text error text-red-600">
                {formik.errors.description}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-lg font-medium" htmlFor="">
              Cover Image
            </label>
            <UploadSingle
              setImageUpload={setImageUpload}
              imageUpload={imageUpload}
            ></UploadSingle>
          </div>
          <div className="flex flex-col mt-3">
            <span className="text-lg font-medium">Content</span>
            <TextEditor
              contentChange={contentChange}
              setContentChange={setContentChange}
            ></TextEditor>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex flex-col w-full">
              <label className="text-lg font-medium" htmlFor="">
                Author
              </label>
              <div className="flex items-center justify-between gap-10">
                <div className="flex flex-col w-full">
                  <Input
                    name="author"
                    value={formik.values.author}
                    onChange={formik.handleChange}
                    className="py-2 my-2"
                    placeholder="enter author"
                  />
                  {formik.touched.author && formik.errors.author ? (
                    <div className="form-text error text-red-600">
                      {formik.errors.author}
                    </div>
                  ) : null}
                </div>
                <Button danger htmlType="submit">
                  Lưu thay đổi
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPost;
