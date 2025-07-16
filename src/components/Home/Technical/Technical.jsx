import { Table } from "react-bootstrap";
import abtStyle from "./technical.module.scss";
import Image from "next/image";
import img from "./assets/img.png"

function Technical() {
    return (
        <>
            <section className={abtStyle.abtSec} >
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>Technical Specifications</h2>
                        <div className="row mt-lg-5 mt-3">
                            <div className="col-lg-6">
                                <div>
                                    <Image src={img} className="img-fluid" alt="Technical Specifications" title="Technical Specifications" loading="lazy" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-0 order-first">
                                <Table striped bordered responsive>
                                    <tbody>
                                        <tr>
                                            <th> Power supply</th>
                                            <td>230V AC</td>
                                        </tr>
                                        <tr>
                                            <th> Connectivity </th>
                                            <td>Wi-Fi</td>
                                        </tr>
                                        <tr>
                                            <th> Mobile app </th>
                                            <td>Android (iOS coming soon)</td>
                                        </tr>
                                        <tr>
                                            <th>Sensors</th>
                                            <td>Ultrasonic or conductive (model-specific)</td>
                                        </tr>
                                        <tr>
                                            <th>Cloud</th>
                                            <td>Real-time sync</td>
                                        </tr>
                                        <tr>
                                            <th>Material</th>
                                            <td>Weatherproof ABS casing</td>
                                        </tr>
                                        <tr>
                                            <th>Warranty</th>
                                            <td>1 year on-site support</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Technical;
