import "./megazines.css";
import { Link } from "react-router-dom";


export default function Megazines(){
    return(
        <div style={{"backgroundColor":"#263238"}}>
        <main id="main" style={{"backgroundColor":"#263238"}}>

            {/* <!-- ======= Our Portfolio Section ======= --> */}
            <section className="breadcrumbs" style={{"backgroundColor":"#F1A408"}}>
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center" >
                        <h2>Our Megazines</h2>
                    </div>

                </div>
            </section>{/* <!-- End Our Portfolio Section --> */}

            {/* <!-- ======= Portfolio Section ======= --> */}
            <section className="portfolio" style={{"backgroundColor":"#263238"}}>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <ul id="portfolio-flters">
                                {/* <li data-filter="*" className="filter-active">All</li> */}
                                {/* <li data-filter=".filter-app">Recent</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
                            <div className="portfolio-item">
                                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <div>
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    </div>
    );
}