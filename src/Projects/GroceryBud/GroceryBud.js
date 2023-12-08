import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import "react-toastify/dist/ReactToastify.css";
import GroceryItem from "./GroceryItem";
import "./GroceryBud.css";

const GroceryBud = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const submitFormHandler = (event) => {
    event.preventDefault();
    const newItemGenerate = {
      id: nanoid(),
      title: newItem,
      completed: false,
    };
    setItems([...items, newItemGenerate]);
    setNewItem("");
  };

  const removeItem = (itemId) => {
    const removeItems = items.filter((item) => item.id !== itemId);
    setItems(removeItems);
  };

  return (
    <main className="main-grocery">
      <section className="grocery">
        <h1 className="grocery-tIitle">Grocery Bud</h1>
        <form className="grocery-form" onSubmit={submitFormHandler}>
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            placeholder="Insert Item..."
          />
          <button type="submit">Add Item</button>
        </form>
        <div className="grocery-items">
          {items.map((item) => (
            <GroceryItem key={item.id} {...item} click={removeItem} />
          ))}
        </div>
      </section>
      <ToastContainer position="top-center" />
    </main>
  );
};

export default GroceryBud;
