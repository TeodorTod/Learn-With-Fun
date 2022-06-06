import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from  "./components/Home/Home";
import Login from  "./components/Login/Login";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <main>
      
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
     
      </Routes>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
