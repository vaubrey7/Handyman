import "./App.css";
import Work from "./components/Pages/front";
import Resume from "./components/Pages/login";
import Navbar from "./components/Nav/Navbar";
import Contact from "./components/Pages/Contact";
import Github from "./components/Pages/Github";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/about"/>}
          />        
           <Route path="Navbar" element={<Navigate to="/about"/>}
          />          
          <Route path="/front" element={<About />} />
          <Route path="/plumbing" element={<Contact />} />
          <Route path='/cleaning' element={<Github />} />
          <Route path="/handyman" element={<Resume />} />
          <Route path="/car" element={<Work />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;