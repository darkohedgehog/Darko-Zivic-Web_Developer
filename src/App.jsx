import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Services from "./components/services/Service.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import CanvasAnimation from "./CanvasAnimation.jsx";

const App = () => {
  return (
    <>
       <CanvasAnimation />
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
    </>
  )
}

export default App;