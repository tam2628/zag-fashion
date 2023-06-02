import classNames from "classnames";
import IconButton from "./icon-button";
import BackIcon from "./icons/back-icon";
import BagIcon from "./icons/bag-icon";
import { NavLink } from "react-router-dom";

export default function ProductNavbar({
  className,
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <nav
      className={classNames(
        "p-5",
        "flex",
        "justify-between",
        "items-center",
        "w-full",
        className
      )}
    >
      <NavLink to="/">
        <IconButton icon={<BackIcon />} />
      </NavLink>
      <IconButton icon={<BagIcon size={20} />} className="bg-white" />
    </nav>
  );
}
