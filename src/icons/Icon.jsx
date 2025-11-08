import React from "react";

export default function Icon({
  size = 24,
  color = "#292D32",
  fill = "none",
  className = "",
  children,
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
      {...props}
    >
      {children}
    </svg>
  );
}
