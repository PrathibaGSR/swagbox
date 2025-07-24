import Link from "next/link";
import abtStyle from "./policy.module.scss";
import swaglogo from "./assets/logo.svg";
import Image from "next/image";

function Policy() {
    return (
        <>
            <section className={abtStyle.abtSec} >
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>Privacy Policy</h2>
                        <p className={abtStyle.abtSecCnt}>At SwagBOX, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.</p>
                        <div className={abtStyle.mnDiv}>
                            <div className={abtStyle.abtLst}>
                                <p className={abtStyle.abtLstTlt}>Information We Collect</p>
                                <p className={abtStyle.abtLstCnt}>We may collect the following types of information:</p>
                                <ul>
                                    <li><b>Personal details:</b> such as name, email, phone number when you contact us.</li>
                                    <li><b>Device & Usage data:</b> including IP address, browser type, and interactions on the site.</li>
                                    <li><b>Cookies:</b> for analytics, preferences, and improved site experience.</li>
                                </ul>
                            </div>
                            <div className={abtStyle.abtLst}>
                                <p className={abtStyle.abtLstTlt}>How We Use Your Information</p>
                                <p className={abtStyle.abtLstCnt}>Your data may be used to:</p>
                                <ul>
                                    <li>Provide and improve our services</li>
                                    <li>Respond to inquiries or service requests</li>
                                    <li>Send updates or product-related notifications</li>
                                    <li>Monitor site usage and performance</li>
                                </ul>
                            </div>
                            <div className={abtStyle.abtLst}>
                                <p className={abtStyle.abtLstTlt}>Data Sharing</p>
                                <p className={abtStyle.abtLstCnt}>We do not sell or trade your information. We may share with trusted third parties for:</p>
                                <ul>
                                    <li>Hosting and maintenance</li>
                                    <li>Analytics (e.g., Google Analytics)</li>
                                    <li>Legal obligations or law enforcement, if required</li>
                                </ul>
                            </div>
                            <div className={abtStyle.abtLst}>
                                <p className={abtStyle.abtLstTlt}>Your Rights</p>
                                <p className={abtStyle.abtLstCnt}>You may:</p>
                                <ul>
                                    <li>Request access or deletion of your data</li>
                                    <li>Opt-out of communications</li>
                                    <li>Manage cookie preferences through your browser settings</li>
                                </ul>
                            </div>
                            <div className={abtStyle.abtLst}>
                                <p className={abtStyle.abtLstTlt}>Security Measures</p>
                                <p className={abtStyle.abtLstCnt}>We implement best practices to secure your information, including encryption and restricted access to sensitive data.</p>
                            </div>
                            <div className={abtStyle.abtLst}>
                                <p className={abtStyle.abtLstTlt}>Third-Party Links</p>
                                <p className={abtStyle.abtLstCnt}>Our website may contain links to external sites. We are not responsible for their privacy practices.</p>
                            </div>
                            <div className={abtStyle.abtLst}>
                                <p className={abtStyle.abtLstTlt}>Policy Updates</p>
                                <p className={abtStyle.abtLstCnt}>This policy may be updated periodically. Changes will be posted on this page with an updated effective date.</p>
                            </div>
                        </div>
                        <div className={abtStyle.contDiv}>
                            <h4>Contact Us</h4>
                            <p>If you have questions about this policy, reach us at: 📧 
                                <Link href="mailto:support@swagbox.com">support@swagbox.com</Link></p>
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

export default Policy;
