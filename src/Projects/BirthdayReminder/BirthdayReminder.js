import { useState } from "react";
import BirthdayReminderItem from "./BirthdayReminderItem";
import data from "./data";
import "./BirthdayReminder.css";

const BirthdayReminder = () => {
  const [persons, setPersons] = useState(data);

  const buttonClickHandler = () => {
    setPersons([]);
  };

  return (
    <>
      <main className="main">
        <section className="main-card">
          <h1 className="main-card-title">5 Birthday Today</h1>
          <div className="main-cart-items">
            {persons.map((person) => (
              <BirthdayReminderItem
                key={person.id}
                image={person.image}
                name={person.name}
                age={person.age}
              />
            ))}
          </div>
          <button className="main-card-button" onClick={buttonClickHandler}>
            <i className="fas fa-trash"></i>
            <span>Clear All</span>
          </button>
        </section>
      </main>
    </>
  );
};

export default BirthdayReminder;
