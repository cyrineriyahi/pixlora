import { useState } from "react";
import {
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Fermer le menu mobile
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Accueil
  const handleHome = (e) => {
    if (e) {
      e.preventDefault();
    }

    closeMenu();
    navigate("/");
  };

  // Services
  const handleServices = (e) => {
    if (e) {
      e.preventDefault();
    }

    closeMenu();

    if (location.pathname === "/") {
      const services = document.getElementById("services");

      if (services) {
        services.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate("/?section=services");
    }
  };

  // À propos
  const handleAbout = (e) => {
    if (e) {
      e.preventDefault();
    }

    closeMenu();

    if (location.pathname === "/") {
      const about = document.getElementById("about");

      if (about) {
        about.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate("/?section=about");
    }
  };

  // Contact
  const handleContact = (e) => {
    if (e) {
      e.preventDefault();
    }

    closeMenu();

    if (location.pathname === "/") {
      const contact = document.getElementById("contact");

      if (contact) {
        contact.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate("/?section=contact");
    }
  };

  return (
    <nav className="navbar">

      {/* ================================
          LOGO
      ================================= */}

      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <img
          src="/icon logo pixlora.png"
          alt="Pixlora Logo"
          className="logo-image"
        />

        <div className="logo-text">
          <span className="logo-normal">
            Pi
          </span>

          <span className="logo-gradient">
            xl
          </span>

          <span className="logo-normal">
            ora
          </span>
        </div>
      </Link>


      {/* ================================
          MENU DESKTOP
      ================================= */}

      <ul className="nav-links">

        <li>
          <Link
            to="/"
            onClick={closeMenu}
          >
            Accueil
          </Link>
        </li>

        <li>
          <a
            href="#services"
            onClick={handleServices}
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={handleAbout}
          >
            À propos
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={handleContact}
          >
            Contact
          </a>
        </li>

      </ul>


      {/* ================================
          BOUTON CONTACT DESKTOP
      ================================= */}

      <a
        href="#contact"
        className="nav-button"
        onClick={handleContact}
      >
        Nous contacter
      </a>


      {/* ================================
          BOUTON HAMBURGER MOBILE
      ================================= */}

      <button
        type="button"
        className={`mobile-menu-button ${
          menuOpen ? "active" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen
            ? "Fermer le menu"
            : "Ouvrir le menu"
        }
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* ================================
          MENU MOBILE
      ================================= */}

      {menuOpen && (
        <div className="mobile-menu">

          <button
            type="button"
            onClick={handleHome}
          >
            Accueil
          </button>

          <button
            type="button"
            onClick={handleServices}
          >
            Services
          </button>

          <button
            type="button"
            onClick={handleAbout}
          >
            À propos
          </button>

          <button
            type="button"
            onClick={handleContact}
          >
            Contact
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;