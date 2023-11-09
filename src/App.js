import Navbar from "./components/navbar/Navbar";
// import DomainSearch from "./components/domainsearch/DomainSearch";
import Hero from "./components/hero/Hero";
// import ServiceOne from "./components/serviceone/ServiceOne";
// import ServiceTwo from "./components/servicetwo/ServiceTwo";
// import ServiceThree from "./components/servicethree/ServiceThree";
// import ServiceFour from "./components/servicefour/ServiceFour";
import Location from "./components/location/Location"
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Sercom from "./components/sercom/Sercom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sercom />
      <Portfolio />
      <Location />
      <Footer />
    </>
  );
}

export default App;
