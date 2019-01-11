import axios from "axios";

async function request(username) {
  const apiUrl1 = "https://codeforces.com/api/user.status?handle=";
  const apiUrl2 = "https://codeforces.com/api/user.rating?handle=";
  const { data:submissions } = await axios.get(apiUrl1 + username);
  const { data:contests } = await axios.get(apiUrl2 + username);
  //   console.log("alta", data.result);
  return [submissions.result, contests.result];
}

export default request;
