import "./post.css";
import { Link } from "react-router-dom";
import {Redirect } from "react-router-dom";

export default function Post({ post }) {
    const PF = "http://localhost:3000/images/";
    // console.log(post);
    return (
        //{user ? <Home /> : <Register />}
        <div>
            <main id="main" style={{"color":"white","margin":"15px"}}>

                {post.status ?
                    
                    <section id="blog" className="blog" style={{"color":"white","padding":"5px","border":"solid 1px white","margin":"0px","backgroundColor":"#263238"}}>
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col-lg-8 entries" style={{"width":"100%"}}>

                                <article className="entry" style={{"width":"100%"}}>

                                    <div className="entry-img">
                                        {post.photo && <img src={PF + post.photo} alt="" className="img-fluid postImg" />}
                                    </div>

                                    <h2 className="entry-title" style={{"width":"100%"}}>
                                        <Link to="/detail" style={{"color":"#F1A408"}}>{post.title}</Link>
                                    </h2>

                                    <div className="entry-meta">
                                        <ul>


                                            {post.categories.map((c) => (<li className="d-flex align-items-center"><i className="bi bi-person" style={{"color":"white","fontSize":"14px","lineHeight":"25px"}}></i> <Link to={`/post/${post._id}`} style={{"color":"white"}}>{c.name}</Link></li>))}
                                            <li className="d-flex align-items-center"><i className="bi bi-clock" style={{"color":"white"}}></i> <Link to={`/post/${post._id}`} ><time datetime="2020-01-01" style={{"color":"white","fontSize":"14px","lineHeight":"25px"}}>{new Date(post.createdAt).toDateString()}</time></Link></li>
                                            {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to={`/post/${post._id}`} >12 Comments</Link></li> */}
                                        </ul>
                                    </div>

                                    <div className="entry-content">
                                        <p style={{"color":"white","fontSize":"14px","lineHeight":"25px"}}>
                                            {post.desc}
                                        </p>
                                        <div className="read-more">
                                            <Link to={`/post/${post._id}`}>Read More</Link>
                                        </div>
                                    </div>

                                </article>



                            </div>



                        </div>

                    </div>
                </section> 
              
                
                    : 
                    
                    <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col-lg-8 entries">

                                <article className="entry">

                                    <div className="entry-img">
                                        {/* {post.photo && <img src={PF + post.photo} alt="" className="img-fluid postImg" />} */}
                                    </div>

                                    <h2 className="entry-title">
                                        <Link to="/detail">{post.title}</Link>
                                    </h2>

                                    <div className="entry-meta">
                                        <ul>


                                            {/* {post.categories.map((c) => (<li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to={`/post/${post._id}`} >{c.name}</Link></li>))} */}
                                            {/* <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to={`/post/${post._id}`} ><time datetime="2020-01-01">{new Date(post.createdAt).toDateString()}</time></Link></li> */}
                                            {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to={`/post/${post._id}`} >12 Comments</Link></li> */}
                                        </ul>
                                    </div>

                                    <div className="entry-content">
                                        <p>
                                            {/* {post.desc} */}
                                        </p>
                                        <div className="read-more">
                                            {/* <Link to={`/post/${post._id}`}>Read More</Link> */}
                                        </div>
                                    </div>

                                </article>



                            </div>



                        </div>

                    </div>
                </section> 
              
                    
                    
                    }
            </main>
        </div>



    );
}
