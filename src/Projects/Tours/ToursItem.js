import { useState } from "react";
const ToursItem = ({ id, name, info, image, price, click }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tours-item">
      <img src="assets/images/image1.jpg" className="tours-item-image" alt="" />
      <h4 className="tours-item-title">{name}</h4>
      <p className="tours-item-content">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <span
          className="tours-item-content-read-more"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show Less" : "Read More"}
        </span>
      </p>
      <button className="tours-remove-button" onClick={() => click(id)}>
        <i className="fas fa-trash"></i>
        <span>Remove Tour</span>
      </button>
    </article>
  );
};

export default ToursItem;
