import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <ul className="footer__links">
        <li className="footer__list-item">
          <a href="#" className="footer__link">
            Home
          </a>
        </li>
        <li className="footer__list-item">
          <a
            href="https://tripleten.com/"
            className="footer__link"
            target="_blank"
          >
            TripleTen
          </a>
        </li>
        <li className="footer__list-item">
          <a
            href="https://github.com/Julesdowork"
            className="footer__link"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className="footer__list-item">
          <a
            href="https://www.linkedin.com/in/julian-mcneill/"
            className="footer__link"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
