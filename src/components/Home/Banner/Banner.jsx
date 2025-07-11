import Image from "next/image";
import bnrStyle from "./banner.module.scss";
// import banner from "./assets/banner.webp";
// import bg from "./assets/bg.jpg"

import img from "./assets/img.png"


function Banner() {
    return (
        <>
            <section className={bnrStyle.bnrSec}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className={bnrStyle.bnrSecBg}>
                                <Image src={img} className={`${bnrStyle.bnrBg1} img-fluid`} alt="" title="" />
                                {/* <Image src={banner} className={`${bnrStyle.bnrBg} img-fluid`}  alt="" title="" /> */}
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-0 order-first">
                            <div>
                                <h1 className={bnrStyle.bnrSecTlt}>Your Tank. Your Rules.
                                    Fully Automated by SwagBOX</h1>
                                <p className={bnrStyle.bnrSecCnt}>Experience the next generation of smart water automation. Control, monitor, and optimize your home water system—automatically and intelligently.</p>
                                <div className={bnrStyle.bnrSecBtn}>
                                    <button className={bnrStyle.btnBgCvr}>Enquire Now</button>
                                    <button className={bnrStyle.btnBgBor}>Our Products</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Banner;
