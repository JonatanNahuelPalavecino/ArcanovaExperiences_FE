import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-nuevo.png";
import nombreLogo from "../../assets/images/nombre-logo.png";
import "./Footer.scss";
import { handleScrollOrNavigate } from "../utils/otros/handleScrollOrNavigate";

export const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <footer className="footer">
      <div className="footer-section">
        <ul className="footer-column">
          <li className="footer-columnTitle">Arcanova Experiences</li>
          <li className="footer-columnItem">
            <a
              className="footer-columnLink"
              href="https://wa.me/529841794344?text=Hola%20equipo%20de%20Arcanova,%20quisiera%20consultarte%20por..."
              target="_blank"
              rel="noreferrer"
            >
              Click here for our chat
            </a>
          </li>
          <li className="footer-columnItem">Cancún - México</li>
          <li className="footer-columnItem">
            Customer service available Monday <br/> through Sunday, 7 AM to 7
            PM
          </li>
          <li className="footer-columnItem">
            <a
              className="footer-columnLink"
              href="mailto:info@arcanova.com"
              target="_blank"
              rel="noreferrer"
            >
              info@arcanova.com
            </a>
          </li>
        </ul>
        <ul className="footer-column">
          <li className="footer-columnTitle">Explore Arcanova</li>
          <li className="footer-columnItem">
            <a className="footer-columnLink" onClick={() => handleScrollOrNavigate("home", navigate, location)}>
              Home
            </a>
          </li>
          <li className="footer-columnItem">
            <a className="footer-columnLink" onClick={() => handleScrollOrNavigate("about-us", navigate, location)}>
              About Us
            </a>
          </li>
          <li className="footer-columnItem">
            <a className="footer-columnLink" onClick={() => handleScrollOrNavigate("experiences", navigate, location)}>
              Experiences
            </a>
          </li>
          <li className="footer-columnItem">
            <a className="footer-columnLink" onClick={() => handleScrollOrNavigate("testimonials", navigate, location)}>
              Testimonial
            </a>
          </li>
        </ul>
        <div className="footer-logo">
          <img className="footer-img" src={logo} alt="logo" />
          <img className="footer-nombreImg" src={nombreLogo} alt="nombre-logo" />
        </div>
      </div>
      <p className="footer-sign">
        © {year} Arcanova Experiences. Todos los derechos reservados.
      </p>
      <a
        className="footer-prom"
        href="https://jonatanpalavecino.com.ar/"
        target="_blank"
        rel="noreferrer"
      >
        Desarrolado por ©
        <img
          className="footer-promImg"
          src="https://portafolio2025.alwaysdata.net/public/logo/logo-portafolio.png"
          alt="logo-Jonatan-Palavecino"
        />
        Jonatan Palavecino
      </a>
    </footer>
  );
};
