import { useLocation, Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import PointsManagerIcon from "../icons/points-manager-icon";
import MainChartIcon from "../icons/main-chart-icon";
import LogoutIcon from "../icons/logout-icon";

const Header = () => {
  const location = useLocation();
  const hasUrl = location.pathname.includes("points");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("Authorization");
    navigate("/login");
  };

  return (
    <div className="flex h-[86px] w-full items-center justify-between pl-[86px] pr-[62px] text-base font-normal text-[#00344E]">
      <div className="flex items-center gap-[55px]">
        <Link to="/points">
          <div
            className={clsx(
              "flex cursor-pointer items-center gap-2",
              !hasUrl && "rounded-[10px] bg-[#F8FAFB] px-[10px] py-[11px]",
            )}
          >
            <PointsManagerIcon
              width={18}
              height={15}
              color={hasUrl ? "#00131C" : "#00344E"}
            />
            <span
              className={clsx(hasUrl && "text-[20px] font-bold text-[#00131C]")}
            >
              برنامه ریزی روشن
            </span>
          </div>
        </Link>
        <Link to="/">
          <div
            className={clsx(
              "flex cursor-pointer items-center gap-2",
              hasUrl && "rounded-[10px] bg-[#F8FAFB] px-[10px] py-[11px]",
            )}
          >
            <MainChartIcon
              width={20}
              height={18}
              color={!hasUrl ? "#00131C" : "#00344E"}
            />
            <span
              className={clsx(
                !hasUrl && "text-[20px] font-bold text-[#00131C]",
              )}
            >
              صفحه اصلی
            </span>
          </div>
        </Link>
      </div>
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={logoutHandler}
      >
        <LogoutIcon width={19} height={18} />
        <span>خروج</span>
      </div>
    </div>
  );
};

export default Header;
