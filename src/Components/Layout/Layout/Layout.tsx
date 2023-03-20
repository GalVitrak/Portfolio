import Card from "../Card/Card";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <aside>
        <Menu />
      </aside>

      <div className="cardDiv">
        <Card />
      </div>

      <main>
        <Routing />
      </main>
    </div>
  );
}

export default Layout;
