import { useEffect } from "react";
import authFetch from "../axios/interceptors";
const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch("/react-store-products");
        console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <h1>Interceptors</h1>;
};

export default Interceptors;
