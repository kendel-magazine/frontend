/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <div style={{ "backgroundColor": "black" }}>
        {/* <div class="loading">


        <div class="windows8 loading-position">
          <div class="wBall" id="wBall_1">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_2">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_3">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_4">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_5">
            <div class="wInnerBall"></div>
          </div>
        </div>
      </div> */}
        <nav class="navbar navbar-fixed-top navigation" style={{ "backgroundColor": "#263238" }}>
          <div class="container">
            <div class="navbar-header" style={{ "backgroundColor": "#263238" }}>
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              {/* <Link class="navbar-brand logo" to="/" style={{"display":"left"}}>
              <img src="D:\duplicate Kendel\kendelM\client\public\images\logo.png" alt="" />
            </Link> */}
            </div>

            <div class="collapse navbar-collapse navbar-ex1-collapse">
              {/* <img src="../../"/> */}
              <ul class="nav navbar-nav navbar-right menu" style={{ "display": "inline","backgroundColor": "#263238" }}>
              {/* <li><img src="../../public/images/logo.png"/></li> */}
                <li><Link to="/" style={{ "hover": "#263238","backgroundColor": "#263238" }}>Home</Link></li>
                {/* <li><a href="services.html">Service</a></li> */}
                <li> <Link to="/megazines" style={{ "hover": "#263238","backgroundColor": "#263238" }}>
                  MEGAZINES
                </Link></li>
                <li><Link to="/posts" style={{ "hover": "#263238","backgroundColor": "#263238" }}>
                  POSTS
                </Link></li>
                <li><Link to="/team" style={{ "hover": "#263238","backgroundColor": "#263238" }} className="mr-3">
                  Team
                </Link></li>
                <li><Link to="/contact" style={{ "hover": "#263238","backgroundColor": "#263238" }} className="mr-3">
                  CONTACT
                </Link></li>
                <li>
                {user && 
                <button onClick={handleLogout} style={{ "hover": "#263238","backgroundColor": "#263238" }} className="btn btn-warning mt-3 mx-lg-5">LOGOUT</button> }
                  
                </li>
                {user ? (
                  <Link to="/settings">
                    <img className="topImg" src={PF + user.profilePic} alt="" style={{"border":"solid 1px #F1A408","borderRadius":"100%","width":"35px","height":"35px"}}/>
                  </Link>
                ) : (
                  // <ul className="topList">

                  <ul>
                    <li>
                      <Link to="/login" >
                        <button style={{ "hover": "#263238","backgroundColor": "#263238" }} className="btn btn-warning">LOGIN</button>
                        
                      </Link>
                    </li>
                    <li>
                      <Link to="/register">
                      <button style={{ "hover": "#263238","backgroundColor": "#263238" }} className="btn btn-warning">REGISTER</button>
                      </Link>
                    </li>
                  </ul>
                )}

              </ul>
              {/* <div className="topRight">
            {user ? (
              <Link to="/settings">
                <img className="topImg" src={PF + user.profilePic} alt="" />
              </Link>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
          </div> */}
            </div>

          </div>
        </nav>
      </div>
    </div>


  );
}
