import "./app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
