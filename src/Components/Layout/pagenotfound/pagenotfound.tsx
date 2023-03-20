import "./pagenotfound.css";
import notfound from "../../../Assets/Images/pagenotfound.jpg";


function Pagenotfound(): JSX.Element {
    return (
        <div className="pagenotfound">
			<img src={notfound}/>
            <h2>The page you're looking for doesn't exists.</h2>
        </div>
    );
}

export default Pagenotfound;
