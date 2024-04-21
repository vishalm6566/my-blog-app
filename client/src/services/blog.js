import axios from "axios";
import config from "../config";

export async function getBlogsData() {
  const token = sessionStorage.getItem("token");

  const response = await axios.get(`${config.url}/blog/`, {
    headers: {
      token,
    },
  });
  return response.data;
}

export async function getMyBlogsData() {
  const token = sessionStorage.getItem("token");

  const response = await axios.get(`${config.url}/blog/myblog`, {
    headers: {
      token,
    },
  });
  return response.data;
}

export async function editBlogData(body) {
  const token = sessionStorage.getItem("token");
  const response = await axios.put(`${config.url}/blog/editblog`, body, {
    headers: {
      token,
    },
  });
  return response.data;
}

export async function addMyBlog(body) {
  const token = sessionStorage.getItem("token");
  const response = await axios.post(`${config.url}/blog/addblog`, body, {
    headers: {
      token,
    },
  });
  return response.data;
}
