import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={90}
    height={90}
    fill="none"
    {...props}
  >
    <circle cx={45} cy={45} r={30} fill="#80C2FF" fillOpacity={0.74} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M45 36v18m0 0-8.5-8.5M45 54l8.5-8.5"
    />
  </svg>
);
export default SvgComponent;
