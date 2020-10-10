import axios from "axios";

const request = axios.create({
  baseURL: "https://public-api.wordpress.com/rest/v1.1/sites/natalonline2020.wordpress.com"
});

export const getPost = async postId => {
  const post = await request.get(`/posts/${postId}`);
  return post.data;
};
