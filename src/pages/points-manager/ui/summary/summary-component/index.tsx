import { FC } from "react";
import { SprintProps } from "@/shared/types";
import SprintSlider from "../slider";

const SummaryComponent: FC<SprintProps> = ({
  current_sprint,
  total_sprint,
  sprint_name_part1,
  sprint_name_part2,
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <div className="flex w-full items-center justify-between">
        <p className="text-base text-[#000]">
          {sprint_name_part1}{" "}
          <span className="text-sm font-light">{sprint_name_part2}</span>
        </p>
        <p>
          {current_sprint}{" "}
          <span className="text-base font-light text-[rgba(0,0,0,0.5)]">
            از {total_sprint} پوینت
          </span>
        </p>
      </div>
      <SprintSlider
        current_sprint={current_sprint}
        total_sprint={total_sprint}
      />
    </div>
  );
};

export default SummaryComponent;
