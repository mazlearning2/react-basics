import { useEffect } from "react";
import axios from "axios";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const productResponse = await axios(productsUrl);
      const randomUserResponse = await axios(randomUserUrl);
      console.log(productResponse.data);
      console.log(randomUserResponse.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2>GlobalInstance</h2>;
};

export default GlobalInstance;
