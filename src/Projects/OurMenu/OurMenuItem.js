const OurMenuItem = ({ id, image, title, price, description }) => {
  return (
    <article className="our-menu-item">
      <img src={image} className="our-menu-item-image" alt="" />
      <h1 className="our-menu-item-title">
        <span>{title}</span>
        <span>{price} $</span>
      </h1>
      <p className="our-menu-item-paragraph">{description.slice(0, 200)}...</p>
    </article>
  );
};

export default OurMenuItem;
