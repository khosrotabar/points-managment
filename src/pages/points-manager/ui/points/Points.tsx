import { useQuery } from "react-query";
import NoAvatar from "@/assets/images/no-avatar.png";
import clsx from "clsx";
import Filters from "./filters";
import { getSprints } from "@/api";
import { dataProps } from "@/shared/types";
import { useContextValue } from "@/context";

const Points = () => {
  let teams: dataProps[] | undefined = [];
  const { state } = useContextValue();
  const { data } = useQuery("sprints", getSprints);

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
          // Sort the objects within the group by the "date" property
          foundObj.objects.sort((a, b) => {
            const dateA = a.date;
            const dateB = b.date;
            if (dateA < dateB) {
              return -1;
            }
            if (dateA > dateB) {
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
  console.log(first)
  return (
    <div className="w-full max-w-[761px]">
      <Filters />
      <div className="max-h-[73vh] overflow-hidden rounded-[30px] bg-[#FEFEFE] pt-[35px]">
        <div className="flex w-full items-center justify-end gap-[23px] pb-[14px] pl-[68px] text-sm font-normal text-[#00344E]">
          <span>اسپرینت آخر</span>
          <span className="ml-[9px]">میانگین</span>
          <span>در یک نگاه</span>
        </div>
        <div className="no-scrollbar flex max-h-[65vh] w-full flex-col gap-5 overflow-y-auto px-[58px] pb-10">
          {cleanTeams?.map((item, index) => {
            const sprintsMean =
              (item.last_three_sprint +
                item.last_two_sprint +
                item.last_sprint) /
              3;
            const isProsper = sprintColorHandler(
              item.last_sprint,
              parseInt(sprintsMean.toFixed()),
            );
            return (
              <div
                key={index}
                className="flex w-full items-center justify-between rounded-[10px] bg-[#FCFCFC] px-7 py-2"
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
                <div className="flex items-center gap-[56px] font-iranyekannum text-[20px] font-bold text-[#00344E]">
                  <span
                    className={clsx(
                      "w-[25px] text-center",
                      isProsper ? "text-[#00BA9F]" : "text-[#D14085]",
                    )}
                  >
                    {item.last_sprint}
                  </span>
                  <span className="w-[25px] text-center">
                    {sprintsMean.toFixed()}
                  </span>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Points;
