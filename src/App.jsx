import { Routes , Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Owala from "./components/Owala.jsx";
import Stanley from "./components/Stanley.jsx";
import Yeti from "./components/Yeti.jsx";
import Hydroflask from "./components/Hydroflask.jsx";
import Nalgene from "./components/Nalgene.jsx";

import './styles.css'


export default function App() {
  return (
    <div> 
      <NavBar />
    <Routes> 
      <Route path="/" exact element={<Home />} /> 
      <Route path="/owala" exact element={<Owala />} /> 
      <Route path="/stanley" exact element={<Stanley />} />
      <Route path="/yeti" exact element={<Yeti />} />
      <Route path="/hydroflask" exact element={<Hydroflask />} />
      <Route path="/nalgene" exact element={<Nalgene />} />
    </Routes> 
    </div> 
  );
}