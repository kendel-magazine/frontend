import "./team.css";
import { Link } from "react-router-dom";

export default function Team() {
    return (
        <div>
            <main id="main">

                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Our Team</h2>
                        </div>

                    </div>
                </section>
                <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "57%" }}>
                                        <img src="assets/img/team/team-10.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open("http://www.facebook.com/ermiyas.dejene.73", "_blank")}><i className="bi bi-facebook"></i></a>
                                            {/* {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                                            <a onClick={() => window.open("https://t.me/jeremy00", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>ኤርሚያስ ደጀኔ</h4>
                                        <span>✔️ማኔጂንግ ዳይሬክተር</span>
                                        {/* <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> */}
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "57%" }}>
                                        <img src="assets/img/team/team-4.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open("http://www.facebook.com/mebrek.wondifraw", "_blank")}><i className="bi bi-facebook"></i></a>
                                            {/* {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                                            <a onClick={() => window.open("https://t.me/Dasolo", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>በሀይሉ ወ/ይፍራው ( መባ) </h4>
                                        <span>✔️ከፍተኛ አዘጋጅ</span>
                                        {/* <p>Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p> */}
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "57%" }}>
                                        <img src="assets/img/team/team-6.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open("http://www.facebook.com/entisar.abubeker", "_blank")}><i className="bi bi-facebook"></i></a>
                                            {/* {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                                            <a onClick={() => window.open("https://t.me/entisar13", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>ነዋል አቡበከር </h4>
                                        <span>✔️ ዋና አዘጋጅ</span>
                                        {/* <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> */}
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-1.jpg" height={"250px"} width={"400px"} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open("http://www.facebook.com/fikerwynes.simat", "_blank")}><i className="bi bi-facebook"></i></a>
                                            {/* <a href=""><i className="bi bi-mail"></i></a>  */}
                                            <a onClick={() => window.open("https://t.me/mistretigist", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>ነፃነት ጌታቸው</h4>
                                        <span>✔️ም/አዘጋጅ </span>
                                        {/* <p>Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in.</p> */}
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "57%" }}>
                                        <img src="assets/img/team/team-7.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open("http://www.facebook.com/dagim.mesfin.311", "_blank")}><i className="bi bi-facebook"></i></a>
                                            {/* {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                                            <a onClick={() => window.open("https://t.me/forgiven247", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>ፍራኦል መስፍን</h4>
                                        <span>✔️አርት ዳይሬክተር</span>
                                        {/* <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> */}
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "57%" }}>
                                        <img src="assets/img/team/team-9.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open("http://www.facebook.com/Awicha.Awi", "_blank")}><i className="bi bi-facebook"></i></a>
                                            {/* {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                                            <a onClick={() => window.open("https://t.me/Awicha12", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>አወት ሀይለስላሴ</h4>
                                        <span>✔️አርታኢ</span>
                                        {/* <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> */}
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "57%" }}>
                                        <img src="assets/img/team/team-8.jpg" height={"250px"} width="400px" alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open("http://www.facebook.com/tinsae.awel", "_blank")}><i className="bi bi-facebook"></i></a>
                                            {/* {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                                            <a onClick={() => window.open("https://t.me/EsruMH", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>ትንሳኤ አወል</h4>
                                        <span>✔️ግራፊክስ ዲዛይነር</span>
                                        {/* <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> */}
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "51%" }}>
                                        <img src="assets/img/team/team-3.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => window.open(" http://www.facebook.com/lijyoha.H", "_blank")}><i className="bi bi-facebook"></i></a>
                                            <a onClick={() => window.open("https://t.me/Yonas_H", "_blank")}><i className="bi bi-telegram"></i></a>
                                            {/* <a href=""><i className="bi bi-linkedin"></i></a> */}
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>ዮናስ ኃ/ማርቆስ</h4>
                                        <span>✔️ከቨር ኢሉስትሬሽን & ሌይ አውት ዲዛይነር</span>
                                        {/* <p>Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat aliquid. Tenetur possimus qui enim.</p> */}
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "51%" }}>
                                        <img src="assets/img/team/team-2.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                                            <a onClick={() => { window.open("http://www.facebook.com/ylemma1", "_blank") }}><i className="bi bi-facebook"></i></a>
                                            {/* {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                                            <a onClick={() => window.open("https://t.me/Yared4444", "_blank")}><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>ያሬድ ለማ</h4>
                                        <span>✔️ማርኬቲንግ</span>
                                        {/* <p>Aspernatur iste esse aliquam enim et corporis. Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque. Dolores eum non.</p> */}
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img" style={{ height: "57%" }}>
                                        <img src="assets/img/team/team-5.jpg" style={{ width: "100%" }} alt="" />
                                        <div className="social">
                                            <a onClick={() => window.open("https://t.me/sassy_bgs", "_blank")}><i className="bi bi-telegram"></i></a>
                                            <a onClick={() => window.open("http://www.facebook.com/Sasibgs", "_blank")}><i className="bi bi-facebook"></i></a>
                                            <a onClick={() => window.open("https://www.instagram.com/sassybgs/", "_blank")}><i className="bi bi-instagram"></i></a>
                                            <a onClick={() => window.open("https://www.linkedin.com/in/betselot-getnet-2423561aa/", "_blank")}><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>በጸሎት ጌትነት</h4>
                                        <span>✔️አይቲ ማናጀር </span>
                                        {/* <p>Aut ex esse explicabo quia harum ea accusamus excepturi. Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt.</p> */}
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