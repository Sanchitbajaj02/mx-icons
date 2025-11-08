import React from "react";
import Icon from "../../Icon";

export default function ConvertTwotone({
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
      <path d="M12.0046 21.9843C17.516 21.9843 21.9838 17.5165 21.9838 12.0051C21.9838 6.49372 17.516 2.02588 12.0046 2.02588C6.49324 2.02588 2.02539 6.49372 2.02539 12.0051C2.02539 17.5165 6.49324 21.9843 12.0046 21.9843Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M6.13672 4.02148L14.2997 12.2044L14.3197 7.6639" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M17.8626 19.9786L9.69965 11.8057L9.67969 16.3362" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
