import { useState } from "react";
import Counter from "../counter";
import PageWrapper from "../page-wrapper";
import ProductNavbar from "../product-navbar";
import Radio, { RadioOption } from "../radio";
import ProductImage from "./../../assets/product_image.png";
import IconButton from "../icon-button";
import BagIcon from "../icons/bag-icon";
import StarIcon from "../icons/star-icon";
import HeartIcon from "../icons/heart-icon";
import { NavLink } from "react-router-dom";
import Dots from "../dots";

export default function Product() {
  // here we can make an api call to fetch the product

  const sizeOptions: RadioOption[] = [
    { key: "S", value: "s" },
    { key: "M", value: "m" },
    { key: "L", value: "l" },
    { key: "XL", value: "xl" },
    { key: "XXL", value: "xxl" },
  ];

  const [price] = useState<number>(198);
  const [totalPrice, setTotalPrice] = useState<number>(198);

  return (
    <PageWrapper>
      <div className="min-h-screen relative bg-slate-300">
        <ProductNavbar className="absolute z-10" />

        <div>
          <img src={ProductImage} alt="Roller Rabit - Vado Odelle Dress" />
        </div>

        <div className="absolute w-full z-10 bottom-0 max-[280px]:h-zag-p-h-s">
          <div className="grid grid-cols-3 p-5 z-10 bottom-16 w-full">
            <div
              style={{ gridColumn: 2 }}
              className="flex items-center justify-center"
            >
              <p className="justify-self-center">
                <Dots length={3} active={2} />
              </p>
            </div>
            <IconButton
              style={{ gridColumn: 3 }}
              icon={<HeartIcon size={18} color="black" />}
              className="bg-white justify-self-end"
            />
          </div>

          <div className="p-8 rounded-zag-top-lg bg-white overflow-auto">
            <div className="flex justify-between mb-5 ">
              <div>
                <h1 className="text-xl font-bold max-[280px]:text-lg">
                  Roller Rabbit
                </h1>
                <h3 className="text-sm text-zag-gray mb-2 max-[280px]:text-xs">
                  Vado Odelle Dress
                </h3>
                <div className="flex sm:space-x-2 max-[320px]:flex-col">
                  <div className="flex space-x-1">
                    {Array.from(Array(5), () => (
                      <StarIcon />
                    ))}
                  </div>
                  <p className="text-xs max-[320px]:mt-2">(320 Reviews)</p>
                </div>
              </div>
              <div className="flex flex-col items-end max-[320px]:w-20">
                <Counter
                  initial={1}
                  step={1}
                  min={1}
                  className="mb-2"
                  onChange={(value) => setTotalPrice(price * value)}
                />
                <p className="text-sm font-bold text-end max-[280px]:text-xs">
                  Available in stock
                </p>
              </div>
            </div>

            <div className="mb-5">
              <p className="text-lg font-bold mb-2">Size</p>
              <Radio options={sizeOptions} initial="S" />
            </div>

            <div className="mb-7">
              <p className="text-lg font-bold mb-2">Description</p>
              <p className="text-zag-gray text-sm">
                Get a little lift from these Sam Edelman sandals featuring
                ruched straps and leather lace-up ties, while a braided jute
                sole makes a fresh statement for summer.
              </p>
            </div>

            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-xs text-zag-gray block -mb-1">
                  Total Price
                </span>
                <span className="text-lg font-bold max-[280px]:text-base">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div>
                <NavLink to="/purchase">
                  <IconButton
                    text="Buy Now"
                    icon={<BagIcon color="white" size={22} />}
                    className="w-fit text-white px-8 text-lg w-[200px] max-[280px]:px-2 max-[320px]:text-sm max-[320px]:w-[150px]"
                    style={{
                      padding: "25px",
                    }}
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

//
