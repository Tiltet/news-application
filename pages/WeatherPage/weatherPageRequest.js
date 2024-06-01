import axios from "axios";
import { staticWeather } from "./staticWeather";

export function handlerWeather() {
  return axios.get("http://localhost:4000/news/weather")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return staticWeather
    })
}
