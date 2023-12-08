import { useState } from "react";

const ColorGeneratorForm = ({ addColor }) => {
  const [color, setColor] = useState("");
  const submitFormHandler = (event) => {
    event.preventDefault();
    addColor(color);
  };

  return (
    <section className="color-generator-form">
      <h4 className="color-generator-form-title">Color Generator</h4>
      <form className="color-generator-form-form" onSubmit={submitFormHandler}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-generator-form-form-input-color"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-generator-form-form-input-text"
          placeholder="#f15028"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ColorGeneratorForm;
