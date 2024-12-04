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
    <div
      data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
    "isAutoPlay": true
  }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full min-h-screen bg-white">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          {images.map((i) => (
            <div className="hs-carousel-slide relative w-full h-full">
              <img src={i} className="w-full h-screen object-cover" />
              <div className="absolute top-0 left-0 bg-black opacity-75 w-full h-full"></div>
            </div>
          ))}
          <div>
            <h2 className="text-white">heelo</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
