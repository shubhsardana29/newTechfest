import About from "../sections/About";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Insights from "../sections/Insights";
import WhatsNew from "../sections/WhatsNew";

const Page = () => (
  <div>
    <Hero />
    {/* <div className="relative ">
      
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <Insights />
    </div> */}
    <About />
  </div>
);

export default Page;
