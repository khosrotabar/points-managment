import { IconsProps } from "@/shared/types";
import { FC } from "react";

const PichartIcon: FC<IconsProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.83041 2.87332C4.75695 2.86774 0.640177 6.97613 0.635411 12.0496C0.629832 17.123 4.73822 21.2398 9.81168 21.2446C14.8851 21.2502 19.0019 17.1418 19.0067 12.0683L9.82104 12.0585L9.83041 2.87332Z"
        fill="#b2b2b2"
      />
      <path
        d="M11.8094 0.96579L11.8 10.1518L20.9857 10.1612C20.9912 5.08733 16.8833 0.97015 11.8094 0.96579Z"
        fill="#b2b2b2"
      />
    </svg>
  );
};

export default PichartIcon;
