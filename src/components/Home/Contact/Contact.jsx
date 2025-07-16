import Image from "next/image";
import Form from "../Form/Form";
import abtStyle from "./contact.module.scss";
import logo from "./assets/logo.png";
import swaglogo from "./assets/logo.svg";
import Link from "next/link";


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
                            <p className={abtStyle.desincnt}>Designed and Developed by Zero Is Infinite Startup Studio </p>
                            <Link href="http://ziis.in/" target="_blank">
                                <Image src={logo} className="img-fluid" alt="zero is infinite" title="zero is infinite" />
                            </Link>

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
