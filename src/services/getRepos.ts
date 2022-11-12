import axios from "axios";
import API from "./api";

const GetRepos = async (username: string) => {
  try {
    const { data: profile } = await axios.get(
      `${API.baseURL}${username}?client_id=${API.clientId}?client_secret=${API.clientSecret}`
    );

    if (!profile) {
      return null;
    }

    const { data: repos } = await axios.get(profile.repos_url);
    return { profile, repos };
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default GetRepos;
