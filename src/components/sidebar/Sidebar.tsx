import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { sidebarData } from "@/data";

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 z-10 w-[133px] bg-inherit pt-[90px]">
      <div className="flex flex-col items-center justify-start gap-7">
        {sidebarData.map((item, index) => {
          return (
            <Link to={`/points?page=${item.team}`} key={index}>
              <div
                className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full"
                style={{ backgroundColor: `#${item.bgcolor}` }}
                data-tooltip-id="tag-tooltip"
                data-tooltip-content={item.tooltip}
              >
                <span className="h-3 text-[18px] font-bold leading-none text-white">
                  {item.tag}
                </span>
                <Tooltip
                  id="tag-tooltip"
                  place="left"
                  style={{
                    backgroundColor: "#EFEFEF",
                    color: "#004668",
                    fontFamily: "IranYekan",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
