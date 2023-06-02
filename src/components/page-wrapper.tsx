import { ReactNode } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={classNames("min-h-screen", className)}
    >
      {children}
    </motion.div>
  );
}
