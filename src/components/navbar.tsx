import IconButton from "./icon-button";
import MenuIcon from "./icons/menu-icon";
import ProfilePicture from "./profile-picture";
import profileImage from "./../assets/profile_image.png";
import classNames from "classnames";

export default function Navbar({ className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <nav
      className={classNames(
        "p-5",
        "flex",
        "justify-between",
        "items-center",
        className
      )}
    >
      <IconButton icon={<MenuIcon />} />
      <ProfilePicture url={profileImage} />
    </nav>
  );
}
