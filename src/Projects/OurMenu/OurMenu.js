import { useState } from "react";
import OurMenuItem from "./OurMenuItem";
import ourMenuData from "./data";
import "./OurMenu.css";

// const tempCategories = ourMenuData.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];

const allCategories = [
  "all",
  ...new Set(ourMenuData.map((item) => item.category)),
];

const OurMenu = () => {
  const [ourMenus, setOurMenus] = useState(ourMenuData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == "all") {
      setOurMenus(ourMenuData);
      return;
    }
    const newItems = ourMenuData.filter((item) => item.category === category);
    setOurMenus(newItems);
  };

  return (
    <main className="our-menu">
      <h1 className="our-menu-title">OurMenu</h1>
      <ul className="our-menu-lists">
        {categories.map((category) => (
          <li className="our-menu-list" onClick={() => filterItems(category)}>
            {category}
          </li>
        ))}
      </ul>
      <section className="our-menu-items">
        {ourMenus.map((menu) => (
          <OurMenuItem key={menu.id} {...menu} />
        ))}
      </section>
    </main>
  );
};

export default OurMenu;
