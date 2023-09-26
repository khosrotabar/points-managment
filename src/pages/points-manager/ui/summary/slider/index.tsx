import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SprintProps } from "@/shared/types";

const SprintSlider: FC<SprintProps> = ({ total_sprint, current_sprint }) => {
  const [count, setCount] = useState<number>(0);
  let percentage: number = 0;

  if (total_sprint && current_sprint) {
    percentage = parseInt(((current_sprint / total_sprint) * 100).toFixed());
  }

  const animation = {
    hidden: {
      width: "0%",
    },
    visible: {
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      width: `${percentage > 100 ? "100" : percentage}%`,
    },
  };

  const averageColorHandler = (average: number) => {
    if (average <= 50) {
      return "#D14085";
    } else if (average > 50 && average <= 70) {
      return "#F5B617";
    } else if (average > 70) {
      return "#00BA9F";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      percentage !== 0 &&
        setCount((prevCount) => {
          if (prevCount > percentage) {
            clearInterval(timer);
            return percentage;
          } else {
            return prevCount + 1;
          }
        });
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return (
    <div className="flex w-full items-center gap-[10px]">
      <span
        className="w-[40px] whitespace-nowrap text-sm"
        style={{ color: averageColorHandler(percentage) }}
      >
        {count}%
      </span>
      <div className="relative h-[7px] w-full rounded-full bg-[#EAEAEA]">
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className={
            "absolute left-0 top-0 h-full w-[50px] rounded-full transition-colors duration-500"
          }
          style={{
            backgroundColor: averageColorHandler(percentage),
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SprintSlider;
