import React from "react";

const BirthdayReminderItem = (props) => {
  return (
    <article className="items-item">
      <img
        src={props.image}
        alt="image not found"
        className="items-item-image"
      />
      <div className="items-item-content">
        <h4>{props.name}</h4>
        <span>{props.age} years</span>
      </div>
    </article>
  );
};

export default BirthdayReminderItem;
