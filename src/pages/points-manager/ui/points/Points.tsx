import { useQuery } from "react-query";
import NoAvatar from "@/assets/images/no-avatar.png";
import clsx from "clsx";
import { getSprints } from "@/api";
import { dataProps } from "@/shared/types";
import { useContextValue } from "@/context";
import { useState } from "react";
import SprintsLoading from "@/components/sprints-loading";
import LineChart from "@/components/chart";
import { Tooltip } from "react-tooltip";
import HoverTooltip from "./hover-part";
import { ToastContainer } from "react-toastify";

const Points = () => {
  const [isLoding, setIsLoading] = useState<boolean>(true);
  let teams: dataProps[] | undefined = [];
  const { state } = useContextValue();
  const { data } = useQuery("sprints", () => getSprints(setIsLoading));

  const sprintColorHandler = (lastSprint: number, sprintsMean: number) => {
    if (lastSprint >= sprintsMean) {
      return true;
    } else {
      return false;
    }
  };

  teams = data;
  teams = teams?.filter((item) => item.team === state.team);

  // Creating a new array with objects having same name value
  const cleanTeams: { person: string; objects: dataProps[] }[] | undefined =
    teams?.reduce(
      (acc, obj) => {
        const foundObj = acc.find((item) => item.person === obj.person);

        if (foundObj) {
          foundObj.objects.push(obj);
          foundObj.objects.sort((a, b) => {
            const dateA = a.date;
            const dateB = b.date;
            if (dateA > dateB) {
              return -1;
            }
            if (dateA < dateB) {
              return 1;
            }
            return 0;
          });
        } else {
          acc.push({ person: obj.person, objects: [obj] });
        }

        return acc;
      },
      [] as { person: string; objects: dataProps[] }[],
    );

  const labels = ["Label 1", "Label 2", "Label 3"];

  return (
    <div
      className={clsx(
        "w-full transition-all duration-700 ease-in-out",
        state.activeSprints ? "max-w-[761px]" : "max-w-[0px]",
      )}
    >
      <div
        className={clsx(
          "max-h-[73vh] overflow-hidden rounded-[30px] bg-[#FEFEFE] pt-[35px] transition-opacity delay-200 duration-300",
          state.activeSprints ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="flex w-full items-center justify-end gap-[23px] whitespace-nowrap pb-[14px] pl-[68px] text-sm font-normal text-[#00344E]">
          <span>اسپرینت آخر</span>
          <span className="ml-[9px]">میانگین</span>
          <span>در یک نگاه</span>
        </div>
        {isLoding ? (
          <SprintsLoading />
        ) : (
          <div className="no-scrollbar flex max-h-[65vh] w-full flex-col gap-5 overflow-y-auto px-[58px] pb-10">
            {cleanTeams?.map((item, index) => {
              const sprintsMean =
                (item.objects[2].done +
                  item.objects[1].done +
                  item.objects[0].done) /
                3;
              const isProsper = sprintColorHandler(
                item.objects[0].done,
                parseInt(sprintsMean.toFixed()),
              );
              const isProsperLastTow = sprintColorHandler(
                item.objects[1].done,
                parseInt(sprintsMean.toFixed()),
              );
              const isProsperLastThree = sprintColorHandler(
                item.objects[2].done,
                parseInt(sprintsMean.toFixed()),
              );
              return (
                <div
                  key={index}
                  className="relative flex w-full items-center justify-between rounded-[10px] bg-[#FCFCFC] px-7 py-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={NoAvatar}
                      className="h-[60px] w-[60px] rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="whitespace-nowrap text-base text-[#00344E]">
                        {item.person}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[50px] font-iranyekannum text-[20px] font-bold text-[#00344E]">
                    <span
                      className={clsx(
                        "ml-[10px] w-[25px] text-center",
                        isProsper ? "text-[#00BA9F]" : "text-[#D14085]",
                      )}
                    >
                      {item.objects[0].done}
                    </span>
                    <span className=" w-[25px] text-center">
                      {sprintsMean.toFixed()}
                    </span>
                    <div
                      className="-ml-[11px]"
                      data-tooltip-id={`custom-tooltip-${index}`}
                      data-tooltip-content=""
                    >
                      <LineChart
                        data={[
                          item.objects[2].done,
                          item.objects[1].done,
                          item.objects[0].done,
                        ]}
                        labels={labels}
                        width={51}
                        height={210}
                        color={isProsper ? "#00BA9F" : "#D14085"}
                      />
                    </div>
                  </div>
                  <Tooltip
                    id={`custom-tooltip-${index}`}
                    place="bottom"
                    style={{
                      backgroundColor: "transparent",
                      marginTop: "-20px",
                      zIndex: 999,
                    }}
                  >
                    <HoverTooltip
                      isProsperLastThree={isProsperLastThree}
                      isProsperLastTow={isProsperLastTow}
                      item={item}
                    />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Points;
