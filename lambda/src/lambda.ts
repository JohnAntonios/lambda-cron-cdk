import axios from "axios";

export const handler = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/comments?postId=1"
  );
  console.log(res.data);
  return null;
};
