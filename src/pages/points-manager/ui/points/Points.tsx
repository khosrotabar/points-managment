import { useQuery } from "react-query";
import NoAvatar from "@/assets/images/no-avatar.png";
import clsx from "clsx";
import Filters from "./filters";
import { getSprints } from "@/api";
import { dataProps } from "@/shared/types";
import { useContextValue } from "@/context";
import { useState } from "react";
import SprintsLoading from "@/components/sprints-loading";
import LineChart from "@/components/chart";

const Points = () => {
  const [isLoding, setIsLoading] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<number | null>(null);
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
    <div className="w-full max-w-[761px]">
      <Filters />
      <div className="max-h-[73vh] overflow-hidden rounded-[30px] bg-[#FEFEFE] pt-[35px]">
        <div className="flex w-full items-center justify-end gap-[23px] pb-[14px] pl-[68px] text-sm font-normal text-[#00344E]">
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
                      <span className="text-base text-[#00344E]">
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
                      onMouseOver={() => setIsHovered(index)}
                      onMouseOut={() => setIsHovered(null)}
                    >
                      <LineChart
                        data={[
                          item.objects[2].done,
                          item.objects[1].done,
                          item.objects[0].done,
                        ]}
                        labels={labels}
                        width={51}
                        height={90}
                        color={isProsper ? "#00BA9F" : "#D14085"}
                      />
                    </div>
                  </div>
                  {/* hover part */}
                  <div
                    className={clsx(
                      "absolute -bottom-[40px] -left-[50px] z-10 flex h-[54px] w-[195px] items-center justify-center gap-3 rounded-[5px] border-[1px] border-[#D3D3D3] bg-[#FBFBFB]",
                      isHovered === index ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <div className="flex flex-col items-center">
                      <span
                        className={clsx(
                          "text-base",
                          isProsperLastTow
                            ? "text-[#00BA9F]"
                            : "text-[#D14085]",
                        )}
                      >
                        {item.objects[1].done}
                      </span>
                      <p className="text-xs font-light text-[#404040]">
                        <span className="font-bold">دو</span> اسپرینت قبل
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span
                        className={clsx(
                          "text-base",
                          isProsperLastThree
                            ? "text-[#00BA9F]"
                            : "text-[#D14085]",
                        )}
                      >
                        {item.objects[2].done}
                      </span>
                      <p className="text-xs font-light text-[#404040]">
                        <span className="font-bold">سه</span> اسپرینت قبل
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Points;
