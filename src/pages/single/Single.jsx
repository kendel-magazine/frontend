import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div style={{"backgroundColor":"#263238"}}>
      <main id="main" style={{"backgroundColor":"#263238"}}>
        <section className="breadcrumbs" style={{"backgroundColor":"#F1A408"}}>
          <div className="container">

            <div className="d-flex align-items-center">
              <h2>Post</h2>
              <ol >
                <li><Link to="/posts" style={{"textDecoration":"none","color":"white","marginLeft":"15px","fontSize":"14px"}}>Posts</Link></li>
              </ol>
            </div>

          </div>
        </section>
      </main>
      <div className="single">

        <SinglePost />
        {/* <Sidebar /> */}
      </div>
    </div>

  );
}
