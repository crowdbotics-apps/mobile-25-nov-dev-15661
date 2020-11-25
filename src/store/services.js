import axios from "axios"
const newConnectorjhg = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/15661/storyboard/14961/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
