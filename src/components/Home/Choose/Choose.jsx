import { Table } from "react-bootstrap";
import abtStyle from "./choose.module.scss";
import Image from "next/image";
import img from "./assets/img.jpg";
import icon1 from "./assets/icon1.svg"
import icon2 from "./assets/icon2.svg"
import icon3 from "./assets/icon3.svg"

function Choose() {
    return (
        <>
            <section className={abtStyle.abtSec} >
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>Why Choose SwagBOX Aqua Metallic</h2>
                        <h3 className={abtStyle.abtSecSubTlt}>Smart, scalable, sustainable</h3>
                        <div className="row mt-lg-5 mt-3 align-items-center">
                            <div className="col-lg-6 mt-lg-0 mt-4">
                                <div className={abtStyle.imgDiv}>
                                    <Image src={img} className="img-fluid" alt="Why Choose SwagBOX Aqua Metallic" title="Why Choose SwagBOX Aqua Metallic" loading="lazy" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-0 order-first">
                                <div>
                                    <div className={abtStyle.abtLst}>
                                        <div className={abtStyle.rundICon}>
                                            <Image loading="lazy" src={icon1} className="img-fluid" alt="Reduces water waste and electricity bills" title="Reduces water waste and electricity bills" />
                                        </div>
                                        <div className={abtStyle.mnTag}>
                                            <p className={abtStyle.abtLstTlt}>Reduces water waste and electricity bills</p>
                                            <p className={abtStyle.abtLstCnt}>Smart automation prevents overflows and optimizes pump usage to save resources and money.</p>
                                        </div>
                                    </div>
                                    <div className={abtStyle.abtLst}>
                                        <div className={abtStyle.rundICon}>
                                            <Image loading="lazy" src={icon2} className="img-fluid" alt="Locally developed and cloud-enabled" title="Locally developed and cloud-enabled" />
                                        </div>
                                        <div className={abtStyle.mnTag}>
                                            <p className={abtStyle.abtLstTlt}>Locally developed and cloud-enabled</p>
                                            <p className={abtStyle.abtLstCnt}>Built with local expertise while leveraging global cloud technology for reliable performance.</p>
                                        </div>
                                    </div>
                                    <div className={abtStyle.abtLst}>
                                        <div className={abtStyle.rundICon}>
                                            <Image loading="lazy" src={icon3} className="img-fluid" alt="Supported by regular updates and service" title="Supported by regular updates and service" />
                                        </div>
                                        <div className={abtStyle.mnTag}>
                                            <p className={abtStyle.abtLstTlt}>Supported by regular updates and service</p>
                                            <p className={abtStyle.abtLstCnt}>Continuous improvement through software updates and dedicated customer support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Choose;
