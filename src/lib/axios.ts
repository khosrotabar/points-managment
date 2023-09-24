import Axios from "axios";
import { BASE_API_URL } from "@/config";
import { loginProps } from "@/shared/types";

const axios = Axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async ({ username, password }: loginProps) => {
  try {
    const loginDate = {
      username: username,
      password: password,
    };
    const response = await axios.post("/login/", { loginDate });
    localStorage.setItem("Authorization", response.data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
