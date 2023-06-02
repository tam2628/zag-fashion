import { NavLink } from "react-router-dom";
import IconButton from "./icon-button";
import HeartIcon from "./icons/heart-icon";

type HomeProductCardProps = {
  image: string;
  name: string;
  description?: string;
  price: number;
  className?: string;
};

export default function HomeProductCard({
  image,
  name,
  description,
  price,
  className,
}: HomeProductCardProps) {
  return (
    <NavLink to={"/product/123"}>
      <section className={className}>
        <div className="rounded-lg overflow-hidden mb-2 relative">
          <img className="w-full" src={image} />
          <div className="absolute z-10 top-0 p-3 w-fit right-0">
            <IconButton icon={<HeartIcon size={16} />} className="w-8 h-8" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-md font-bold">{name}</p>
          <p className="text-sm text-zag-gray">{description}</p>
          <p className="font-bold">${price}</p>
        </div>
      </section>
    </NavLink>
  );
}
