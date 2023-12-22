import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7222/api",
  //baseURL: "https://freelancer33-f16a7093777b.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});