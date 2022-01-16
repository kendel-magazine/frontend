import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./adminPost.css";
import { Context } from "../../context/Context";

export default function AdminPost(){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        username: user.username,
        title,
        desc,
      };
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try {
        const res = await axios.post("/posts", newPost);
        window.location.replace("/post/" + res.data._id);
      } catch (err) {}
    };
    return(
        <div className="m-5 p-5">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/admin/dashboard">
                        <i class="mdi mdi-grid-large menu-icon"></i>
                        <span class="menu-title">Dashboard</span>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to="/admin/post">
                        <i class="menu-icon mdi mdi-card-text-outline"></i>
                        <span class="menu-title">Post</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
               
                <li class="nav-item">
                    <Link class="nav-link" to="/">
                        <i class="menu-icon mdi mdi-table"></i>
                        <span class="menu-title">Log out</span>
                        <i class="menu-arrow"></i>
                    </Link>

                </li>
            </ul>
        </nav>

        <div class="main-panel">
        <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>

            <footer class="footer">
                <div class="d-sm-flex justify-content-center justify-content-sm-between">
                    <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
                </div>
            </footer>
        </div>

    </div>
    );
}