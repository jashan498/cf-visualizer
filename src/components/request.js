import axios from "axios";

async function request() {
  const apiUrl = "https://codeforces.com/api/user.status?handle=";
  const { data } = await axios.get(apiUrl + "no_life_");
  //   console.log("alta", data.result);
  return data.result;
}

export default request;
