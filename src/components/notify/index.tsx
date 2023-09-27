import { toast } from "react-toastify";

export const notify = (message: string) =>
  toast.error(<p className="font-iranyekan">{message}</p>, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
