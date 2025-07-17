import Image from "next/image";
import bnrStyle from "./banner.module.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import banner from "./assets/banner.jpg";
import { Link } from 'react-scroll';


function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <>
            <section className={bnrStyle.bnrSec} id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-0 order-first">
                            <div>
                                <h1 className={bnrStyle.bnrSecTlt}>
                                    <div className={bnrStyle.cusFont}>Your Tank. Your Rules.</div>Fully Automated by SwagBOX Aqua Metallic
                                </h1>
                                <p className={bnrStyle.bnrSecCnt}>
                                    Experience the next generation of smart water automation. Control, monitor, and optimize your home&apos;s water system based on your personal needs with the SwagBox Aqua Metallic device and the SwagBox app.
                                </p>
                                <div className={bnrStyle.bnrSecBtn}>
                                    <Link
                                        to="contact"
                                        smooth={true}
                                        duration={200}
                                        className={bnrStyle.btnBgCvr}
                                    >
                                        Enquire Now
                                    </Link>

                                    <Link
                                        to="product"
                                        smooth={true}
                                        duration={200}
                                        className={bnrStyle.btnBgBor}
                                    >
                                        Our Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={bnrStyle.bnrSecBg}>
                                <Slider {...settings}>
                                    {/* Slide 1 - Local Video 1 */}
                                    <div>
                                        <video
                                            width="100%"
                                            height="auto"
                                            controls
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                        >
                                            <source src="/videos/video1.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                    {/* Slide 2 - Local Video 2 */}
                                    <div>
                                        <video
                                            width="100%"
                                            height="auto"
                                            controls
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                        >
                                            <source src="/videos/video2.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                    {/* Slide 3 - Image */}
                                    <div>
                                        <Image
                                            src={banner}
                                            className="img-fluid"
                                            alt="SwagBox Image"
                                            title="SwagBox"
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
