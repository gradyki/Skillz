import "./Nav.css";
import { Link } from "react-router-dom";
import navlogo from "../../assets/navlogo.png";
import NavButtons from "../NavButtons/NavButtons";

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  return (
    <nav className="nav">
      <div className="imgage-container">
        <Link to="/">
          <img id="nav-logo" src={`${navlogo}`} alt="landing" />
        </Link>
      </div>

      <NavButtons handleLogout={handleLogout} currentUser={currentUser} />
    </nav>
  );
}
