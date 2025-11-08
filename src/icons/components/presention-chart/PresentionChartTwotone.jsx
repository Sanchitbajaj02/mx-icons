import React from "react";
import Icon from "../../Icon";

export default function PresentionChartTwotone({
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
      <path d="M5.90024 17H18.0902C19.9902 17 20.9902 16 20.9902 14.1V2H2.99023V14.1C3.00023 16 4.00024 17 5.90024 17Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M8 22L12 20M12 20V17M12 20L16 22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path opacity="0.4" d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
