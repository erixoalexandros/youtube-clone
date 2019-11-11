import axios from "axios";

const KEY = "AIzaSyBCE_4-vGNnp3DdZhLAj2AyRW5EKvMc7eQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
