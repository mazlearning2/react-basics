import { useState, useEffect } from "react";
import ToursItem from "./ToursItem";
import "./Tours.css";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTouts = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTouts();
  }, []);

  const removeTourHandler = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if (tours.length == 0) {
    return (
      <main className="tours">
        <h1 className="tours-title">Our Tours</h1>
        <span className="tours-refresh" onClick={() => fetchTouts()}>
          <i className="fas fa-spinner"></i>
          <span>Refresh</span>
        </span>
      </main>
    );
  }

  return (
    <main className="tours">
      <h1 className="tours-title">Our Tours</h1>
      {tours.length == 0 ?? (
        <span className="tours-refresh" onClick={() => fetchTouts()}>
          <i className="fas fa-spinner"></i>
          <span>Refresh</span>
        </span>
      )}

      <section className="tours-list">
        {tours.map((tour) => (
          <ToursItem key={tour.id} {...tour} click={removeTourHandler} />
        ))}
      </section>
    </main>
  );
};

export default Tours;
