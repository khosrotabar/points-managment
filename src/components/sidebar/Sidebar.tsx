import { Tooltip } from "react-tooltip";
import { sidebarData } from "@/data";
import { useContextValue } from "@/context";

const Sidebar = () => {
  const { state, dispatch } = useContextValue();
  return (
    <div className="fixed right-0 top-0 z-10 w-[133px] bg-inherit pt-[90px]">
      <div className="flex flex-col items-center justify-start gap-7">
        {sidebarData.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex h-[48px] w-[48px] cursor-pointer select-none items-center justify-center rounded-full"
              style={{ backgroundColor: `#${item.bgcolor}` }}
              data-tooltip-id="tag-tooltip"
              data-tooltip-content={item.tooltip}
              onClick={() =>
                item.team !== "none" &&
                dispatch({ type: "TEAM", payload: item.team })
              }
            >
              {item.team === state.team && (
                <div className="absolute left-[2.5px] h-[92%] w-[92%] rounded-full border-[1px] border-white"></div>
              )}
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
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
