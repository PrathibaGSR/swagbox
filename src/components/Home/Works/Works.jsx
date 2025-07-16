import Image from "next/image";
import abtStyle from "./works.module.scss";
import img from "./assets/img.png";

function Works() {
    return (
        <>
            <section className={abtStyle.abtSec} >
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-7">
                            <div>
                                <h2 className={abtStyle.abtSecTlt}>How SwagBOX Aqua Metallic Works</h2>
                                <p className={abtStyle.abtSecCnt}>From Detection to Automation — All in One Smart Loop</p>
                                <div className={abtStyle.lineDiv}>
                                    <div className={abtStyle.abtLst}>
                                        <div className={abtStyle.rundICon}>
                                            <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="gauge-low" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" overflow="visible"><path fill="currentColor" d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-32 0c0-18.6 7.9-35.3 20.5-47L129.9 151.6c-4.2-7.8-1.3-17.5 6.5-21.7s17.5-1.3 21.7 6.5l82.6 153.4c4.9-1.2 10-1.8 15.3-1.8c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM120 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"></path></svg>
                                        </div>
                                        <div className={abtStyle.mnTag}>
                                            <p className={abtStyle.abtLstTlt}>Step 1: Water Level Goes Low</p>
                                            <p className={abtStyle.abtLstCnt}>Smart sensors constantly monitor the water level in your overhead tank. When the level falls below the user-defined minimum, SwagBox Aqua Metallic gets ready to activate the pump-but only during the scheduled refill window you&apos;re set keeping you ahead without manual checks or guesswork.</p>
                                        </div>
                                    </div>
                                    <div className={abtStyle.abtLst}>
                                        <div className={abtStyle.rundICon}>
                                            <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="chart-network" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" overflow="visible"><path fill="currentColor" d="M224 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96c4.5 0 8.9-.5 13.1-1.3l38.1 83.2c-26.6 17.2-45.4 45.4-50.1 78.1H126c-7.1-27.6-32.2-48-62-48c-35.3 0-64 28.7-64 64s28.7 64 64 64c29.8 0 54.9-20.4 62-48h99.2c7.8 54.3 54.4 96 110.9 96c35 0 66.3-16.1 86.8-41.2l91.8 55.1c-1.7 5.8-2.6 11.9-2.6 18.2c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-17.5 0-33.4 7-44.9 18.4l-91.8-55.1c5.6-13.3 8.7-28 8.7-43.3c0-18.7-4.6-36.3-12.7-51.8l101.8-73.3c10.8 8.2 24.2 13.1 38.8 13.1c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64c0 9.1 1.9 17.8 5.4 25.7L416.6 226.2c-20.4-21.1-49-34.2-80.6-34.2c-11 0-21.6 1.6-31.7 4.5l-38.5-84.1C279.4 100.7 288 83.4 288 64c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zM576 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM544 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM64 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm272-48a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"></path></svg>
                                        </div>
                                        <div className={abtStyle.mnTag}>
                                            <p className={abtStyle.abtLstTlt}>Step 2: Controller Activates Motor Automatically</p>
                                            <p className={abtStyle.abtLstCnt}>Upon detecting low levels and at the designated refill time, SwagBOX Aqua Metallic intelligently turns the motor on. Through AI-based logic optimizes usage, preventing dry runs false triggers and overflows. saving electricity and pump wear.</p>
                                        </div>
                                    </div>
                                    <div className={abtStyle.abtLst}>
                                        <div className={abtStyle.rundICon}>
                                            <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="mobile-signal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" overflow="visible"><path fill="currentColor" d="M96 32H288c17.7 0 32 14.3 32 32V284.3c10.1-8.3 20.8-15.9 32-22.7V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H224V488c0-2.7 0-5.3 .1-8H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM224 400H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c2.2 0 4.3-.4 6.2-1.3c1.8-8.2 4-16.4 6.6-24.3c-2.9-3.9-7.6-6.4-12.8-6.4zM496 256c-132.5 0-240 107.5-240 240c0 8.8 7.2 16 16 16s16-7.2 16-16c0-114.9 93.1-208 208-208c8.8 0 16-7.2 16-16s-7.2-16-16-16zM480 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-144c0-8.8-7.2-16-16-16c-79.5 0-144 64.5-144 144c0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9 50.1-112 112-112c8.8 0 16-7.2 16-16z"></path></svg>
                                        </div>
                                        <div className={abtStyle.mnTag}>
                                            <p className={abtStyle.abtLstTlt}>Step 3: Cloud Logs Everything + Updates You</p>
                                            <p className={abtStyle.abtLstCnt}>Every action is logged in the cloud. Receive real-time updates via the mobile app on tank level, motor status, and remaining time, keeping you in control from anywhere. Once water is available, SwagBox Aqua Metallic resumes continuous motor operation until the tank fills.</p>
                                        </div>
                                    </div>
                                    <div className={abtStyle.abtLst}>
                                        <div className={abtStyle.rundICon}>
                                            <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" overflow="visible"><path fill="currentColor" d="M32.1 40.7c-.4-4.7 3.3-8.7 8-8.7H343.8c4.7 0 8.4 4 8 8.7L347.1 96H36.8L32.1 40.7zM39.5 128h305L317.2 450.7C315.8 467.3 302 480 285.4 480H98.6c-16.6 0-30.5-12.7-31.9-29.3L39.5 128zM40.1 0C16.7 0-1.7 20 .2 43.4l34.6 410C37.6 486.5 65.3 512 98.6 512H285.4c33.3 0 61-25.5 63.8-58.6l34.6-410C385.6 20 367.2 0 343.8 0H40.1z"></path></svg>
                                        </div>
                                        <div className={abtStyle.mnTag}>
                                            <p className={abtStyle.abtLstTlt}>Step 4: Tank is Full → System Shuts Pump OFF</p>
                                            <p className={abtStyle.abtLstCnt}>Once the tank is full, the controller automatically powers off the motor. This ensures zero overflows, no motor strain, and completely eliminates water waste through 100% automation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${abtStyle.bgImg} col-lg-5`}>
                            <div>
                                <Image src={img} className="img-fluid" alt="" title="" loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Works;
