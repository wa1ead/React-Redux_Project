import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  //THE OPEN CART STATE
  const [cart, setCart] = useState(false);

  //THE OPEN CART BUTTON CLICK FUNCTION HANDLER
  const toggleCart = () => {
    setCart(!cart);
    console.log("cart clicked");
  };
  return (
    <>
      <header>
        <div className="text-gray-100 bg-blue-800 ">
          <div className="container mx-auto flex flex-wrap justify-around py-4 md:flex-row items-center">
            <a
              className="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0"
              href="/"
            >
              <img
                src="/vintage-football-shirts-icon.png"
                alt="logo"
                width="140px"
              />
            </a>
            <div className="mx-auto w-[50%] relative">
              <input
                type="text"
                className="p-2 w-full bg-transparent border-b-2 border-b-white placeholder:text-gray-200 focus:outline-none"
                placeholder="What Shirt do you looking for?"
              />
              <div className="absolute top-1 right-0 text-3xl">
                <CiSearch />
              </div>
            </div>
            <button className="text-3xl" onClick={toggleCart}>
              <CiShoppingCart />
            </button>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="p-4">
            <ul className="flex justify-center gap-12 text-blue-950">
              <li className="text-lg font-semibold">Teams</li>
              <li className="text-lg font-semibold">National Teams</li>
              <li className="text-lg font-semibold">Leagues</li>
              <li className="text-lg font-semibold">Players</li>
              <li className="text-lg font-semibold">Brands</li>
            </ul>
          </div>
        </div>
      </header>
      {cart ? <ShoppingCart onClose={toggleCart} /> : null}
    </>
  );
}
