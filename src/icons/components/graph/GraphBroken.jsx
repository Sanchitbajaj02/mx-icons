import React from "react";
import Icon from "../../Icon";

export default function GraphBroken({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M16.28 2.95994C13 1.99994 12 3.07994 12 5.67994V8.55994C12 10.9999 13 11.9999 15 11.9999H18.32C20.92 11.9999 22 10.9999 21.04 7.71994C20.82 6.97994 20.46 6.26994 20 5.62994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.11944 14.43C1.30944 9.39001 4.64944 4.95001 9.25944 4.01001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 14.7C19.07 19.33 14.63 22.69 9.58 21.87C7.35 21.52 5.37 20.31 4 18.61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
