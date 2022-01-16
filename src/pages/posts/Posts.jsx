import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import "./posts.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            {/* <Header /> */}
            <div>
                <main id="main" style={{"backgroundColor":"#263238","color":"white","fontSize":"14px","lineHeight":"25px"}}>
                    <section className="breadcrumbs" style={{"backgroundColor":"#F1A408"}}>
                        <div className="container">

                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Blog</h2>
                                <Link to="/write">
                                    <button type="submit" class="btn me-2" style={{"backgroundColor":"#263238","color":"white"}}>Create a post</button>
                                </Link>


                            </div>

                        </div>

                    </section>
               
                
                <Posts posts={posts} />

                </main>
            </div>
        </>
    );
}
