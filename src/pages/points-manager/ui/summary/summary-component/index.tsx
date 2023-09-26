import { FC } from "react";
import { SprintProps } from "@/shared/types";
import SprintSlider from "../slider";
import ElectricityIcon from "@/components/icons/electricity-icon";

const SummaryComponent: FC<SprintProps> = ({
  current_sprint,
  total_sprint,
  sprint_name_part1,
  sprint_name_part2,
  team_incident,
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <div className="flex w-full items-center justify-between">
        <p className="text-base text-[#000]">
          {sprint_name_part1}{" "}
          <span className="text-sm font-light">{sprint_name_part2}</span>
        </p>
        <div className="flex items-center justify-center gap-2">
          <p>
            {current_sprint}{" "}
            <span className="font-iranyekannum text-base font-light text-[rgba(0,0,0,0.5)]">
              از {total_sprint} پوینت
            </span>
          </p>
          {team_incident !== 0 && (
            <div className="flex w-[40px] items-center justify-center gap-1 rounded-[5px] bg-[#E51654] px-[6px] py-[2px] font-iranyekannum text-base font-bold text-white">
              <span className="mt-[2px] p-0">{team_incident}</span>
              <ElectricityIcon width={9} height={13} />
            </div>
          )}
        </div>
      </div>
      <SprintSlider
        current_sprint={current_sprint}
        total_sprint={total_sprint}
      />
    </div>
  );
};

export default SummaryComponent;
