import axios from "axios";
const Key = "AIzaSyATyz1wE5WTjsuBrUb6jnRKz1L_sKkE-WI";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 100,
    type: "video",
    key: Key,
  },
});
