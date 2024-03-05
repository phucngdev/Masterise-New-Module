import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function TextEditor({ contentChange, setContentChange }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file
            .then((file) => {
              const fileName = file.name;
              const storageRef = ref(storage, `files/${fileName}`);
              const task = uploadBytes(storageRef, file);
              task
                .then((snapshot) => {
                  getDownloadURL(snapshot.ref)
                    .then((downloadURL) => {
                      resolve({ default: downloadURL });
                    })
                    .catch((error) => {
                      reject(error);
                    });
                })
                .catch((error) => {
                  reject(error);
                });
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div className="my-3">
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        data={contentChange}
        onChange={(event, editor) => {
          setContentChange(editor.getData());
        }}
      />
    </div>
  );
}
