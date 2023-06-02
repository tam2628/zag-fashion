import { IconProps } from "./icon-props-type";

export default function BagIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size ?? "14"}
      height={size ?? "15"}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.93536 13.9995H4.28993C2.21622 13.9995 0.625347 13.2505 1.07723 10.2359L1.60339 6.15036C1.88195 4.64615 2.84143 4.07047 3.68329 4.07047H10.5668C11.421 4.07047 12.3248 4.68948 12.6467 6.15036L13.1728 10.2359C13.5566 12.9101 12.0091 13.9995 9.93536 13.9995Z"
        stroke={color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0283 3.92179C10.0283 2.30815 8.72015 1.00003 7.10648 1.00003C6.32944 0.996739 5.5831 1.30311 5.03248 1.8514C4.48187 2.3997 4.17234 3.14474 4.17235 3.92179"
        stroke={color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.11204 6.9668H9.08113"
        stroke={color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16906 6.9668H5.13811"
        stroke={color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
