import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import Logo from "../../assets/Logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-up-container">
        <div className="footer__1">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div>
            <strong>Email:</strong> <span>info@jstemplate.net</span>
          </div>
          <div>
            <strong>Phone: </strong>
            <span>880 123 456 789</span>
          </div>
        </div>
        <div className="footer__2">
          <h3>Quick</h3>
          <ul className="permalinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/">Archived</Link>
            </li>
            <li>
              <Link href="/page">Author</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__3">
          <h3>Category</h3>
          <ul className="category">
            <li>
              <Link to="/">Lifestyle</Link>
            </li>
            <li>
              <Link to="/">Technology</Link>
            </li>
            <li>
              <Link to="/">Travel</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
            <li>
              <Link to="/">Economy</Link>
            </li>
            <li>
              <Link to="/">Sports</Link>
            </li>
          </ul>
        </div>
        <div className="footer__4">
          <h4>Weekly Newsletter</h4>
          <p>Get blog articles and offers via email</p>
          <div className="send">
            <input type="email" placeholder="Your Email" />
            <CiMail className="contact__icon" />
          </div>
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </div>
      </div>
      <div className="container footer-down-container">
        <Link className="footer__logo">
          <div className="footer__logo-image">
            <img src={Logo} alt="" />
          </div>
          <div className="logo__name">
            <span>Meta</span>
            <strong>Blog</strong>
            <p>&copy; ReactJs Template 2023 - All Rights Reserved.</p>
          </div>
        </Link>
        <ul className="privacy">
          <li>
            <Link>Terms of Use</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
