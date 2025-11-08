import React from "react";
import Icon from "../../Icon";

export default function ArrowLeft2Broken({
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
      <path d="M11.1897 7.93994L8.56969 10.5599C7.79969 11.3299 7.79969 12.5899 8.56969 13.3599L15.0897 19.8799" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.0908 4.04004L14.0508 5.08004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
