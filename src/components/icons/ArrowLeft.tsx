import React from "react";

function ArrowLeft({
  color,
  size,
  invert,
}: {
  color?: string;
  size?: string;
  invert?: boolean;
}) {
  return (
    <svg
      style={{ rotate: invert ? "180deg" : "0" }}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4277 3.58344L11.66 1.81567L5.1815 8.29414L5.17814 8.29077L3.41037 10.0585L3.41374 10.0619L3.41039 10.0653L5.17816 11.833L5.1815 11.8297L11.66 18.3081L13.4277 16.5404L6.94927 10.0619L13.4277 3.58344Z"
        fill="#9599A1"
      />
    </svg>
  );
}

export default ArrowLeft;
