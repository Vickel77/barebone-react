import React, { HTMLAttributes } from "react";

function Close(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      style={{ cursor: "pointer" }}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 1L1 13M1 1L13 13"
        stroke="#667085"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Close;
