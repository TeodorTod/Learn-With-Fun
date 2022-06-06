import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from  "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <main>
      
      <Routes>
        <Route path="/home" element={<Home />}/>
     
      </Routes>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
