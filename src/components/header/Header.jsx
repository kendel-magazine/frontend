import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // <div className="header">
    //   <div className="headerTitles">
    //     <span className="headerTitleSm"></span>
    //     <span className="headerTitleLg">Kendel Megazine</span>
    //   </div>
    //   <img
    //     className="headerImg"
    //     src="https://mumbaimessenger.com/wp-content/uploads/2020/11/Addis-Ababa-Lion_of_Judah-.jpg"
    //     alt=""
    //   />
    // </div>
    <section id="hero-no-slider" className="d-flex justify-cntent-center align-items-center">
    <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <h1>Welcome !</h1>
          <p>እንኳን ደህና መጡ !</p>
          <h2>ቅንድል ዲጂታል መፅሔት</h2>
          <Link to="/megazines" className="btn-get-started ">ለመቀጠል ይጫኑ!</Link>
        </div>
      </div>
    </div>
  </section>
  );
}
