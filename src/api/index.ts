import { Dispatch } from "react";
import Axios from "axios";
import { dataProps, loginProps, teamsObjectProps } from "@/shared/types";
import { notify } from "@/components/notify";

const token = localStorage.getItem("Authorization");
const axios = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async ({ usernameInput, passwordInput }: loginProps) => {
  try {
    const loginData = {
      username: usernameInput,
      password: passwordInput,
    };
    const response = await axios.post("/api/login/", loginData);
    localStorage.setItem("Authorization", response.data.token);
    return true;
  } catch (err) {
    console.log(err);
    notify("!نام کاربری یا رمز عبور اشتباه است");
    return undefined;
  }
};

export const getSprints = async (
  setIsLoading: Dispatch<boolean>,
): Promise<dataProps[] | undefined> => {
  try {
    const { data } = await axios.get("/api/sprints", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    setIsLoading(false);
    return data;
  } catch (err) {
    console.log(err);
    notify("!متاسفانه خطایی رخ داده است");
    return undefined;
  }
};

export const getTeams = async (
  setIsLoading: Dispatch<boolean>,
): Promise<teamsObjectProps | undefined> => {
  try {
    const { data } = await axios.get("/api/teams", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    setIsLoading(false);
    return data;
  } catch (err) {
    console.log(err);
    notify("!متاسفانه خطایی رخ داده است");
    return undefined;
  }
};
