import Image from "next/image";
import abtStyle from "./living.module.scss";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import img from "./assets/img.png";

function Living() {
    return (
        <>
            <section className={abtStyle.abtSec}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div>
                                <h2 className={abtStyle.abtSecTlt}>Smarter Water. Smarter Living.</h2>
                                <p className={abtStyle.abtSecCnt}>With SwagBOX Aqua Metallic, you no longer have to worry about:</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className={abtStyle.abtLst}>
                                            <div className={abtStyle.rundICon}>
                                                <Image loading="lazy" src={icon1} className="img-fluid" alt="Forgetting to turn off your motor" title="Forgetting to turn off your motor" />
                                            </div>
                                            <p className={abtStyle.abtLstTlt}>Forgetting to turn off your motor</p>
                                            <p className={abtStyle.abtLstCnt}>No more manual intervention; the system handles it automatically.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={abtStyle.abtLst}>
                                            <div className={abtStyle.rundICon}>
                                                <Image loading="lazy" src={icon2} className="img-fluid" alt="Wasting electricity or water" title="Wasting electricity or water" />
                                            </div>
                                            <p className={abtStyle.abtLstTlt}>Wasting electricity or water</p>
                                            <p className={abtStyle.abtLstCnt}>Optimized operation prevents overflows and unnecessary energy consumption.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className={abtStyle.abtLst}>
                                            <div className={abtStyle.rundICon}>
                                                <Image loading="lazy" src={icon3} className="img-fluid" alt="Climbing up to check tank levels" title="Climbing up to check tank levels" />
                                            </div>
                                            <p className={abtStyle.abtLstTlt}>Climbing up to check tank levels</p>
                                            <p className={abtStyle.abtLstCnt}>Monitor your water levels conveniently from your mobile device.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className={abtStyle.subBg}>
                                    <p> Just open the app — and stay in control.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className={abtStyle.bgImg}>
                                <Image src={img} className="img-fluid" alt="" title="" loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Living;
