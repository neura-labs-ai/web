import * as React from "react";

export default function LibraryIcon({ fill = "#f472b6", ...rest }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-library"
      >
        <path d="m16 6 4 14"></path>
        <path d="M12 6v14"></path>
        <path d="M8 8v12"></path>
        <path d="M4 4v16"></path>
      </svg>
    </>
  );
}
