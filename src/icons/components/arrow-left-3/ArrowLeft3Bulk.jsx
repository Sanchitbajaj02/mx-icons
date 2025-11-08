import React from "react";
import Icon from "../../Icon";

export default function ArrowLeft3Bulk({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path opacity="0.4" d="M10.7702 8.52002L15.8202 12.31V17.92C15.8202 18.88 14.6602 19.36 13.9802 18.68L8.80023 13.51C7.97023 12.68 7.97023 11.33 8.80023 10.5L10.7702 8.52002Z" fill="currentColor"/>
<path d="M15.8195 6.07993V12.3099L10.7695 8.51993L13.9795 5.30993C14.6595 4.63993 15.8195 5.11993 15.8195 6.07993Z" fill="currentColor"/>
    </Icon>
  );
}
