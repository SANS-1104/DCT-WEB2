import Navbar from "./Navbar";
import NavbarDemo from "./NavbarDemo";
import Navbar2 from "./Navbar2";
import Hero from "./Hero_DCT";
import About from "./About_DCT";
import Services from "./Services";
import Lorems from "./Lorem";
import Footer from "./Footer_DCT";
import Globe2 from "./Globe2";
import Footer2 from "./Footer2";
// import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* <Navbar /> */}
      {/* <NavbarDemo /> */}
      <Navbar2 />
      <div className="mt-20 mb-40">
      <Hero />
      </div>
      <div >
      <About />
      </div>
      <Services />
      {/* <Carousel /> */}
      <Globe2 />
      <Lorems />  
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}
