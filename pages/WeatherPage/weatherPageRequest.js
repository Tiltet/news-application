import axios from "axios";
import { staticWeather } from "./staticWeather";
import config from "../../config.json";

export function handlerWeather() {
  return axios.get(`${config.API_BASE_URL}/news/weather`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return staticWeather
    })
}
