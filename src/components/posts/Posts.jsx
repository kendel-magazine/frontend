import Post from "../post/Post";
import {Redirect } from "react-router-dom";
import "./posts.css";

export default function Posts({ posts }) {
  //const status = posts.status;
 

  const Status = (props)=>{

    const isPost = props.isPost
      //posts.forEach(p => {
      console.log("outside ",isPost);
        if(isPost.status==="true"){
          console.log("inside ",isPost.status)
          console.log(isPost);
          return <Post post={isPost} />
        }
        return ""
       // return window.location.href="/"
         // console.log("from post side ",p.status);   
      //});
  }
  // posts.forEach(element => {
  //     console.log("from post side ",element.status);   
  // });
  //{user ? <Home /> : <Register />}
  return (
    <div className="posts">

      
      {posts.map((p) => (
        
        <Status isPost={p}/>
        // {console.log(p)}
      //  p.status? <Post post={p} />:<Redirect to="/" />
        
      ))}
    </div>
  );
}
