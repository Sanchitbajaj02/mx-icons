import React from "react";
import Icon from "../../Icon";

export default function TextTwotone({
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
      <path d="M2.66992 7.16979V5.34979C2.66992 4.19979 3.59992 3.27979 4.73992 3.27979H19.2599C20.4099 3.27979 21.3299 4.20979 21.3299 5.34979V7.16979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M12 20.7199V4.10986" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.06055 20.7202H15.9405" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
