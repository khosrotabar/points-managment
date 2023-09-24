import { FC } from "react";
import { motion } from "framer-motion";
import { SprintProps } from "@/shared/types";

const SprintSlider: FC<SprintProps> = ({ total_sprint, current_sprint }) => {
  const percentage: number = parseInt(
    ((current_sprint / total_sprint) * 100).toFixed(),
  );

  const animation = {
    hidden: {
      width: "0%",
    },
    visible: {
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
      width: `${percentage}%`,
    },
  };

  return (
    <div className="flex w-full items-center gap-[10px]">
      <span className="whitespace-nowrap text-sm">{percentage}%</span>
      <div className="relative h-[7px] w-full rounded-full bg-[#EAEAEA]">
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className={
            "absolute left-0 top-0 h-full w-[50px] rounded-full bg-[#00BA9F]"
          }
          style={{ width: `${percentage}%` }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SprintSlider;
