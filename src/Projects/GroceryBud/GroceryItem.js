import { useState } from "react";

const GroceryItem = ({ title, completed, id, click }) => {
  const [checked, setChecked] = useState(false);
  return (
    <article className="grocery-item">
      <div className="grocery-item-left">
        <input
          type="checkbox"
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
        <span style={{ textDecoration: checked && "line-through" }}>
          {title}
        </span>
      </div>
      <span className="grocery-item-delete" onClick={() => click(id)}>
        <i className="fas fa-trash"></i>
      </span>
    </article>
  );
};

export default GroceryItem;
