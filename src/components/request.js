import axios from "axios";

async function request(username) {
  const apiUrl = "https://codeforces.com/api/user.status?handle=";
  const { data } = await axios.get(apiUrl + username);
  //   console.log("alta", data.result);
  return data.result;
}

export default request;
