import axios from "axios";

const KEY = "AIzaSyARJTtUfzH2ReWmeaAhUlW9ruvadd0PeT4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
