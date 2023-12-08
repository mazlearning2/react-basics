import React from "react";
import "./ColorGenerator.css";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Color copied to clipboard");
      }
    }
  };
  return (
    <article
      className={
        index > 10 ? "single-color color-light" : "single-color color-dark"
      }
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <span>{weight}%</span>
      <span>#{hex}</span>
    </article>
  );
};

export default SingleColor;
