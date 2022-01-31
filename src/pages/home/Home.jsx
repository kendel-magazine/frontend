import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{"backgroundColor":"#263238","color":"white"}}>
     
    <section id="hero-no-slider" className="d-flex justify-cntent-center align-items-center" style={{"marginTop":"50px"}}>
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <h1 className="d-sm-none d-md-block" style={{"fontSize":"350%"}}>Welcome !</h1>
            <p style={{"fontSize":"190%"}}>እንኳን ደህና መጡ !</p>
            <h2>ቅንድል ዲጂታል መፅሔት</h2>
            <Link to="/megazines" className="btn-get-started " style={{"fontWeight":"bolder","fontSize":"100%"}}>ለመቀጠል ይጫኑ!</Link>
          </div>
        </div>
      </div>
    </section>
  
    <main id="main" style={{"backgroundColor":"#263238","fontSize":"100%"}}>
      <section className="why-us section-bg" data-aos="fade-up" date-aos-delay="200" style={{"backgroundColor":"#263238","color":"white"}}>
        <div className="container" style={{"backgroundColor":"#263238","color":"white"}}>
  
          <div className="row" style={{"backgroundColor":"#263238"}}>
            <div className="col-lg-6 video-box">
              <img src="assets/img/kendel.jpg" className="img-fluid" alt=""/>
              <Link onClick={()=>window.open("https://www.youtube.com/channel/UCMvSL9y2zS3KGmUfXEgSM_w","_blank")} className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></Link>
            </div>
  
            <div className="col-lg-6 d-flex flex-column justify-content-center p-5" style={{"backgroundColor":"#263238","color":"white"}}>
  
              <div className="icon-box" >
                <div className="icon" style={{"background":"#F1A408"}}><i className="bx bx-fingerprint" style={{"color":"white"}}></i></div>
                <h4 className="title"><Link to="/" style={{"color":"white","fontSize":"16px"}}>ስለ እኛ</Link></h4>
                <p className="description" style={{"fontSize":"14px"}}>ቅንድል ዲጂታል መፅሔት በቅንድል ኢትዮጵያ የባለራዕይ  ወጣቶች ተዘጋጅቶ በቅንድል ዲጂታል ሚዲያ እና በ E-square አድቨርታይዚንግ እና ኢቨንትስ የሚቀርብ በማህበራዊ ፣ ሀገራዊ ፣ ስነ ልቦናዊ ፣ ቴክኖሎጂ ፣ ባህል ፣  ጥበብና ጤና ነክ ጉዳዮች ዙሪያ የሚያተኩር ዲጂታል መፅሔት ነው፡፡
የካቲት 2011 ተቋቋመ።</p>
              </div>
  
              <div className="icon-box">
                <div className="icon" style={{"background":"#F1A408"}}><i className="bx bx-gift" style={{"color":"white"}}></i></div>
                <h4 className="title"><Link to="" style={{"color":"white","fontSize":"16px"}}>ስለ እኛ</Link></h4>
                <p className="description" style={{"color":"white","fontSize":"14px"}}>በዚህ የዲጂታል ዓለም ሰዎች እንደ ቀደሞው ግዜ እውቀትን፣ ምክንያታዊነትን እና ንቃትን ለመመርመር የግድ የቤተ -መጽሐፍትን በር ማንኳኳት አይጠበቅባቸውም ምክንያቱም ዛሬ ላይ የተለያዩ የቴክኖሎጂ ውጤቶች የሰውን ልጅ እውቀት፣ ምክንያታዊነት እና ብስለት የሚጨምሩ ከፍ ሲልም አዲስ የፈጠራ ችሎታን የሚያዳብሩ መጣጥፎችን በቀላሉ ማድረስ እንዲችሉ ተደርገው ተሰርተዋል፡፡ በዚህም ቅንድል ዲጂታል መጽሔት እስከዛሬ ካሉት የመጽሄት አይነቶች በአይነቱ ለየት በማለት በማህበራዊ ሚድያ፣ በዌብሳይት እና በሞባይል መተግበርያ  ሰዎች በየትኛውም ጊዜና ቦታ ሆነው በዲጂታል ቴክኖሎጂ በመታገዝ በቀላሉ መረጃ እንዲያገኙ እና የንባብ ባህላቸውን እንዲያዳብሩ በበሰሉ ብዕረኞች የምትዘጋጅ በማህበራዊ፣ ሀገራዊ፣ ስነ-ልቦናዊ፣ ቴክኖሎጂ፣ ባህል፣  ጥበብና ጤና ነክ ጉዳዮች ዙሪያ የሚያተኩር ዲጂታል መፅሔት ነው፡፡

ቅንነትን ፣ ምክንያታዊነትን እና ሀገር ፍቅርን ከፍ ባለ ድምፅ እንሰብካለን፡፡</p>
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    <section className="services" style={{"backgroundColor":"#263238"}}>
      <div className="container">
  
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up"  >
            <div className="icon-box icon-box-pink" style={{"backgroundColor":"#F1A408"}}>
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title" style={{"fontSize":"16px"}}><Link to="" >Vision</Link></h4>
              <p className="description" style={{"fontSize":"16px"}}>Building a prominent & reliable media that promotes sincerity, disseminates rationality and patriotism in local and international Languages in 2033.</p>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box icon-box-cyan" style={{"backgroundColor":"#F1A408"}}>
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title" style={{"fontSize":"16px"}}><Link to="">Mission</Link></h4>
              <p className="description" style={{"fontSize":"16px"}}>	Enabling youths to be reasonable and responsible </p>
              <p className="description" style={{"fontSize":"16px"}}>	Producing writings that promote social togetherness, peace and values of the community </p>
              <p className="description" style={{"fontSize":"16px"}}>	Promoting sincerity as the motive of human being </p>
              <p className="description" style={{"fontSize":"16px"}}>	Creating positive impact on reachable technological & Social media outlets </p>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box icon-box-green" style={{"backgroundColor":"#F1A408"}}>
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><Link to="">Goals</Link></h4>
              <p className="description">Creating visionary, reasonable and rational youth with indigenous culture, language, values, and enabling them to be figures in sincerity and other social aspects to the rest of the people.  Beyond this the goal of Kendel Digital Magazine is capacitating the youth with rational and balanced knowledge and wisdom.</p>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box icon-box-blue" style={{"backgroundColor":"#F1A408"}}>
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><Link to="">Values</Link></h4>
              <p className="description">	Sincerity
	Rationality
	Patriotism 
	Reliability
	Accountability
	Inclusiveness
	Achievement 
</p>
            </div>
          </div>
  
        </div>
  
      </div>
    </section>
      <section className="features">
        <div className="container">
  
          <div className="section-title">
            <h2 style={{"fontSize":"25px"}}> የቅንድል ዲጂታል መፅሔት ራዕይ(Vision)</h2>
            <p style={{"fontSize":"20px","lineHeight":"25px"}}> በ2025 ዓ.ም  በኢትዮጵያ ብሎም በምስራቅ አፍሪካ ቅንነትን የሚሰብክ ፣ ምክንያታዊነትን የሚያሰርፅ ፣ ሀገር ፍቅር ስሜትን የሚያቀጣጥል በተለያዩ የሀገር ውስጥና የውጭ ቋንቋዎች የሚሰራ እውቅና ያለው ትልቅ የሚዲያ ተቋም መገንባት ነው ፡፡</p>
          </div>
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5">
              <img src="assets/img/features-1.svg" className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7 pt-4">
              <h3>የዲጂታል መፅሔቱ ጠቀሜታ </h3>
              <p className="fst-italic" style={{"fontSize":"14px","lineHeight":"20px"}}>
              ዲጂታል መፅሔታችን የሚከተሉትን ጠቀሜታዎች ለሀገር ታበረክታለች ብለን እናምናለን፡፡

              </p>
              <ul>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>
                በሀገራችን አሁን ላይ የሚታየውን የጥላቻ፣ የመጠላለፍ፣ የመናናቅ እና የመከፋፈል ጨለማን በይቅርታ፣ በፍቅር፣ በአንድነት፣ በመቻቻል፣ በመከባበር እና በሀገር አንድነት ብርሀን ድል ማድረግ እንደሚቻል ማህበረሰባችንን ታስተምራለች፡፡
                </li>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>ወጣቶች በትምህርት ከሚያገኙት ሳይንሳዊ እውቀት እና ክህሎት በተጨማሪ የተሻጋሪ ትውልድ መለያ የሆኑትን ምክንያታዊነት፣ ቅንነትና ሀገር ፍቅርን መርሀቸው እንዲያደረጉ ከማገዝ አልፎ በውይይት የሚያምኑ ወጣቶች መፍለቂያ እንዲሆኑ ያግዛል፡፡
የሀገራችን አንጋፋ እና ወጣት ምሁራን ልምዳቸውን እና እውቀታቸውን ለታናናሾቻቸው የሚያካፍሉበትን መድረክ በማመቻቸት ከፍተኛ አስተዋጾ ያበረክታል፡፡</li>
<li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i> የአንድ ሀገር ስልጣኔ ከእውቀት ፣ ከምክንያታዊ አስተሳሰብ ፣ ከሀገር ፍቅር እና ኪነ-ጥበብ ይመነጫል ብለን ስለምናምን ቅንድል ዲጂታል መፅሔት የሀገራችንን ባህል ወግና ስርዓት በመላው የሀገሪቱ ክፍል ከማስተዋወቅ በዘለለ ለታዳጊ ወጣቶች እና ህጻናት በኪነ-ጥበብ ስራዎች ቅንነትን፣ ምክንያታዊነትንና ሀገር ፍቅርን ለማስረጽ ከፍተኛ ሚና ይኖረዋል፡፡</li>
              </ul>
            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/img/features-2.svg" className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>ኩነቶች እና ተሞክሮዎቻችን</h3>
              <p className="fst-italic" style={{"fontSize":"14px","lineHeight":"20px"}}>
              በሀገራችን ላይ የሚገኙ የታሪክ ስፍራዎችን እና የቱሪስት መስእቦችን ከተለያዩ ወጣቶች ጋር በመሆን የምንጎበኝበትን መንገድ ቢያንስ በዓመት  ፫ ጊዜ በተቀናጀ መልኩ ማዘጋጀት ነዉ።  ይህም ዝግጅት አዲሱ ትዉልድ ስለ ሀገሩ፣ ባህሉ፣ ወጉ እንዲያዉቅ በማድረግ የሀገር ፍቅሩን ከማሳደጉ ባሻገር የባህል ልዉዉጥን በማድረግ ሰዎች በመቻቻል እና በፍቅር አብሮ የሚኖሩበትን መንገድ ያሳድጋል።  
              </p>
              <p style={{"fontSize":"14px","lineHeight":"20px"}}>
              ረጅም የእግር ጉዞ(hiking) ክንዉኖችን በማዘጋጀት ላይ ትሰራለች። ከዚህም ቀደም በነበሩን ኩነቶች ዉጤታማነቱን ለመገንዘብ ችለናል። ከሀገራችን አራቱም ማዕዘናት የተለያየ ልምድ ፣ ሀይማኖት፣ ዘር እና ቋንቋ የተወጣጡ ወጣቶችን በቡድን በማሰባሰብ ረጅም የእግር ጉዞ ማድረግ ወጣቱ ይበልጥ እንዲተዋወቅ ፣ እንዲቀራረብ፣ ልምዱን እንዲለዋወጥ፣ ራዕይውን እንዲያጋራ እና ትስስር እንዲፈጥር አግዟል።
              </p>
            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5">
              <img src="assets/img/features-3.svg" className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7 pt-5">
              <h3>እሴቶች (Values)</h3>
              {/* <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p> */}
              <ul>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>✔️ ቅንነት</li>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>✔️ ምክንያታዊነት</li>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>✔️ ሀገር ወዳድነት</li>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>✔️ ተአማኝነት</li>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>✔️ ተጠያቂነት </li>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>✔️ አሳታፊነት </li>
                <li style={{"fontSize":"14px","lineHeight":"20px"}}><i className="bi bi-check"></i>✔️ ውጤታማነት</li>
              </ul>
            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/img/features-4.svg" className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>የቅንድል ዲጂታል መፅሔት  ግብ(Goals)</h3>
              <p className="fst-italic" style={{"fontSize":"14px","lineHeight":"20px"}}>
              ቅንድል ዲጂታል መፅሔት በሀገራችን ብሎም በምስራቅ አፍሪካ የሚገኙ ወጣቶች በዘመናዊ እውቀት ፣ በራስ ባህልና ቋንቋ በጥበብ የተቀረፁ የቅንነት ፣ የምክንያታዊነት እና የባለ ራዕይ ትውልድ ምሳሌ እንዲሆኑ ማስቻል ፤ ብሎም የሚጠይቅ ፣ የሚመረምር ፣ የሚመዝን ትውልድ አፍርቶ ማየት ነው።

              </p>
              {/* <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p> */}
            </div>
          </div>
  
        </div>
      </section>
    </main>
    
  </div>
  );
}
