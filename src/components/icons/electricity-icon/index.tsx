import { FC } from "react";

type ElectricityIconProps = {
  width: number;
  height: number;
};

const ElectricityIcon: FC<ElectricityIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.4103 5.08918L6.43308 1.16646C6.44826 1.11827 6.45596 1.06706 6.45596 1.01392C6.45596 0.736659 6.23215 0.510111 5.95462 0.510111C5.79715 0.510111 5.65701 0.581343 5.56553 0.695947L0.459842 7.31755C0.39127 7.40402 0.350586 7.51356 0.350586 7.63309C0.350586 7.91284 0.57957 8.1419 0.859346 8.1419H3.93985L2.91735 12.0646C2.90195 12.1131 2.89444 12.164 2.89444 12.2172C2.89444 12.4947 3.11833 12.721 3.39556 12.721C3.55331 12.721 3.69317 12.65 3.78481 12.5351L8.89028 5.91347C8.95907 5.82703 8.99984 5.71772 8.99984 5.59796C8.99984 5.31824 8.77075 5.08918 8.49114 5.08918H5.4103Z"
        fill="white"
      />
    </svg>
  );
};

export default ElectricityIcon;
