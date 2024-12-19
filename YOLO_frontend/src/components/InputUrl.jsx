import React, { useState } from "react";
import axios from "axios";

export default function InputUrl() {
  const [url, setUrl] = useState("");
  const [sub, setSub] = useState("");

  function handleChange(e) {
    setUrl(e.target.value);
  }

  async function Submit() {

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/upload",
      data: {  // Use `data` instead of `params` to send the request body
        file_path: "C:\\Users\\egypt\\Downloads\\train\\737.jpg",
        x: 425,
        y: 628,
        w: 180,
        h: 86
      }
    })
      .then(function (response) {
        console.log(response.data);
        setSub(response.data);
      })
      .catch(function (error) {
        console.error("Error:", error.message);
      });
  }

  return (
    <>
      <p className="font-bold text-slate-900">URL: {url}</p>
      <input
        type="text"
        value={url}
        placeholder="Input your image URL"
        className="p-3 border-2 rounded-md border-cyan-200 shadow-md"
        onChange={handleChange}
      />
      <button type="submit" onClick={Submit}>
        Submit
      </button>
      <br/>
      <p>{sub.text}</p>
    </>
  );
}
