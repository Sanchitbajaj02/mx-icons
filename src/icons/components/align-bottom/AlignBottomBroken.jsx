import React from "react";
import Icon from "../../Icon";

export default function AlignBottomBroken({
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
      <path d="M19.2598 5.1001V16.9001C19.2598 18.4001 18.6198 19.0001 17.0298 19.0001H15.9898C14.3998 19.0001 13.7598 18.4001 13.7598 16.9001V5.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7593 5.1001V11.9001C10.7593 13.4001 10.1193 14.0001 8.5293 14.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.25977 5.1001V11.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
