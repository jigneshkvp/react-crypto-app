
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:Id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
