import axios from "axios";

async function request(username) {
  const apiUrl1 = "https://codeforces.com/api/user.status?handle=";
  const apiUrl2 = "https://codeforces.com/api/user.rating?handle=";
  const apiUrl3 = "https://codeforces.com/api/user.info?handles=";
  const { data:submissions } = await axios.get(apiUrl1 + username);
  const { data:contests } = await axios.get(apiUrl2 + username);
  const { data:info } = await axios.get(apiUrl3 + username);
  //   console.log("alta", data.result);
  return [submissions.result, contests.result, info.result];
}

export default request;
