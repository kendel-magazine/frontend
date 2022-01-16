import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  };

  return (
    <div className="container" style={{"color":"white"}}>
      <main id="main" style={{"color":"white"}}>



        <section id="blog" className="blog" style={{"color":"white","backgroundColor":"#263238"}}>
          <div className="container" data-aos="fade-up">

            <div className="row" style={{"backgroundColor":"#263238"}}>

              <div className="col-lg-8 entries">

                <article className="entry entry-single" style={{"border":"solid 1px white","color":"white"}}>


                  <div className="entry-img">
                    {post.photo && (<img src={PF + post.photo} alt="" className="img-fluid singlePostImg" />)}
                  </div>
                  {updateMode ? (
                    <input
                      type="text"
                      value={title}
                      className="singlePostTitleInput"
                      autoFocus
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  ) : (
                    <h1 className="entry-title singlePostTitle" style={{"color":"white"}}>
                      {title}
                      {post.username === user?.username && (
                        <div className="entry-meta">
                          <div className="singlePostEdit" style={{"color":"white"}}>
                            <i
                              className="singlePostIcon far fa-edit"
                              onClick={() => setUpdateMode(true)}
                              style={{"color":"white"}}
                            ></i>
                            <i
                              className="singlePostIcon far fa-trash-alt"
                              onClick={handleDelete}
                              style={{"color":"white"}}
                            ></i>
                          </div>
                        </div>
                      )}
                    </h1>
                  )}

                  {/* <h2 className="entry-title">
                    {title}
                  </h2> */}

                  <div className="entry-meta">
                    <ul style={{"color":"white"}}>
                      <li className="d-flex align-items-center"><i className="bi bi-person" style={{"color":"white"}}></i> <Link to={`/?user=${post.username}`}style={{"color":"white"}}>{post.username}</Link></li>
                      <li className="d-flex align-items-center"><i className="bi bi-clock" style={{"color":"white"}}></i> <a href="/posts"><time datetime="2020-01-01"style={{"color":"white"}}>{new Date(post.createdAt).toDateString()}</time></a></li>
                      {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
                    </ul>
                  </div>

                  <div className="entry-content">
                    {updateMode ? (
                      <textarea
                      rowsMin={50}
                        className="singlePostDescInput"
                        style={{ width: "100%" }}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    ) : (
                      <p className="singlePostDesc" style={{"color":"white"}}>{desc}</p>
                    )}
                    {updateMode && (
                      <button className="singlePostButton btn btn-warning me-2" onClick={handleUpdate}>
                        Update
                      </button>
                    )}




                    <blockquote>
                      <p>
                        {title}
                      </p>
                    </blockquote>


                  </div>

                  {/* <div className="entry-footer">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li><a href="#">Business</a></li>
                    </ul>

                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li><a href="#">Creative</a></li>
                      <li><a href="#">Tips</a></li>
                      <li><a href="#">Marketing</a></li>
                    </ul>
                  </div> */}

                </article>


              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
