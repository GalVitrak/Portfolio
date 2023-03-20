import "./Routing.css";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import About from "../../HomeArea/About/About";
import Resume from "../../HomeArea/Resume/Resume";
import Pagenotfound from "../pagenotfound/pagenotfound";
import Portfolio from "../../HomeArea/Portfolio/Portfolio";
import Chicknez from "../../HomeArea/Chicknez/Chicknez";
import Contact from "../../HomeArea/Contact/Contact";


function Routing(this: any): JSX.Element {
    return (
        <div className="Routing">            
        <Routes>
            <Route path="*" element={<Pagenotfound/>}/>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/chicknez" element={<Chicknez/>}/>
        </Routes>
        </div>
    );
}

export default Routing;
