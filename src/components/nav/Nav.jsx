import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineBars } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import "./nav.css";

const Nav = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  useEffect(() => {
    // Show/hide Navbar

    const menu = document.querySelector(".nav__menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    const openNav = () => {
      menu.style.display = "flex";
      closeBtn.style.display = "inline-block";
      menuBtn.style.display = "none";
    };

    menuBtn.addEventListener("click", openNav);

    const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block";
    };

    closeBtn.addEventListener("click", closeNav);

    const navItems = menu.querySelectorAll(".nav__link");

    if (window.innerWidth < 768) {
      navItems.forEach((item) => {
        item.addEventListener("click", closeNav);
      });

      return () => {
        menuBtn.removeEventListener("click", openNav);
        closeBtn.removeEventListener("click", closeNav);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        nav.classList.toggle("window-scroll", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav__link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/page" className="nav__link">
              Page
            </Link>
          </li>
          <li>
            <Link to="/" className="nav__link">
              Contact
            </Link>
          </li>
          <li>
            <div className="search">
              <input type="text" placeholder="Search" />
              <AiOutlineSearch className="search__icon" />
            </div>
          </li>
        </ul>
        <button id="open-menu-btn" onClick={toggleNavMenu}>
          <AiOutlineBars className="open__menu" />
        </button>
        <button id="close-menu-btn" onClick={toggleNavMenu}>
          <MdOutlineClose className="close__menu" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
