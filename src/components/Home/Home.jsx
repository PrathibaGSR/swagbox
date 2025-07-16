import LogTraffic from "../Logs/Logs";
import About from "./About/About";
import Advantages from "./Advantages/Advantages";
import Banner from "./Banner/Banner";
import Choose from "./Choose/Choose";
import Contact from "./Contact/Contact";
import Controller from "./Controller/Controller";
import Devices from "./Devices/Devices";
import Included from "./Included/Included";
import Living from "./Living/Living";
import Product from "./Product/Product";
import Technical from "./Technical/Technical";
import Who from "./Who/Who";
import Works from "./Works/Works";

function Home() {
  return (
    <>
     
      <Banner/>
      <Devices/>
      <Product/>
      <Controller/>
      <Living/>
      <Works/>
      <Advantages/>
      <Included/>
      <Technical/>
      <Who/>
      <Choose/>
      <About/>
      <Contact/>
      <LogTraffic/>
    </>
  )
}

export default Home;
