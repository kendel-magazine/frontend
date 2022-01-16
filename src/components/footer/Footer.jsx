import React, {component} from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

class Footer extends React.Component{
    render(){
        return (
            <div>
                <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="footer-top">
          <div className="container">
            <div className="row">
    
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                  <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bx bx-chevron-right"></i> <Link to="/portfolio">Megazines</Link></li>
                  {/* <li><i className="bx bx-chevron-right"></i> <Link to="/team">Team</Link></li> */}
                  <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bx bx-chevron-right"></i> <Link to="/contact">Contact</Link></li>
                </ul>
              </div>
    
              {/* <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Megazines</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">ቃለመጠይቅ ከአርቲስት መቅደስ ፀጋዬ </a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">ቅፅ 2- ቁጥር 11</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">ቃለመጠይቅ ከአርቲስት ሳያት ደምሴ ጋር</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">ቅፅ 2 - ቁጥር 10</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">የኛ የምንላትን የጋራ ሀገር ማቆም የሁላችንም ሀላፊነት ነው። 
                    ቅፅ2- ቁጥር9</a></li>
                </ul>
              </div> */}
    
              <div className="col-lg-4 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p style={{"fontSize":"14px","lineHeight":"25px"}}>
                  <br/>
                  Addis Ababa<br/>
                  Ethiopia <br/><br/>
                  <strong style={{"fontSize":"14px","lineHeight":"20px"}}>Phone:</strong> ✆ (+251)912178520<br/>
                  <strong style={{"fontSize":"14px","lineHeight":"20px"}}>Phone:</strong> ✆ (+251)924140293<br/>
                  <strong style={{"fontSize":"14px","lineHeight":"20px"}}>Phone:</strong> ✆ (+251)920019699<br/>
                  <strong style={{"fontSize":"14px","lineHeight":"20px"}}>Email:</strong> kdigitalmagazine@gmail.com<br/>
                </p>
    
              </div>
    
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>About ቅንድል ዲጂታል መፅሔት</h3>
                <p>ቅንድል መፅሔት በ Esquare advertising ታትሞ በፌስቡክ እና በቴሌግራም በወር አንዴ የሚወጣ አዝናኝና አስተማሪ  የአማርኛ ዲጂታል መፅሔት ነው!!!
                  ✔️ቅንነትን፣መልካምነትን፣በጎነትን፣ ምክንያታዊነትን እንሰብካለን!!    </p>
                <div className="social-links mt-3">
                  {/* <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link> */}
                  <Link to="http://m.facebook.com/kdigitalmagazine" className="facebook"><i className="bx bxl-facebook"></i></Link>
                  {/* <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link> */}
                  {/* <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link> */}
                </div>
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>ቅንድል ዲጂታል መፅሔት</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
            </div>
        )
    }
}

export default Footer;