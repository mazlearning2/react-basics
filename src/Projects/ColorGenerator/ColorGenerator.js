import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";
import "react-toastify/dist/ReactToastify.css";
import ColorGeneratorForm from "./ColorGeneratorForm";
import ColorList from "./ColorList";
import "./ColorGenerator.css";


const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main className="color-generator">
      <ColorGeneratorForm addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default ColorGenerator;
