import * as React from "react";

export interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  bgColor?: string;
  textColor?: string;
  radius?: number;
}

const LogoIcon: React.FC<LogoIconProps> = ({
  size = 128,
  bgColor = "#34C7A2",
  textColor = "#ffffff",
  radius = 50,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id="clip">
          <rect width="512" height="512" rx={radius} />
        </clipPath>
      </defs>

      <g clipPath="url(#clip)">
        <rect width="512" height="512" fill={bgColor} />

        <path
            d="M122.223 156.204h38.94V347h-38.94zm76.782 94.238q0-20.386 7.69-37.963 7.69-17.701 22.217-30.64 14.648-13.062 35.645-20.508 21.117-7.446 47.729-7.446 23.316 0 42.725 4.761 19.531 4.638 36.255 14.282l-17.823 29.297q-5.005-3.297-11.596-5.86-6.47-2.563-13.916-4.272-7.324-1.831-15.259-2.808a125 125 0 0 0-15.503-.976q-18.555 0-33.081 4.638-14.526 4.517-24.536 12.818-9.888 8.178-15.137 19.653-5.127 11.353-5.127 25.024 0 14.16 5.371 26.001t15.503 20.508q10.254 8.546 24.902 13.428 14.77 4.761 33.326 4.761 8.422 0 16.723-1.221 8.301-1.22 15.991-3.296a141 141 0 0 0 15.015-5.127q7.202-3.052 13.428-6.592l17.822 29.297q-15.625 10.01-36.133 15.747-20.508 5.615-43.579 5.615-29.418 0-51.636-7.568-22.217-7.69-37.109-20.996-14.892-13.428-22.461-31.494-7.446-18.189-7.446-39.063"
            fill={textColor}
        />
      </g>
    </svg>
  );
};

export default LogoIcon;