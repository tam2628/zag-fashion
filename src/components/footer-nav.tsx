import BellIcon from "./icons/bell-icon";
import CartIcon from "./icons/cart-icon";
import HomeIcon from "./icons/home-icon";
import ProfileIcon from "./icons/profile-icon";

export default function FooterNav() {
  return (
    <div className="flex items-center justify-between p-3 px-12 max-[320px]:px-8 pb-7 rounded-t-3xl shadow-lg bg-white  footer-nav">
      <div className="flex items-center relative">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black reltative z-10">
          <HomeIcon />
        </div>
        <div className="font-bold text-sm bg-zag-gray-200 p-1 rounded-r-full pl-5 -ml-4 pr-3">
          Home
        </div>
      </div>
      <CartIcon />
      <BellIcon />
      <ProfileIcon />
    </div>
  );
}
