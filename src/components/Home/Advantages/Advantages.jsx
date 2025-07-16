import Image from "next/image";
import abtStyle from "./advantage.module.scss";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import icon6 from "./assets/icon6.svg";
import icon7 from "./assets/icon7.svg";


function Advantages() {
    return (
        <>
            <section className={abtStyle.abtSec}>
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>Core Advantages</h2>
                        <p className={abtStyle.abtSecCnt}>The SwagBOX Aqua Metallic ecosystem is built on a foundation of intelligent design and user-centric features, ensuring unparalleled convenience and efficiency for your home&apos;s water management.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                    <div className={abtStyle.rundICon}>
                                        <Image loading="lazy" src={icon1} className="img-fluid" alt="Remote Monitoring" title="Remote Monitoring" />
                                    </div>
                                    <p className={abtStyle.abtLstTlt}>Remote Monitoring</p>
                                    <p className={abtStyle.abtLstCnt}>Control everything via mobile app or dashboard.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                    <div className={abtStyle.rundICon}>
                                        <Image loading="lazy" src={icon2} className="img-fluid" alt="Cloud Analytics" title="Cloud Analytics" />
                                    </div>
                                    <p className={abtStyle.abtLstTlt}>Cloud Analytics</p>
                                    <p className={abtStyle.abtLstCnt}>Historical data, trends, and health diagnostics.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                    <div className={abtStyle.rundICon}>
                                        <Image loading="lazy" src={icon3} className="img-fluid" alt="Energy & Water Efficient" title="Energy & Water Efficient" />
                                    </div>
                                    <p className={abtStyle.abtLstTlt}>Energy & Water Efficient</p>
                                    <p className={abtStyle.abtLstCnt}>Only pumps when required, reducing cost and waste.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                    <div className={abtStyle.rundICon}>
                                        <Image loading="lazy" src={icon4} className="img-fluid" alt="OTA Updates" title="OTA Updates" />
                                    </div>
                                    <p className={abtStyle.abtLstTlt}>OTA Updates</p>
                                    <p className={abtStyle.abtLstCnt}>Firmware enhancements delivered over the air.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                    <div className={abtStyle.rundICon}>
                                        <Image loading="lazy" src={icon5} className="img-fluid" alt="Self-Healing Logic" title="Self-Healing Logic" />
                                    </div>
                                    <p className={abtStyle.abtLstTlt}>Self-Healing Logic</p>
                                    <p className={abtStyle.abtLstCnt}>Automatically corrects common device errors.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                    <div className={abtStyle.rundICon}>
                                        <Image loading="lazy" src={icon6} className="img-fluid" alt="Voice Assistant Integration" title="Voice Assistant Integration" />
                                    </div>
                                    <p className={abtStyle.abtLstTlt}>Voice Assistant Integration</p>
                                    <p className={abtStyle.abtLstCnt}>Alexa and Google Assistant compatible.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={abtStyle.abtLst}>
                                    <div className={abtStyle.rundICon}>
                                        <Image loading="lazy" src={icon7} className="img-fluid" alt="Security" title="Security" />
                                    </div>
                                    <p className={abtStyle.abtLstTlt}>Security</p>
                                    <p className={abtStyle.abtLstCnt}>All data and device communication are encrypted.</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Advantages;
