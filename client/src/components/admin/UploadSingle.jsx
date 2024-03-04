import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Image, Input, message, Upload } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/config";
import CopyClipBoard from "./CopyClipBoard";
import PreviewPost from "./PreviewPost";

export default function UploadSingle({ setImageUpload, imageUpload }) {
  // Tạo một tham chiếu đến thư mục cần upload có trên firebase
  const listImageRef = ref(storage, "files/");

  const props = {
    name: "file",
    onChange(info) {
      console.log(info);
      if (info.file.status === "done") {
        // Lấy url từ firebase sau khi upload file thành công
        const downloadUrl = info.file.response.url;

        // Lưu trữ link lấy về vào trong state
        setImageUpload(downloadUrl);
        message.success("Tải ảnh thành công.");
      } else if (info.file.status === "error") {
        message.error("Tải ảnh thất bại");
      }
    },
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        // Tạo một tham chiếu đến thư mục chứa hình ảnh trên firebase
        const imageRef = ref(listImageRef, file.name);
        // Tải hình ảnh lên firebase
        await uploadBytes(imageRef, file);
        // Lấy đường dẫn của file vừa upload
        const downloadUrl = await getDownloadURL(imageRef);
        // Gửi thông báo cho phần onchange ở trên
        onSuccess({ url: downloadUrl });
      } catch (error) {
        onError(error);
      }
    },
  };
  return (
    <div className="flex flex-col gap-2 my-3">
      <div className="flex items-center">
        <div className="flex items-center gap-5 w-[50%] ">
          <Image
            width={200}
            height={200}
            className="object-cover"
            src={imageUpload}
            fallback={import.meta.env.VITE_REACT_APP_FALLBACK}
          />
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
      </div>
    </div>
  );
}
