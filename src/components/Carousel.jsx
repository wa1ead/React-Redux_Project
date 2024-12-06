import { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_656/MTc0MjUwOTUwNjYyMzAxNTY0/top-10-best-football-teams-of-all-time.webp",
    "https://cdn.mos.cms.futurecdn.net/BqgjWAKJdXH6fTR7GbpHcm-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/Jawhug4WvAhGxXzz4rWtFn-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/RjanDbBwKyyUoDvyViAeqJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/xMgsiA3gX7H5bBCkvkz4hJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/EMfMETNaWdmP7y7ryvFXaJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/Q3MaLFqtQ3yF8GbGnd5qNJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/KkRRtiRdLqFdY7AmQUeBMT-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/2NpQdDwK9YeBKhgg7RY9zm-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/c4R9rhPQqooP6z2rteEFwS-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/vdDYxp3ZAtZqaH9GX24BAU-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/5skpGfFHjuAJZaWK23tHRQ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/FYjfc9TNaGRYhr2HgZpRCQ-970-80.jpg.webp",
  ];

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
