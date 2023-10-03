import axios from "axios";
const Key = process.env.REACT_APP_API_KEY;
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 100,
    type: "video",
    key: Key,
  },
});
