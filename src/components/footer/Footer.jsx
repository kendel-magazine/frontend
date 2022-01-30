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
                <p>በዚህ የዲጂታል ዓለም ሰዎች እንደ ቀደሞው ግዜ እውቀትን፣ ምክንያታዊነትን እና ንቃትን ለመመርመር የግድ የቤተ -መጽሐፍትን በር ማንኳኳት አይጠበቅባቸውም ምክንያቱም ዛሬ ላይ የተለያዩ የቴክኖሎጂ ውጤቶች የሰውን ልጅ እውቀት፣ ምክንያታዊነት እና ብስለት የሚጨምሩ ከፍ ሲልም አዲስ የፈጠራ ችሎታን የሚያዳብሩ መጣጥፎችን በቀላሉ ማድረስ እንዲችሉ ተደርገው ተሰርተዋል፡፡ በዚህም ቅንድል ዲጂታል መጽሔት እስከዛሬ ካሉት የመጽሄት አይነቶች በአይነቱ ለየት በማለት በማህበራዊ ሚድያ፣ በዌብሳይት እና በሞባይል መተግበርያ  ሰዎች በየትኛውም ጊዜና ቦታ ሆነው በዲጂታል ቴክኖሎጂ በመታገዝ በቀላሉ መረጃ እንዲያገኙ እና የንባብ ባህላቸውን እንዲያዳብሩ በበሰሉ ብዕረኞች የምትዘጋጅ በማህበራዊ፣ ሀገራዊ፣ ስነ-ልቦናዊ፣ ቴክኖሎጂ፣ ባህል፣  ጥበብና ጤና ነክ ጉዳዮች ዙሪያ የሚያተኩር ዲጂታል መፅሔት ነው፡፡

ቅንነትን ፣ ምክንያታዊነትን እና ሀገር ፍቅርን ከፍ ባለ ድምፅ እንሰብካለን፡፡   </p>
                <div className="social-links mt-3">
                  <Link onClick={()=>window.open("https://www.youtube.com/channel/UCMvSL9y2zS3KGmUfXEgSM_w","_blank")} className="twitter"><i className="bx bxl-youtube"></i></Link>
                  <Link onClick={()=>window.open("http://m.facebook.com/kdigitalmagazine","_blank")} className="facebook"><i className="bx bxl-facebook"></i></Link>
                  <Link onClick={()=>window.open("https://t.me/KenDelM","_blank")} className="instagram"><i className="bx bxl-telegram"></i></Link>
                  <Link onClick={()=>window.open("https://www.linkedin.com/in/kendel-digital-magazine-24171b229/","_blank")} className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
          Developed By: <a onClick={()=>window.open("https://www.linkedin.com/in/betselot-getnet-2423561aa/","_blank")}>Betselot Getnet</a><br/>

            &copy; Copyright <strong><span>ቅንድል ዲጂታል መፅሔት</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
            </div>
        )
    }
}

export default Footer;