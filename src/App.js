import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from  "./components/Home/Home";
import About from  "./components/About/About";
import Login from  "./components/Login/Login";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <main>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}/>
     
      </Routes>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
