import React from "react";
import Icon from "../../Icon";

export default function ToggleOffBroken({
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
      <path d="M5.5 10.8V13.2C5.5 15.2 6.3 16 8.3 16H10.7C12.7 16 13.5 15.2 13.5 13.2V10.8C13.5 8.8 12.7 8 10.7 8H8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
