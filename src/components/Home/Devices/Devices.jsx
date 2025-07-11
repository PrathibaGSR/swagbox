import abtStyle from "./devices.module.scss";

function Devices() {
    return (
        <>
            <section className={abtStyle.abtSec} id="about">
                <div className="container">
                    <div>
                        <h2 className={abtStyle.abtSecTlt}>SwagBOX Smart Water Automation Devices</h2>
                        <p className={abtStyle.abtSecCnt}>An intelligent IoT-based controller that eliminates the need for manual water tank management. Say goodbye to dry tanks, overflows, and wasted electricity.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="brain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" overflow="visible"><path fill="currentColor" d="M144.2 75.4c-.6 6.7-5.4 12.4-12 14C111.4 94.7 96 113.6 96 136c0 3.1 .3 6.2 .9 9.2c1.5 7.6-2.7 15.2-10 18C68.8 170 56 187.6 56 208c0 5.2 .8 10.3 2.4 15c2 6.1 .2 12.8-4.6 17C40.4 251.7 32 268.9 32 288c0 22.9 12 43 30.2 54.3c6.7 4.2 9.3 12.6 6.3 19.8C65.6 368.8 64 376.2 64 384c0 30.9 25.1 56 56 56c3.3 0 6.5-.3 9.5-.8c7.5-1.3 14.9 2.9 17.6 10c6.9 18 24.4 30.8 44.8 30.8c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48c-25 0-45.5 19.1-47.8 43.4zM256 480c-14.6 19.4-37.8 32-64 32c-29.6 0-55.5-16.1-69.3-40c-.9 0-1.8 0-2.7 0c-48.6 0-88-39.4-88-88c0-7.6 1-15 2.8-22C13.6 344.4 0 317.8 0 288c0-25.1 9.6-48 25.4-65c-.9-4.9-1.4-9.9-1.4-15c0-29.6 16.1-55.5 40-69.3c0-.9 0-1.8 0-2.7c0-33.6 20.7-62.4 50.1-74.2C122.3 26.4 154.1 0 192 0c26.2 0 49.4 12.6 64 32c14.6-19.4 37.8-32 64-32c37.9 0 69.7 26.4 77.9 61.8C427.3 73.6 448 102.4 448 136c0 .9 0 1.8 0 2.7c23.9 13.8 40 39.7 40 69.3c0 5.1-.5 10.1-1.4 15c15.8 17.1 25.4 40 25.4 65c0 29.8-13.6 56.4-34.8 74c1.8 7.1 2.8 14.4 2.8 22c0 48.6-39.4 88-88 88c-.9 0-1.8 0-2.7 0c-13.8 23.9-39.7 40-69.3 40c-26.2 0-49.4-12.6-64-32zm16-48c0 26.5 21.5 48 48 48c20.4 0 37.9-12.8 44.8-30.8c2.7-7.1 10.1-11.3 17.6-10c3.1 .5 6.3 .8 9.5 .8c30.9 0 56-25.1 56-56c0-7.8-1.6-15.2-4.4-21.8c-3.1-7.2-.4-15.7 6.3-19.8C468 331 480 310.9 480 288c0-19.1-8.4-36.3-21.7-48.1c-4.8-4.2-6.6-10.9-4.6-17c1.5-4.7 2.4-9.7 2.4-15c0-20.4-12.8-38-30.9-44.9c-7.3-2.8-11.5-10.4-10-18c.6-3 .9-6 .9-9.2c0-22.4-15.4-41.3-36.2-46.5c-6.6-1.7-11.4-7.3-12-14C365.5 51.1 345 32 320 32c-26.5 0-48 21.5-48 48V432z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>AI-based smart operation</p>
                                    <p className={abtStyle.abtLstCnt}>Learns usage patterns and triggers the motor automatically.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" overflow="visible"><path fill="currentColor" d="M96 32C78.3 32 64 46.3 64 64V448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zM32 64C32 28.7 60.7 0 96 0H288c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Mobile app control</p>
                                    <p className={abtStyle.abtLstCnt}>Monitor and control your tank from anywhere with the Android app.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" overflow="visible"><path fill="currentColor" d="M429.7 135.7c10.3-4.9 21.9-7.7 34.3-7.7c44.2 0 80 35.8 80 80c0 7.7-1.1 15-3 22c-4.1 14.5 2.5 30 15.8 37.1C587.3 283.2 608 315.2 608 352c0 53-43 96-96 96H144C82.1 448 32 397.9 32 336c0-48.8 31.2-90.3 74.8-105.7c12.3-4.3 20.8-15.7 21.3-28.8C131.5 125 194.6 64 272 64c48.7 0 91.7 24.1 117.8 61.2c9 12.7 25.8 17.2 39.9 10.5zM416 106.8C384.1 61.5 331.5 32 272 32c-94.6 0-171.7 74.6-175.8 168.1C40.2 219.9 0 273.2 0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-49.1-27.7-91.8-68.3-113.2c2.8-9.8 4.3-20.1 4.3-30.8c0-61.9-50.1-112-112-112c-17.2 0-33.5 3.9-48 10.8z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Cloud-connected monitoring</p>
                                    <p className={abtStyle.abtLstCnt}>View historical data and diagnostics in real time.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="sensor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" overflow="visible"><path fill="currentColor" d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm128 48V272c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zm64 0V272c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Sensor accuracy</p>
                                    <p className={abtStyle.abtLstCnt}>High-grade sensors for precise water level detection.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="square-bolt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" overflow="visible"><path fill="currentColor" d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM159.7 264H208c5.5 0 10.5 2.8 13.5 7.4s3.3 10.4 1 15.3l-19.4 41.9L288.3 248H240c-5.5 0-10.5-2.8-13.5-7.4s-3.3-10.4-1-15.3l19.4-41.9L159.7 264zM281.6 112c14.7 0 24.4 15.2 18.2 28.5L265 216h49.4c11.9 0 21.6 9.7 21.6 21.6c0 5.9-2.4 11.6-6.7 15.7L180.2 394.5c-3.7 3.5-8.7 5.5-13.8 5.5c-14.7 0-24.4-15.2-18.2-28.5L183 296H133.6c-11.9 0-21.6-9.7-21.6-21.6c0-5.9 2.4-11.6 6.7-15.7L267.8 117.5c3.7-3.5 8.7-5.5 13.8-5.5z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Energy efficiency</p>
                                    <p className={abtStyle.abtLstCnt}>Automatically optimizes motor use to reduce power costs.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={abtStyle.abtLst}>
                                <svg class="colorable-icon" aria-hidden="true" data-prefix="fal" data-icon="square-bolt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" overflow="visible"><path fill="currentColor" d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM159.7 264H208c5.5 0 10.5 2.8 13.5 7.4s3.3 10.4 1 15.3l-19.4 41.9L288.3 248H240c-5.5 0-10.5-2.8-13.5-7.4s-3.3-10.4-1-15.3l19.4-41.9L159.7 264zM281.6 112c14.7 0 24.4 15.2 18.2 28.5L265 216h49.4c11.9 0 21.6 9.7 21.6 21.6c0 5.9-2.4 11.6-6.7 15.7L180.2 394.5c-3.7 3.5-8.7 5.5-13.8 5.5c-14.7 0-24.4-15.2-18.2-28.5L183 296H133.6c-11.9 0-21.6-9.7-21.6-21.6c0-5.9 2.4-11.6 6.7-15.7L267.8 117.5c3.7-3.5 8.7-5.5 13.8-5.5z"></path></svg>
                                    <p className={abtStyle.abtLstTlt}>Automatic motor control</p>
                                    <p className={abtStyle.abtLstCnt}>Smart logic ensures pumps run only when needed.</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Devices;
