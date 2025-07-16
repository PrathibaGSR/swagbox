import Image from "next/image";
import abtStyle from "./included.module.scss";
import img from "./assets/img.png";

function Included() {
    return (
        <>
            <section className={abtStyle.abtSec} >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div>
                                <h2 className={abtStyle.abtSecTlt}>What&apos;s Included</h2>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className={abtStyle.abtLst}>
                                            <p className={abtStyle.abtLstTlt}>SwagBOX controller</p>
                                            <p className={abtStyle.abtLstCnt}>The main control unit for your water automation system</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={abtStyle.abtLst}>
                                            <p className={abtStyle.abtLstTlt}>Android app + cloud setup</p>
                                            <p className={abtStyle.abtLstCnt}>Software to control your system from anywhere</p>
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-6">
                                        <div className={abtStyle.abtLst}>
                                            <p className={abtStyle.abtLstTlt}>Power adapter and mounting kit</p>
                                            <p className={abtStyle.abtLstCnt}>Everything needed for installation and power connection</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={abtStyle.abtLst}>
                                            <p className={abtStyle.abtLstTlt}>QR-enabled quick start guide</p>
                                            <p className={abtStyle.abtLstCnt}>Scan and follow simple setup instructions</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className={abtStyle.abtLst}>
                                            <p className={abtStyle.abtLstTlt}>3 tier sensor system</p>
                                            <p className={abtStyle.abtLstCnt}>3 high precision sensors used by the SwagBox device to seamlessly automate the process of water management</p>
                                        </div>
                                    </div>

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

export default Included;
