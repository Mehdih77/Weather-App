import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to='/'>
        <button>
          <i className="fas fa-home"></i>
        </button>
      </Link>
      <Link to='/list'>
        <button>
          <i className="fas fa-calendar-week"></i>
        </button>
      </Link>
      <Link to='/settings'>
        <button>
          <i className="fas fa-cog"></i>
        </button>
      </Link>
    </footer>
  );
}
