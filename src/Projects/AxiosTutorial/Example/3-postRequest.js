import { useState } from "react";
import axios from "axios";
const url = "https://course-api.com/axios-tutorial-post";

const PostRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitFormHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, { name: name, email: email });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className="post-request">
      <form className="post-request-form" onSubmit={submitFormHandler}>
        <h1 className="post-request-title">Post Request</h1>
        <input
          type="text"
          className="post-request-form-input"
          placeholder="Name..."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          className="post-request-form-input"
          placeholder="Email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="post-request-form-button" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default PostRequest;
