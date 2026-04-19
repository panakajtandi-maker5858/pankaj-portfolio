import "../styles/footer.css";

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = ["about", "skills", "projects", "blog", "contact"];

  return (
    <footer>
      <div className="footer-grid">

        {/* Col 1 — Logo + tagline */}
        <div>
          <span className="footer-logo">
            Pankaj <span>Portfolio</span>
          </span>
          <p className="footer-tagline">
            Full Stack Developer building clean,<br />
            scalable things for the web.
          </p>
        </div>

        {/* Col 2 — Quick nav */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link); }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Socials */}
        <div className="footer-col">
          <h4>Connect</h4>
          <div className="footer-socials">

            <a
              href="https://github.com/panakajtandi-maker5858"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            <a
              href="mailto:panakajtandi@gmail.com"
              className="footer-social-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Gmail
            </a>

          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>Pankaj Portfolio</span> — Designed &amp; built from scratch.
        </div>
        <div className="footer-bottom-right">
          Pixels placed by hand. Logic written by mind.
        </div>
      </div>

    </footer>
  );
}

export default Footer;