import {React,useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./dashboard.css";
import Posts from "../../components/posts/Posts";

export default function Dashboard() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    var value = 1

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    const handleDelete = async () => {
        try {
          await axios.delete(`/posts/${posts._id}`, {
            data: { username: posts.username },
          });
          window.location.replace("/");
        } catch (err) { }
      };

    const acceptPost = async (e) =>{
        try {
            
           console.log("accept event id ",e.target.id);
           console.log("accept event value ",e.target.value-2);
            //console.log(posts);
          //  posts.forEach((post) => {

                //console.log(post._id);
                const val = e.target.value; 
                const post = posts[val-2];
                if (e.target.id === post._id) {
                    console.log("accepted");
                    // console.log(`${e.target.id}:${post._id}`);
                    post.status = true;

                    await axios.post("/posts", {
                        status: post.status,
                    });
                    // window.location.replace("/post/" + post._id);
                    console.log("from admin dashboard ", post);

                }

            //})
//            posts.status = true
            
        } catch (error) {}
    }

    console.log(posts)
    console.log(value)

    return (
        <div>
            <div className="m-5 p-5">
                <div className="container-scroller">
                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-lg-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Users</h4>
                                                <div className="table-responsive pt-3">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    #
                                                                </th>
                                                                <th>
                                                                    User
                                                                </th>
                                                                <th>
                                                                    Post Title
                                                                </th>
                                                                <th>
                                                                    Post Desc
                                                                </th>
                                                                <th>
                                                                    Actions
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {posts.map((post)=>
                                                            <tr>
                                                                <td>
                                                                    {value++}
                                                                </td>
                                                                
                                                                <td>
                                                                   
                                                                    {post.username}
                                                                </td>
                                                               
                                                                <td>
                                                                {post.title}
                                                                    {/* <div className="progress">
                                                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div> */}
                                                                </td>
                                                                <td width="60px">
                                                                {post.desc}
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-success" onClick={acceptPost} id={post._id} value={value}>Accept</button>
                                                                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                                                                </td>
                                                            </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}