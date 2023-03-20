import Card from "../Card/Card";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./MobileLayout.css";

function MobileLayout(): JSX.Element {
  return (
    <div className="MobileLayout">
      <header>
        <Card/>
      </header>

      <main>
        <Routing />
      </main>

      <footer>
      <Menu />
      </footer>
    </div>
  );
}

export default MobileLayout;
