import { ReactNode } from "react";

type CarouselCardProps = {
  children: ReactNode;
  ctaText?: string;
  offerImage: string;
};

export default function CarouselCard({
  children,
  ctaText,
  offerImage,
}: CarouselCardProps) {
  return (
    <div
      className="flex-none w-70 h-50 rounded-xl relative max-[320px]:w-60 max-[320px]:h-40"
      style={{
        minWidth: "300",
        backgroundImage: `url(${offerImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="p-5 max-[320px]:p-3">
        {children}
        {ctaText && (
          <button className="bg-black rounded-full mt-3 font-bold text-white text-sm p-1 px-4">
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
}
