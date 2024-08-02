import axios from "axios"

export const getGithubUserDetails = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`)
  const avatar = response.data.avatar_url
  return avatar

}