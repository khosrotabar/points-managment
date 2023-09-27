import { FC } from "react";
import clsx from "clsx";
import { dataProps } from "@/shared/types";

type HoverTooltipProps = {
  isProsperLastTow: boolean;
  isProsperLastThree: boolean;
  item: { person: string; objects: dataProps[] };
};

const HoverTooltip: FC<HoverTooltipProps> = ({
  isProsperLastTow,
  isProsperLastThree,
  item,
}) => {
  return (
    <div className="absolute -bottom-[40px] -left-[50px] z-10 flex h-[54px] w-[195px] items-center justify-center gap-3 rounded-[5px] border-[1px] border-[#D3D3D3] bg-[#FBFBFB]">
      <div className="flex flex-col items-center">
        <span
          className={clsx(
            "text-base",
            isProsperLastTow ? "text-[#00BA9F]" : "text-[#D14085]",
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
            isProsperLastThree ? "text-[#00BA9F]" : "text-[#D14085]",
          )}
        >
          {item.objects[2].done}
        </span>
        <p className="text-xs font-light text-[#404040]">
          <span className="font-bold">سه</span> اسپرینت قبل
        </p>
      </div>
    </div>
  );
};

export default HoverTooltip;
