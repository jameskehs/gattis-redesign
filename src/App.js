import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
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
