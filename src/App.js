import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from './componets/Home'
import Coins from './componets/Coins'
import Exchanges from './componets/Exchanges'
import CoinDetails from './componets/CoinDetails'
import Footer from './componets/Footer'
function App() {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;