import { Image } from "antd";
import React from "react";

const PreviewPost = ({ title, imageUpload }) => {
  return (
    <>
      <div className="flex flex-col items-center flex-1 border-s border-[#e5e7eb]">
        <Image
          width={300}
          height={170}
          className="object-cover"
          src={imageUpload}
          fallback={import.meta.env.VITE_REACT_APP_FALLBACK}
        />
        <span className="max-w-[300px]">{title}</span>
      </div>
    </>
  );
};

export default PreviewPost;
