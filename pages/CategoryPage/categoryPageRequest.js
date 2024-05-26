import axios from "axios";
import staticCategory from "./statickCategory";

export function handleEconomy() {
  return axios.get('http://localhost:4000/news/economika')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("http://localhost:4000/news/economika - ", error);
      return staticCategory
    });
}

export function handlePolitics() {
  return axios.get('http://localhost:4000/news/policy')
    .then(response => {
      console.log("http://localhost:4000/news/policy - good");
      return response.data;
    })
    .catch(error => {
      console.log("http://localhost:4000/news/policy - ", error);
      return staticCategory
    });
}

export function handleBusiness() {
  return axios.get('http://localhost:4000/news/business')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("http://localhost:4000/news/business - ", error);
      return staticCategory
    });
}

export function handleWorldNews() {
  return axios.get('http://localhost:4000/news/world')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("http://localhost:4000/news/world - ", error);
      return staticCategory
    });
}
