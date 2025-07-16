import { Table } from "react-bootstrap";
import abtStyle from "./controller.module.scss";

function Controller() {
    return (
        <>
            <section className={abtStyle.abtSec} >
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>SwagBOX Aqua Metallic Smart Water Level Controller</h2>
                        <p className={abtStyle.abtSecCnt}>One product. Multiple smart applications. SwagBOX Aqua Metallic is a smart water level controller designed to automate your motor based on on your personal habits and needs. Whether you manage an overhead tank, underground reservoir, or submersible system—SwagBOX Aqua Metallic adapts seamlessly, making water management effortless.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                    <svg class="colorable-icon" aria-hidden="true" data-prefix="fab" data-icon="ubuntu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" overflow="visible"><path fill="currentColor" d="M469.2 75A75.6 75.6 0 1 0 317.9 75a75.6 75.6 0 1 0 151.2 0zM154.2 240.7A75.6 75.6 0 1 0 3 240.7a75.6 75.6 0 1 0 151.2 0zM57 346C75.6 392.9 108 433 150 461.1s91.5 42.6 142 41.7c-14.7-18.6-22.9-41.5-23.2-65.2c-6.8-.9-13.3-2.1-19.5-3.4c-26.8-5.7-51.9-17.3-73.6-34s-39.3-38.1-51.7-62.5c-20.9 9.9-44.5 12.8-67.1 8.2zm395.1 89.8a75.6 75.6 0 1 0 -151.2 0 75.6 75.6 0 1 0 151.2 0zM444 351.6c18.5 14.8 31.6 35.2 37.2 58.2c33.3-41.3 52.6-92.2 54.8-145.2s-12.5-105.4-42.2-149.4c-8.6 21.5-24 39.6-43.8 51.6c15.4 28.6 22.9 60.8 21.9 93.2s-10.7 64-28 91.6zM101.1 135.4c12.4 2.7 24.3 7.5 35.1 14.3c16.6-24.2 38.9-44.1 64.8-58S255.8 70.4 285.2 70c.2-5.9 .9-11.9 2-17.7c3.6-16.7 11.1-32.3 21.8-45.5c-47.7-3.8-95.4 6-137.6 28.5S94.3 91.7 70.8 133.4c2.7-.2 5.3-.3 8-.3c7.5 0 15 .8 22.4 2.3z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Real-time Monitoring</p>
                                    <p className={abtStyle.abtLstCnt}>Accurate water level detection in your tank at all times.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="robot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" overflow="visible"><path fill="currentColor" d="M320 0c8.8 0 16 7.2 16 16V96H448c53 0 96 43 96 96V416c0 53-43 96-96 96H192c-53 0-96-43-96-96V192c0-53 43-96 96-96H304V16c0-8.8 7.2-16 16-16zM192 128c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H320 192zm16 256h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16s7.2-16 16-16zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM48 224H64v32H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16H64v32H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zM592 384c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H576V224h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V384h16z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>AI-powered Automation</p>
                                    <p className={abtStyle.abtLstCnt}>Intelligent motor control for optimal water flow and efficiency.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" overflow="visible"><path fill="currentColor" d="M96 32C78.3 32 64 46.3 64 64V448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zM32 64C32 28.7 60.7 0 96 0H288c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Remote Control & Access</p>
                                    <p className={abtStyle.abtLstCnt}>Manage your system from anywhere via mobile app and cloud dashboard.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="wrench" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" overflow="visible"><path fill="currentColor" d="M480 160c0-10.7-1.3-21.1-3.8-31l-48.9 48.9c-9 9-21.2 14.1-33.9 14.1H368c-26.5 0-48-21.5-48-48V118.6c0-12.7 5.1-24.9 14.1-33.9L383 35.8c-9.9-2.5-20.3-3.8-31-3.8c-70.7 0-128 57.3-128 128c0 9.2 1 18.1 2.8 26.7c3.2 15.2-.6 32.4-13.1 44.9L45.8 399.4C37 408.3 32 420.3 32 432.8C32 458.9 53.1 480 79.2 480c12.5 0 24.5-5 33.4-13.8L280.5 298.3c12.4-12.4 29.7-16.3 44.9-13.1c8.6 1.8 17.5 2.8 26.7 2.8c70.7 0 128-57.3 128-128zm32 0c0 88.4-71.6 160-160 160c-11.4 0-22.6-1.2-33.3-3.5c-5.6-1.2-11.5 .3-15.6 4.4L135.2 488.8c-14.9 14.9-35 23.2-56 23.2C35.5 512 0 476.5 0 432.8c0-21 8.3-41.1 23.2-56L191.1 208.9c4.1-4.1 5.6-10 4.4-15.6c-2.3-10.7-3.5-21.9-3.5-33.3C192 71.6 263.6 0 352 0c24.8 0 48.3 5.7 69.3 15.7c9.2 4.4 10.5 16.5 3.3 23.7l-67.9 67.9c-3 3-4.7 7.1-4.7 11.3V144c0 8.8 7.2 16 16 16h25.4c4.2 0 8.3-1.7 11.3-4.7l67.9-67.9c7.2-7.2 19.3-5.9 23.7 3.3c10.1 21 15.7 44.5 15.7 69.3zM88 408a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Fault Detection</p>
                                    <p className={abtStyle.abtLstCnt}>Automatic detection and recovery from sensor or motor issues.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="plug" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" overflow="visible"><path fill="currentColor" d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96h32V16zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v96h32V16zM16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H32v64c0 83 63.1 151.2 144 159.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16V399.2c80.9-8 144-76.2 144-159.2V176h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H352 320 64 32 16zM192 368c-70.7 0-128-57.3-128-128V176H320v64c0 70.7-57.3 128-128 128z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Plug-and-Play Setup</p>
                                    <p className={abtStyle.abtLstCnt}>Effortless installation without the need for complex wiring.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" overflow="visible"><path fill="currentColor" d="M128 128v64H320V128c0-53-43-96-96-96s-96 43-96 96zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h16c44.2 0 80 35.8 80 80V432c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-44.2 35.8-80 80-80H96zM32 272V432c0 26.5 21.5 48 48 48H368c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Smart Safety Protocols</p>
                                    <p className={abtStyle.abtLstCnt}>Prevents overflows and dry runs, protecting your tank and pump.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={abtStyle.anotSec}>
                        <div className={abtStyle.line}></div>
                        <h2 className={abtStyle.abtSecTlt}>Smart Variants (Software-based)</h2>
                        <p className={abtStyle.abtSecCnt}>The hardware stays consistent—but the intelligence adapts based on the use case. SwagBOX is available in three smart configurations:</p>
                        <div className="mt-4">
                            <Table striped bordered responsive>
                                <tbody>
                                    <tr>
                                        <td>
                                            Lite
                                        </td>
                                        <td>
                                            Pro
                                        </td>
                                        <td>
                                            Max
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Homes & Small Apartments
                                        </td>
                                        <td>
                                            Large Apartments & Commercial Use
                                        </td>
                                        <td>
                                            Submersible or Underground Tank Systems
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Basic water level automation
                                        </td>
                                        <td>
                                            Enhanced scheduling & pump control
                                        </td>
                                        <td>
                                            Advanced control with smart notifications
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className={abtStyle.subBg}>
                                <p> <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="triangle-exclamation" class="svg-inline--fa fa-triangle-exclamation fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5H62.5c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184z"></path></svg>No matter which variant you choose, the product image and hardware remains the same.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Controller;
