import React, { useState, useEffect } from "react";
import { StatHelpText } from "@chakra-ui/core";

export default function Cloid() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecom_api");

    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/horlaarsco/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const newfile = await res.json();
    setImage([...image, newfile.secure_url]);
  };
  return (
    <div>
      <h1>Upload Image</h1>
      <input
        type='file'
        name='file'
        placeholder='Upload an image'
        onChange={uploadImage}
      />
      {image.map((images) => (
        <img src={images} style={{ width: "300px" }} />
      ))}

      <button onClick={() => console.log(image)} type='submit'>
        Submit
      </button>
    </div>
  );
}
