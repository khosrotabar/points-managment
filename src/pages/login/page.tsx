import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { login } from "@/api";

const Login = () => {
  const [usernameInput, setUserNameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [usernameEror, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const token = localStorage.getItem("Authorization");
  const navigate = useNavigate();
  const notify = () =>
    toast.error(<p className="font-iranyekan">خطایی رخ داده است</p>, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  if (token) {
    navigate("/points");
    return;
  }

  const loginHandler = async (event: FormEvent) => {
    event.preventDefault();

    usernameInput === "" ? setUsernameError(true) : setUsernameError(false);
    passwordInput === "" ? setPasswordError(true) : setPasswordError(false);

    if (usernameInput !== "" && passwordInput !== "") {
      const response = await login({ usernameInput, passwordInput });
      if (response) {
        navigate("/points");
      } else {
        notify();
      }
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-auto w-full max-w-[600px] flex-col items-center gap-[40px] rounded-[30px] bg-white px-8 py-10 shadow">
        <span className="text-lg font-normal text-[#000]">
          ورود به پنل مدیریت پروژه
        </span>
        <form
          className="flex h-full w-full flex-col items-center gap-[40px]"
          onSubmit={loginHandler}
        >
          <div className="relative h-fit w-full">
            <label
              htmlFor="username"
              className="absolute -top-[13px] right-5 bg-white px-2 py-1 text-xs text-[#7F8389]"
            >
              نام کاربری
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full rounded-[25px] border-[1px] border-[#CDCDCD] bg-white px-5 py-3 text-base outline-none placeholder:text-xs placeholder:text-[#7F8389] placeholder:opacity-60"
              autoComplete="off"
              placeholder="نام کاربری شما"
              value={usernameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
            />
            {usernameEror && usernameInput === "" && (
              <span className="mt-2 pr-2 text-xs text-[#E51654]">
                * نام کاربری الزامی است
              </span>
            )}
          </div>
          <div className="relative h-fit w-full">
            <label
              htmlFor="username"
              className="absolute -top-[13px] right-5 bg-white px-2 py-1 text-xs text-[#7F8389]"
            >
              رمز عبور
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full rounded-[25px] border-[1px] border-[#CDCDCD] bg-white px-5 py-3 text-base outline-none placeholder:text-xs placeholder:text-[#7F8389] placeholder:opacity-60"
              autoComplete="new-password"
              placeholder="رمز عبور شما"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            {passwordError && passwordInput === "" && (
              <span className="mt-2 pr-2 text-xs text-[#E51654]">
                * رمز عبور الزامی است
              </span>
            )}
          </div>
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-[rgba(237,129,56,0.8)] px-[40px] py-[10px] text-lg font-bold text-white"
          >
            ورود
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
