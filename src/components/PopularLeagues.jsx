import { useSelector, useDispatch } from "react-redux";
import { handleNext, handlePrev } from "../features/leagues/leaguesSlice";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export default function PopularLeagues() {
  //IMPORTING THE LEAGUES STATE FROM THE LEAGUES SLICE
  const { index, items } = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  const visibleLeagues = items.slice(index, index + 4);

  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-gray-950 font-semibold text-2xl">
          Popular Leagues
        </h1>
      </div>
      <div className="relative py-12">
        {/* Left Arrow */}
        <button
          onClick={() => dispatch(handlePrev())}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-600 z-10 text-xl"
        >
          <IoIosArrowBack />
        </button>
        {/* Cards Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 mx-[10%] overflow-hidden">
          {visibleLeagues.map((league, index) => (
            <div
              key={index}
              className=" bg-gray-900 rounded-md p-4 mx-auto flex flex-col gap-4 items-center w-24 md:w-40 h-40"
            >
              <img
                src={league.image}
                alt={league.name}
                className="w-16 h-16 object-contain"
              />
              <p className="font-bold text-lg text-gray-100 text-center">
                {league.name}
              </p>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => dispatch(handleNext())}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-600 z-10 text-xl"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
