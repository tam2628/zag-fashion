import classNames from "classnames";
import { motion, HTMLMotionProps } from "framer-motion";
import React, { ButtonHTMLAttributes } from "react";

type IconButtonProps = {
  icon: React.ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text?: string;
} & HTMLMotionProps<"button">;

// TODO: animate the button please

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => (
    <motion.button
      ref={ref}
      {...props}
      className={classNames(
        "w-10",
        "h-10",
        "bg-black",
        "rounded-full",
        "p-2",
        "flex",
        "justify-center",
        "items-center",
        props.className
      )}
    >
      <div className="flex items-center space-x-3">
        {props.icon}
        {props.text && <span>{props.text}</span>}
      </div>
    </motion.button>
  )
);

export default IconButton;
