import { useState } from "react";
import reviews from "./data";
import "./Review.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];
  const nextItem = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > reviews.length -1) {
        return 0;
      }
      return newIndex;
    });
  };
  const perviousItem = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return reviews.length -1;
      }
      return newIndex;
    });
  };
  return (
    <>
      <main className="main-review">
        <article className="review">
          <div className="img-container">
            <img src={image} alt="" className="person-img" />
            <span className="quote-icon">
              <i className="fas fa-quote-right"></i>
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <span className="prev-btn" onClick={perviousItem}>
              <i className="fas fa-angle-left"></i>
            </span>
            <span className="next-btn">
              <i className="fas fa-angle-right" onClick={nextItem}></i>
            </span>
          </div>
        </article>
      </main>
    </>
  );
};

export default Review;
