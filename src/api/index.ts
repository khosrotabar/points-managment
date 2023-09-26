import { Dispatch } from "react";
import Axios from "axios";
import { BASE_API_URL } from "@/config";
import { dataProps, loginProps, teamsObjectProps } from "@/shared/types";

const axios = Axios.create({
  baseURL: BASE_API_URL,
});

const token = localStorage.getItem("Authorization");

export const login = async ({ usernameInput, passwordInput }: loginProps) => {
  try {
    const loginData = {
      username: usernameInput,
      password: passwordInput,
    };
    const response = await axios.post("/login/", loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("Authorization", response.data.token);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getSprints = async (setIsLoading: Dispatch<boolean>): Promise<dataProps[] | undefined> => {
  try {
    const { data } = await axios.get("/sprints", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    
    setIsLoading(false)
    return data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const getTeams = async (setIsLoading: Dispatch<boolean>): Promise<teamsObjectProps | undefined> => {
  try {
    const { data } = await axios.get("/teams", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    setIsLoading(false)
    return data
  } catch (err) {
    console.log(err);
    return undefined
  }
};
