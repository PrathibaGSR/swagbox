import prodStyle from "./product.module.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import Image from "next/image";

function Product() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 991, // screens <1024px
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768, // screens <768px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]

    };
    return (
        <>
            <section className={prodStyle.prodSec} id="product">
                <div className="container">
                    <div>
                        <h2 className={prodStyle.prodSecTlt}>Our Product</h2>
                        <div>
                            <div className="row">
                                <Slider {...settings}>
                                    <div className="col-lg-4">
                                        <Image src={img1} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img2} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img3} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img4} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img5} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img6} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img7} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img8} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image src={img9} className="img-fluid" alt="" title="" loading="lazy" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;
