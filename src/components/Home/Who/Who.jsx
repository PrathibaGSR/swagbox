import abtStyle from "./who.module.scss";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import Image from "next/image";

function Who() {
    return (
        <>
            <section className={abtStyle.abtSec} >
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>Who It&apos;s For</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className={abtStyle.abtLst}>
                                    <Image loading="lazy" src={icon1} className="img-fluid" alt="Homeowners" title="Homeowners" />
                                    <p className={abtStyle.abtLstTlt}>Homeowners</p>
                                    <p className={abtStyle.abtLstCnt}>Automate your daily water needs</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className={abtStyle.abtLst}>
                                    <Image loading="lazy" src={icon2} className="img-fluid" alt="Apartments" title="Apartments" />
                                    <p className={abtStyle.abtLstTlt}>Apartments</p>
                                    <p className={abtStyle.abtLstCnt}>Manage water efficiently across units</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className={abtStyle.abtLst}>
                                    <Image loading="lazy" src={icon3} className="img-fluid" alt="Businesses" title="Businesses" />
                                    <p className={abtStyle.abtLstTlt}>Businesses</p>
                                    <p className={abtStyle.abtLstCnt}>Eliminate downtime in commercial setups</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Who;
