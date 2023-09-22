import { FC } from "react";
import { IconsProps } from "@/shared/types";

const PointsManagerIcon: FC<IconsProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 4H11.25V2.83333H15.75V4ZM1.6875 0.5C0.755859 0.5 0 1.28385 0 2.25V4.58333C0 5.54948 0.755859 6.33333 1.6875 6.33333H16.3125C17.2441 6.33333 18 5.54948 18 4.58333V2.25C18 1.28385 17.2441 0.5 16.3125 0.5H1.6875ZM15.75 11V12.1667H6.75V11H15.75ZM1.6875 8.66667C0.755859 8.66667 0 9.45052 0 10.4167V12.75C0 13.7161 0.755859 14.5 1.6875 14.5H16.3125C17.2441 14.5 18 13.7161 18 12.75V10.4167C18 9.45052 17.2441 8.66667 16.3125 8.66667H1.6875Z"
        fill={color}
      />
    </svg>
  );
};

export default PointsManagerIcon;
