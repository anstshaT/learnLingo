import axios from "axios";

import { DB_URL } from "./api";

axios.defaults.baseURL = DB_URL;

export const getTeachers = async (path) => {
  try {
    const res = await axios.get(`${path}.json`);

    return res.data;
  } catch (e) {
    console.log("Error in teachers API", e);
  }
};
