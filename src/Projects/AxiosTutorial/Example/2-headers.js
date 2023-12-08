import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://icanhazdadjoke.com/";
// Accept : Application/json

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");
  const fetchDadJoke = async () => {
    try {
      const response = await axios(url, {
        headers: {
          Accept: "Application/json",
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section className="headers">
      <button className="headers-button" onClick={fetchDadJoke}>
        Random Joke
      </button>
      <p className="headers-paragraph">{joke}</p>
    </section>
  );
};

export default Headers;
