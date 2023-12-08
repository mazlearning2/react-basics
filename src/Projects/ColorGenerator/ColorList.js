import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
import "./ColorGenerator.css";

const ColorList = ({ colors }) => {
  return (
    <section className="color-list">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
