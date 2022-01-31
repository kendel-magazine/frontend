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

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-app mb-5">
                            <div>
                                <img src="assets/img/portfolio/m1.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m1.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="App 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web mb-5">
                            <div>
                                <img src="assets/img/portfolio/m2.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m2.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Web 3" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-app mb-5">
                            <div>
                                <img src="assets/img/portfolio/m3.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m3.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="App 2" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-card mb-5">
                            <div>
                                <img src="assets/img/portfolio/m4.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m4.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Card 2" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web mb-5">
                            <div>
                                <img src="assets/img/portfolio/m5.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m5.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Web 2" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-app mb-5">
                            <div>
                                <img src="assets/img/portfolio/m6.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m6.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="App 3" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-card mb-5">
                            <div>
                                <img src="assets/img/portfolio/m7.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m7.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Card 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-card mb-5">
                            <div>
                                <img src="assets/img/portfolio/m8.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m8.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Card 3" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web mb-5">
                            <div>
                                <img src="assets/img/portfolio/m9.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m9.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Web 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web mb-5">
                            <div>
                                <img src="assets/img/portfolio/m10.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m10.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Web 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web mb-5">
                            <div>
                                <img src="assets/img/portfolio/m11.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m11.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Web 1" download>Download</a>
                                        {/* <a href="portfolio-details.html" title="Portfolio Details"><i className="bx bx-link"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-wrap filter-web mb-5">
                            <div >
                                <img src="assets/img/portfolio/m12.jpg" className="img-fluid" alt="" />
                                <div>
                                    <div className="btn btn-warning btn-block">
                                    {/* <i className="bx bx-plus"></i> */}
                                        <a href="assets/img/portfolio/m12.pdf" data-gallery="portfolioGallery" className="portfolio-lightbox text-white" title="Web 1" download>Download</a>
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