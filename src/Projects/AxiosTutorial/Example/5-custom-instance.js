import { useEffect } from "react";
import axios from "axios";
import authFetch from "../axios/custom";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const productsResponse = await authFetch("/react-store-products");
      const randomUserResponse = await axios(randomUserUrl);
      console.log(productsResponse.data);
      console.log(randomUserResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <h1>Custom Instance</h1>;
};

export default CustomInstance;
