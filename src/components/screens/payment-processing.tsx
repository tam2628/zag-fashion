import PageWrapper from "../page-wrapper";

import success from "./../../assets/success.png";

import { Spinner } from "spin.js";
import { useEffect, useRef, useState } from "react";

export default function PaymentProcessing() {
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new Spinner({ color: "black", lines: 12, length: 5, width: 2 }).spin(
      ref.current as HTMLDivElement
    );

    const id = setTimeout(() => setPaymentSuccess(true), 3000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <PageWrapper>
      <div className="min-h-screen w-full bg-zag-pink-100 p-10 pt-5 flex flex-col items-center justify-center">
        {!paymentSuccess && (
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-10">
              <div ref={ref} />
            </div>

            <p className="font-bold mb-1">Payment is processing...</p>
            <p className="text-zag-gray text-sm">
              Please wait, do not close the screen
            </p>
          </div>
        )}

        {paymentSuccess && (
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-5 w-10 h-10">
              <img src={success} />
            </div>

            <p className="font-bold mb-1">Payment received!</p>
            <div className="w-[250px]">
              <p className="text-zag-gray text-sm text-center">
                Your order is on the way. Please check your email for the
                receipt.
              </p>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
