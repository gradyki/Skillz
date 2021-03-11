import "./Footer.css";
import github from "../../assets/github.png";

export default function Footer() {
  return (
    <footer>
      <div className="links-containers">
        <a href="https://github.com/gradyki">
          <img src={`${github}`} alt="github" />
        </a>
      </div>
    </footer>
  );
}
