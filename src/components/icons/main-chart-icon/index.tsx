import { FC } from "react";
import { IconsProps } from "@/shared/types";

const MainChartIcon: FC<IconsProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 1.71429C2.5 1.04263 1.94141 0.5 1.25 0.5C0.558594 0.5 0 1.04263 0 1.71429V14.4643C0 16.1415 1.39844 17.5 3.125 17.5H18.75C19.4414 17.5 20 16.9574 20 16.2857C20 15.6141 19.4414 15.0714 18.75 15.0714H3.125C2.78125 15.0714 2.5 14.7982 2.5 14.4643V1.71429ZM18.3828 5.00045C18.8711 4.52612 18.8711 3.7558 18.3828 3.28147C17.8945 2.80714 17.1016 2.80714 16.6133 3.28147L12.5 7.28103L10.2578 5.1029C9.76953 4.62857 8.97656 4.62857 8.48828 5.1029L4.11328 9.3529C3.625 9.82723 3.625 10.5975 4.11328 11.0719C4.60156 11.5462 5.39453 11.5462 5.88281 11.0719L9.375 7.68326L11.6172 9.86138C12.1055 10.3357 12.8984 10.3357 13.3867 9.86138L18.3867 5.00424L18.3828 5.00045Z"
        fill={color}
      />
    </svg>
  );
};

export default MainChartIcon;
