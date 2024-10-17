import React,{lazy, Suspense} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const About = lazy(() => import("./components/About"));
  const Contacts = lazy(() => import("./components/Contacts"));

  return (
    <div className=" mx-auto ">
      <div className="w-full text-center p-5 bg-blue-600 ">
        <Link
          to="/"
          className="text-black p-2 rounded-xl hover:bg-blue-800 transition-all 0.5s"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black  p-2 rounded-xl hover:bg-blue-800 transition-all 0.5s"
        >
          About
        </Link>
        <Link
          to="/contacts"
          className="text-black p-2 rounded-xl hover:bg-blue-800 transition-all 0.5s"
        >
          Contacts
        </Link>
      </div>

     <Suspense fallback={<div>Loading...</div>}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
     </Suspense>
    </div>
  );
}

export default App;
