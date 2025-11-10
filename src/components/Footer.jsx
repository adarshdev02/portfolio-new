import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Adarsh Mishra. All rights reserved.
        </p>
        <p className="footer-subtext">Built with React & modern CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
