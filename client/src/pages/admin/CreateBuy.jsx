import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { uploadPost } from "../../service/post.service";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Button, Input } from "antd";
import UploadSingle from "../../components/admin/UploadSingle";

const CreateBuy = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const mdParser = new MarkdownIt();
  function handleEditorChange({ html }) {
    setContent(html);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      title: "đây là post",
      content: "helo",
      created_at: new Date().toLocaleString(),
    };
    // dispatch(uploadPost(newPost));
  };
  return (
    <>
      <div className="w-full h-[100vh] p-4">
        <h3 className="text-2xl font-semibold text-black">Create buy</h3>
        <form className="">
          <div className="flex flex-col">
            <label className="text-lg font-medium" htmlFor="">
              Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="py-2 my-2"
              placeholder="enter title"
            />
          </div>
          <UploadSingle title={title}></UploadSingle>
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        </form>
      </div>
    </>
  );
};

export default CreateBuy;
