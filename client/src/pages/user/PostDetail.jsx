import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findOnePost } from "../../service/post.service";
import poster from "../../../public/poster-post.png";

const PostDetail = () => {
  const dispatch = useDispatch();
  const dataPost = useSelector((state) => state.post.userEdit);
  const { id } = useParams();

  const loadData = () => {
    dispatch(findOnePost(id));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className="">
        <div className="mt-[60px] relative">
          <img className="opacity-70" src={poster} alt="" />
          <span className="text-5xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            NEW POST
          </span>
        </div>
        <div className="flex flex-col max-w-[70%] mx-auto mt-10">
          <h1 className="text-4xl font-bold text-center text-[#a96b10]">
            {dataPost?.title}
          </h1>
          <div
            className="mt-10"
            dangerouslySetInnerHTML={{ __html: dataPost?.content }}
          />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
