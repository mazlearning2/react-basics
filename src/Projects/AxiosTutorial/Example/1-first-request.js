import axios from "axios";
import { useEffect } from "react";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <h2>First Request</h2>;
};

export default FirstRequest;


// part 005 video axios