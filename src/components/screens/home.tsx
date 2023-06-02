import "./home.css";
import IconButton from "../icon-button";
import FilterIcon from "../icons/filter-icon";
import Navbar from "../navbar";
import CarouselCard from "../offer-card";
import { SearchInput } from "../search-input";
import OfferImage1 from "./../../assets/offer_image_1.png";
import OfferImage2 from "./../../assets/offer_image_2.png";
import HomeProductCard from "../home-product-card";
import ProductImageBag from "./../../assets/product_bag.png";
import ProductImageShoe from "./../../assets/product_shoe.png";
import PageWrapper from "../page-wrapper";
import FooterNav from "../footer-nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <div className="p-5">
          <h1 className="mb-6">
            <span className="font-bold text-3xl">Welcome,</span>
            <br />
            <span className="font-bold text-zag-gray text-2xl">
              Our Fashions App
            </span>
          </h1>
          <div className="flex justify-between space-x-3 items-center mb-10">
            <SearchInput />
            <div className="w-fit">
              <IconButton icon={<FilterIcon />} className="w-12 h-12" />
            </div>
          </div>

          {/* The children inside carousel were not made into component because they could have varying information and as such should have creative freedom */}

          <div className="flex overflow-auto space-x-3 carousel-container mb-7">
            <CarouselCard ctaText="Get Now" offerImage={OfferImage1}>
              <p className="text-2xl max-[320px]:text-xl font-bold">50% off</p>
              <p className="text-lg max-[320px]:text-base mb-5">
                On everything today
              </p>
              <p className="font-bold text-xs" style={{ color: "#666666" }}>
                With code: FSCREATION
              </p>
            </CarouselCard>

            <CarouselCard ctaText="Get Now" offerImage={OfferImage2}>
              <p className="text-2xl max-[320px]:text-xl font-bold">70% off</p>
              <p className="text-lg max-[320px]:text-base mb-5">
                On everything today
              </p>
              <p className="font-bold text-xs" style={{ color: "#666666" }}>
                With code: FSCREATION
              </p>
            </CarouselCard>
          </div>

          <div className="flex justify-between items-center mb-3">
            <p className="text-lg font-bold">New Arrivals</p>
            <p className="font-bold text-sm text-zag-gray">View All</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            <HomeProductCard
              image={ProductImageBag}
              name="The Marc Jacobs"
              description="Traveler Tote"
              price={195}
            />
            <HomeProductCard
              image={ProductImageShoe}
              name="The Marc Jacobs"
              description="Traveler Tote"
              price={195}
            />
          </div>
        </div>
        <div className="fixed bottom-0 w-full z-30">
          <FooterNav />
        </div>
      </PageWrapper>
    </>
  );
}
