import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMG1 from "../../assets/Card1.png";
import IMG2 from "../../assets/Card2.png";
import IMG3 from "../../assets/Card3.png";
import IMG4 from "../../assets/Card4.png";
import IMG5 from "../../assets/Card5.png";
import IMG6 from "../../assets/Card6.png";
import IMG7 from "../../assets/Card7.png";
import IMG8 from "../../assets/Card8.png";
import IMG9 from "../../assets/Card9.png";
import IMG10 from "../../assets/Card10.png";
import IMG11 from "../../assets/Card11.png";
import IMG12 from "../../assets/Card12.png";
import ATR1 from "../../assets/Author1.png";
import ATR2 from "../../assets/Author2.png";
import ATR3 from "../../assets/Author3.png";
import ATR4 from "../../assets/Author4.png";
import ATR5 from "../../assets/Author5.png";
import "./card.css";

const data = [
  {
    id: 1,
    image: IMG1,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR1,
    author_name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 2,
    image: IMG2,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR2,
    author_name: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    id: 3,
    image: IMG3,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR3,
    author_name: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    id: 4,
    image: IMG4,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR4,
    author_name: "Ernie Smith",
    date: "August 20, 2022",
  },
  {
    id: 5,
    image: IMG5,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR5,
    author_name: "Eric Smith",
    date: "August 20, 2022",
  },
  {
    id: 6,
    image: IMG6,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR1,
    author_name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 7,
    image: IMG7,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR2,
    author_name: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    id: 8,
    image: IMG8,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR3,
    author_name: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    id: 9,
    image: IMG9,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR4,
    author_name: "Ernie Smith",
    date: "August 20, 2022",
  },
  {
    id: 10,
    image: IMG10,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR5,
    author_name: "Eric Smith",
    date: "August 20, 2022",
  },
  {
    id: 11,
    image: IMG11,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR1,
    author_name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 12,
    image: IMG12,
    topic: "Technology",
    body: "The Impact of Technology on the Workplace: How Technology is Changing",
    author_image: ATR2,
    author_name: "Jason Francisco",
    date: "August 20, 2022",
  },
];

const initialVisibleCount = 9;
const additionalVisibleCount = 3;

const Card = () => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    if (!showAll) {
      setVisibleCount(visibleCount + additionalVisibleCount);
    } else {
      setVisibleCount(initialVisibleCount);
    }
    setShowAll(!showAll);
  };

  return (
    <section>
      <h3>Latest Post</h3>
      <div className="container card__container">
        <div className="cards ">
          {data.slice(0, visibleCount).map((card, index) => (
            <article key={index} className="card">
              <div className="card__img">
                <Link to={`/blog/${card.id}`}>
                  <img src={card.image} alt="" />
                </Link>
              </div>
              <span>{card.topic}</span>
              <Link to={`/blog/${card.id}`}>
                <h4>{card.body}</h4>
              </Link>
              <div className="card__author">
                <div className="card__author-image">
                  <img src={card.author_image} alt="" />
                </div>
                <small>{card.author_name}</small>
                <small>{card.date}</small>
              </div>
            </article>
          ))}
        </div>
        <div className="cards__button">
          <button className="btn" onClick={handleShowMore}>
            {showAll ? "Show Less" : "View All Post"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
