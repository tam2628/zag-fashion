import { IconProps } from "./icon-props-type";

export default function HeartIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size ?? "10"}
      height={size ?? "10"}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.16529 4.82183C0.688355 3.33281 1.24574 1.63087 2.809 1.12727C3.6313 0.861908 4.53895 1.01837 5.22257 1.53264C5.8693 1.03259 6.81028 0.863686 7.63169 1.12727C9.19495 1.63087 9.75589 3.33281 9.2794 4.82183C8.53711 7.18205 5.22257 9 5.22257 9C5.22257 9 1.93247 7.20961 1.16529 4.82183Z"
        stroke={color ?? "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00067 2.6451C7.47627 2.79889 7.8123 3.22337 7.85275 3.72164"
        stroke={color ?? "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
