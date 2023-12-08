import FirstRequest from "./Example/1-first-request";
import Headers from "./Example/2-headers";
import PostRequest from "./Example/3-postRequest";
import GlobalInstance from "./Example/4-global-instance";
import CustomInstance from "./Example/5-custom-instance";
import Interceptors from "./Example/6-interceptors";
import "./axios/global";
import "./AxiosTutorial.css";

const AxiosTutorial = () => {
  return (
    <main className="axios-tutorial">
      <h1 className="axios-tutorial-title">
        <span>Axios</span> <span>Tutorial</span>
      </h1>

      <Interceptors />
    </main>
  );
};

export default AxiosTutorial;
