import "./contact.css";
import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <div>
        <main id="main" style={{"backgroundColor":"#263238","color":"white"}}>

            <section className="breadcrumbs" style={{"backgroundColor":"#F1A408"}}>
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Contact</h2>
                    </div>

                </div>
            </section>
            <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bx bx-map" style={{"color":"#F1A408"}}></i>
                                        <h3 style={{"color":"white"}}>Our Address</h3>
                                        <p style={{"color":"white"}}>Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-envelope" style={{"color":"#F1A408"}}></i>
                                        <h3 style={{"color":"white"}}>Email Us</h3>
                                        <p style={{"color":"white"}}>kdigitalmagazine@gmail.com<br />contact@kendeldigital.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-phone-call" style={{"color":"#F1A408"}}></i>
                                        <h3 style={{"color":"white"}}>Call Us</h3>
                                        <p style={{"color":"white"}}>(+251)912178520<br />(+251)924140293<br/>(+251)920019699</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>



        </main>
    </div>
    );
}