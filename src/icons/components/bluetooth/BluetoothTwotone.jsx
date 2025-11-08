import React from "react";
import Icon from "../../Icon";

export default function BluetoothTwotone({
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
      <path d="M5.63965 18.64L17.9896 7.31998C18.4996 6.84998 18.4896 6.09997 17.9496 5.64997L14.0996 2.43998C13.0996 1.60998 12.2796 1.98998 12.2796 3.28998V20.71C12.2796 22.01 13.0996 22.39 14.0996 21.56L17.9496 18.35C18.4896 17.9 18.4996 17.15 17.9896 16.68L5.63965 5.35996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
