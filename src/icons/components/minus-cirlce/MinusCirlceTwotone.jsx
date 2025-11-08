import React from "react";
import Icon from "../../Icon";

export default function MinusCirlceTwotone({
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
      <path d="M11.9199 22C17.4199 22 21.9199 17.5 21.9199 12C21.9199 6.5 17.4199 2 11.9199 2C6.41992 2 1.91992 6.5 1.91992 12C1.91992 17.5 6.41992 22 11.9199 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.34" d="M7.91992 12H15.9199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
