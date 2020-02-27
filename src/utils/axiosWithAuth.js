import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://dvscalculator.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};