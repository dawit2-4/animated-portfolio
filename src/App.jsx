import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax"
import sidebar from "./Components/sidebar/Sidebar";
import Services from "./Components/services/Services";
import "./app.scss"
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";


const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Portfolio"><Parallax/></section>
    <section><Services/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>

  </div>;
};

export default App;
