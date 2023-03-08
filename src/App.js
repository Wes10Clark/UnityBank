import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Deposit from "./components/pages/Deposit";
import Home from "./components/pages/Home";
import Withdraw from "./components/pages/Withdraw";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
