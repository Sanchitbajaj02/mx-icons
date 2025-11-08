import React from "react";
import Icon from "../../Icon";

export default function ScrollTwotone({
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M9.60008 8.97021L7.11008 11.4602C6.82008 11.7502 6.82008 12.2402 7.11008 12.5302L9.60008 15.0202" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M14.4004 8.97021L16.8904 11.4602C17.1804 11.7502 17.1804 12.2402 16.8904 12.5302L14.4004 15.0202" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
