"use client";
import React, { useState } from "react";
import { CldUploadWidget , CldImage } from "next-cloudinary";

interface cloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <div className="p-5">
        {publicId && <CldImage src={publicId} width={270} height={180} alt="pic of Coffee" />}
      <CldUploadWidget
        uploadPreset="vkrueyks"
        onUpload={(result, widget) => {
            console.log(result);
            
          if (result.event !== "success") return;
          const info = result.info as cloudinaryResult
          setPublicId(info.public_id)
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
