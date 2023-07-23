import Header from "./Components/Share_Module/Header/Header";
import Home from "./Components/Cms/Home/Home";
import About from "./Components/Cms/About/About";
import Product from "./Components/Cms/Product/Product";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Footer from "./Components/Share_Module/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// export default App;
