import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <header>
      <div className="text-gray-100 bg-violet-800 ">
        <div className="container mx-auto flex flex-wrap justify-around py-4 md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Vintage Football Shirts</span>
          </a>
          <div className="w-[50%] relative">
            <input
              type="text"
              className="p-2 w-full bg-transparent border-b-2 border-b-white placeholder:text-gray-200 focus:outline-none"
              placeholder="What Shirt do you looking for?"
            />
            <div className="absolute top-1 right-0 text-3xl">
              <CiSearch />
            </div>
          </div>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
          </button>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container">
          <ul className="flex justify-center gap-12 p-4">
            <li className="text-lg font-semibold">Teams</li>
            <li className="text-lg font-semibold">National Teams</li>
            <li className="text-lg font-semibold">Leagues</li>
            <li className="text-lg font-semibold">Players</li>
            <li className="text-lg font-semibold">Brands</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
