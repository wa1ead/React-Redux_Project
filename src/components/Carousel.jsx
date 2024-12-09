import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextSlide, prevSlide } from "../features/slider/sliderSlice";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Carousel() {
  //IMPORTING SLIDER STATE FROM SLIDER SLICE
  const { value, images } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  //AUTOMATICALLY CHANGE THE IMAGE EVERY 5 SECONDES
  useEffect(() => {
    const loop = setInterval(() => {
      dispatch(nextSlide());
    }, 5000);

    return () => clearInterval(loop);
  }, []);
  return (
    <section className="size-full">
      <div className="relative overflow-hidden w-full h-screen bg-white">
        <div className="absolute top-0 left-0 flex w-full">
          <div className="w-full">
            {images.map((image, index) => (
              <div
                className={
                  value === index
                    ? "scale-100 ease-in-out duration-700 opacity-100"
                    : "scale-95 ease-in-out duration-700 opacity-0"
                }
                key={index}
              >
                {value === index && (
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-screen object-fill"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 bg-black opacity-75 w-full h-full"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
          <p className="text-3xl font-bold text-white max-md:text-xl">
            Wearing the{" "}
            <span className="text-yellow-400 font-bold">HISTORY</span>
            <br />
            Wearing the{" "}
            <span className="text-yellow-400 font-bold">GLORY!</span>
          </p>
          <button className="py-4 px-8 rounded-full bg-blue-800 text-xl font-normal hover:bg-blue-700 text-white ease-in-out duration-300 max-md:px-4 max-md:py-2">
            Shop now!
          </button>
        </div>

        {/* Navigation Buttons
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 text-gray-900 rounded-full p-4 text-lg shadow-md hover:bg-gray-900 hover:text-gray-200 ease-in-out duration-100 max-lg:p-2 max-lg:text-sm"
          onClick={() => dispatch(prevSlide())}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 text-gray-900 rounded-full p-4 text-lg shadow-md hover:bg-gray-900 hover:text-gray-200 ease-in-out duration-100 max-lg:p-2 max-lg:text-sm"
          onClick={() => dispatch(nextSlide())}
        >
          <IoIosArrowForward />
        </button> */}
      </div>
    </section>
  );
}
