import "./App.css";
import Header from "./Components/Share_Module/Header/Header";
import Home from "./Components/Cms/Home/Home";
import About from "./Components/Cms/About/About";
import Product from "./Components/Cms/Product/Product";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Footer from "./Components/Share_Module/Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Product />
      <Login />
      <Register />
      <Footer />
    </div>
  );
}

// export default App;
