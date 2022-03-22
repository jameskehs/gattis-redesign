import ScrollToTop from "./ScrollToTop";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Games from "./Components/Games/Games";
import Events from "./Components/Events/Events";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/games" element={<Games />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/menu" element={}/>
        <Route path="/games" element={}/>
        <Route path="/events" element={}/>
        <Route path="/rewards" element={}/>
        <Route path="/order" element={}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
