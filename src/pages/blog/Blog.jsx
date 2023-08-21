import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import Advertisement from "../../components/advertisement/Advertisement";
import Footer from "../../components/footer/Footer";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <Nav />
      <div className="container blog__container">
        <h2>Page Title</h2>
        <div className="link">
          <Link className="blog__link" to="/">
            Home
          </Link>
          <Link className="blog__link" to="/">
            Link One
          </Link>
        </div>
      </div>
      <Header />
      <Card />
      <Advertisement />
      <Footer />
    </>
  );
};

export default Blog;
