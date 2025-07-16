import Image from "next/image";
import Form from "../Form/Form";
import abtStyle from "./contact.module.scss";
import logo from "./assets/logo.jpg";
import swaglogo from "./assets/swaglogo.png";


function Contact() {
    return (
        <>
            <section className={abtStyle.abtSec} id="contact">
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>Contact Us</h2>
                        <p className={abtStyle.abtSecCnt}>Want SwagBOX Aqua Metallic installed at your home or building? Reach out today.</p>
                        <div className={abtStyle.linDiv}></div>
                        <h3 className={abtStyle.subTlt}>Let&apos;s Connect</h3>
                        <p className={abtStyle.subCnt}>Form Fields</p>
                        <Form />
                        <div className={abtStyle.footAre}>
                            <p className={abtStyle.desincnt}>Designed and Developed by</p>
                            <Image src={logo} className="img-fluid" alt="zero is infinite" title="zero is infinite" />
                        </div>

                    </div>
                </div>
                <div className={abtStyle.swagLogo}>
                    <Image src={swaglogo} className="img-fluid" alt="swagbox" title="swagbox" />
                </div>
            </section>
        </>
    )
}

export default Contact;
