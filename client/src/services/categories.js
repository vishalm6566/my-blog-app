import axios from "axios";
import config from "../config";

export async function getCategoriesData() {
  const token = sessionStorage.getItem("token");

  const response = await axios.get(`${config.url}/category/`, {
    headers: {
      token,
    },
  });
  return response.data;
}

export async function addCategoryData(body) {
  const token = sessionStorage.getItem("token");

  const response = await axios.post(`${config.url}/category/add`, body, {
    headers: {
      token,
    },
  });
  console.log(response.data);
  return response.data;
}
