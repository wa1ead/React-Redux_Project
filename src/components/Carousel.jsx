import { useState, useEffect } from "react";

export default function Carousel() {
  return (
    <section className="size-full">
      <div
        data-hs-carousel='{
        "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-screen bg-white">
          <div className="hs-carousel-body absolute top-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {images.map((i) => (
              <div className="hs-carousel-slide relative w-full h-screen">
                <img src={i} className="w-full h-screen object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 bg-black opacity-75 w-full h-full"></div>
          <div className="w-full absolute my-auto h-screen">
            <div className="relative top-0 start-0 flex items-center text-white size-full justify-center flex-col gap-4">
              <p className="text-2xl font-normal">
                Wearing the{" "}
                <span className="text-yellow-400 font-bold">HISTORY</span>
                <br />
                Wearing the{" "}
                <span className="text-yellow-400 font-bold">GLORY!</span>
              </p>
              <button className="py-2 px-6 rounded-full bg-blue-800 text-xl font-normal hover:bg-blue-600">
                Shop now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
