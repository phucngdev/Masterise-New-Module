import React, { useEffect, useState } from "react";
import poster from "../../../public/poster-post.png";
import { useDispatch, useSelector } from "react-redux";
import { findAllPost } from "../../service/post.service";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Posts = () => {
  const dispatch = useDispatch();
  const dataPost = useSelector((state) => state.post.data);

  const loadData = () => {
    dispatch(findAllPost());
  };

  useEffect(() => {
    loadData();
  }, []);

  const filterData = dataPost.filter((post) => post.status === 1);

  return (
    <>
      <div className="bg-[#f8f6ee]">
        <div className="mt-[60px] relative">
          <img className="opacity-70" src={poster} alt="" />
          <span className="text-5xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            NEW POST
          </span>
        </div>
        <div className="grid grid-cols-3 gap-6 px-[5%] my-10">
          {filterData.map((item) => (
            <Link
              to={`/posts/${item.id}`}
              key={item.id}
              className="h-[520px] justify-between flex flex-col cursor-pointer bg-white rounded-xl shadow-xl hover:shadow-2xl"
            >
              <img
                className="rounded-xl w-full h-[250px] object-cover"
                src={item.cover_img}
                alt=""
              />
              <div className="h-[234px] flex flex-col justify-between gap-4 px-5 py-2">
                <h3 className="text-xl font-medium h-auto line-clamp-3">
                  {item.title}
                </h3>
                <div className="">
                  <span className="max-h-[70px] overflow-hidden line-clamp-3">
                    {item.description}
                  </span>
                  <div className="mt-4 flex items-center justify-between">
                    <span>{item.author}</span>
                    <Button className="rounded-full">Xem thêm</Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
