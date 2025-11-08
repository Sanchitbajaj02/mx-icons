import React from "react";
import Icon from "../../Icon";

export default function PaperclipTwotone({
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
      <path d="M11.9707 12V15.5C11.9707 17.43 13.5407 19 15.4707 19C17.4007 19 18.9707 17.43 18.9707 15.5V10C18.9707 6.13 15.8407 3 11.9707 3C8.1007 3 4.9707 6.13 4.9707 10V16C4.9707 19.31 7.6607 22 10.9707 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
