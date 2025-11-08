import React from "react";
import Icon from "../../Icon";

export default function StatusUpTwotone({
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
      <path opacity="0.4" d="M6.87988 18.1501V16.0801" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M12 18.1498V14.0098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M17.1201 18.1502V11.9302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<g opacity="0.4">
<path d="M17.1199 5.84961L16.6599 6.38961C14.1099 9.36961 10.6899 11.4796 6.87988 12.4296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M14.1904 5.84961H17.1204V8.76961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
