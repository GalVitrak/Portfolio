import "./Chicknez.css";
import chicknez from "../../../Assets/Images/chicknez.png";
import chicknezMusic from "../../../Assets/Files/chicknezMusic.mp3";
import { useEffect } from "react";

// useEffect (()=>{
//     const audio = document.getElementById("audio");
//     audio.play();
// })

function Chicknez(): JSX.Element {
    return (
        <div className="Chicknez">
			<img src={chicknez}/>
            <audio autoPlay loop src={chicknezMusic} controls></audio>
        </div>
    );
}

export default Chicknez;
