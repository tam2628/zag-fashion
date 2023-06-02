import React from "react";
import { SearchIcon } from "./icons/search-icon";

export const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>((props, ref) => (
  <div className="flex space-x-2 items-center p-3 px-5 rounded-full bg-slate-100 w-full">
    <SearchIcon />
    <input
      ref={ref}
      {...props}
      placeholder="Search..."
      className="bg-slate-100 w-full outline-none"
    />
  </div>
));
