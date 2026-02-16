import "../../styles.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="copyrightUL">
          <li>
            <p>&copy; Copyright 2025 Miempresa</p>
          </li>
        </ul>
        <ul className="listaBotonesFooter">
          <li>
            <a
              href="https://www.linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/assets/images/linkedin.png" alt="linkedin icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/assets/images/x.png" alt="x icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/assets/images/instagram.png" alt="instagram icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/assets/images/facebook.png" alt="facebook icon" />
            </a>
          </li>
        </ul>
        <ul className="addressUL">
          <li>
            <address>C/ Mayor N3, 1A (Todo ficticio)</address>
          </li>
        </ul>
      </footer>
    </>
  );
};
