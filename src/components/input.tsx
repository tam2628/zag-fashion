import classNames from "classnames";
import React, { ComponentType, HTMLInputTypeAttribute } from "react";
import { IconProps } from "./icons/icon-props-type";

type InputProps = {
  isInvalid?: boolean;
  type?: HTMLInputTypeAttribute;
  Icon?: ComponentType<IconProps>;
};

export const Input = React.forwardRef<
  HTMLInputElement,
  Omit<React.HTMLProps<HTMLInputElement>, "type"> & InputProps
>(({ Icon, ...props }, ref) => (
  <div
    className={classNames(
      "bg-white",
      "rounded",
      "overflow-hidden",
      "flex",
      "border-2",
      { "border-black": !props.isInvalid },
      { "border-rose-400": props.isInvalid }
    )}
  >
    <input
      {...props}
      ref={ref}
      className={classNames(
        "p-2",
        "w-full",
        "outline-none",

        "rounded",

        props.className
      )}
    />
    <div className="w-fit pr-2">{Icon && <Icon size={40} />}</div>
  </div>
));
