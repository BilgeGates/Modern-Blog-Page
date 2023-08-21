import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import ATRIMG from "../../assets/Author2.png";
import "./page.css";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="container content__container">
        <div className="author__info">
          <div className="author__img">
            <img src={ATRIMG} alt="" />
          </div>
          <p>Jonathan Doe</p>
          <small>Collaborator & Editor</small>
        </div>
        <article>
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          technology and travel. Jonathan holds a degree in Computer Science and
          has spent years working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </article>
        <ul className="content__socials">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100091496015332">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DevelopKhatai">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/BilgeGates/">
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a href="https:///linkedin.com">
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <Card />
      <Footer />
    </>
  );
};

export default Page;
