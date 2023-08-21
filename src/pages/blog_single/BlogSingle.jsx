import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import One from "./sections/section1/One";
import Two from "./sections/section2/Two";
import Three from "./sections/section3/Three";

const BlogSingle = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <One />
        <Two />
        <Three />
      </div>
      <Footer />
    </>
  );
};

export default BlogSingle;
