import { useState } from "react";
export default function ShoppingCart({ onClose }) {
  const products = [
    {
      name: "ITALY 2006 World Cup",
      image:
        "https://www.le7sorelle.it/94228-large_default/2006-Home-Italy-shirt-Puma-Totti-10.jpg",
      brand: "PUMA",
      price: 79.99,
      quantity: 2,
    },
    {
      name: "ARSENAL 03/04 SHIRT",
      image:
        "https://maniacstore.in/cdn/shop/files/Screenshot-2024-06-03-00-08-09-59_40deb401b9ffe8e1df2f1cc5ba480b12_2.jpg?v=1717353661",
      brand: "NIKE",
      price: 59.99,
      quantity: 3,
    },
    {
      name: "CELTIC 08/09 SHIRT",
      image:
        "https://www.vintagefootballshirts.com/cdn/shop/files/2008-09-celtic-nike-home-shirt-64607-1.jpg?v=1730189760&width=800",
      brand: "NIKE",
      price: 29.99,
      quantity: 1,
    },
    {
      name: "REAL MADRID 11/12 SHIRT",
      image:
        "https://www.retrofootball.co.uk/media/catalog/product/cache/8/small_image/280x/9df78eab33525d08d6e5fb8d27136e95/r/e/real_madrid_2011_2012_v13659_retrofootball.jpg",
      brand: "ADIDAS",
      price: 99.99,
      quantity: 2,
    },
    {
      name: "REAL MADRID 11/12 SHIRT",
      image:
        "https://www.retrofootball.co.uk/media/catalog/product/cache/8/small_image/280x/9df78eab33525d08d6e5fb8d27136e95/r/e/real_madrid_2011_2012_v13659_retrofootball.jpg",
      brand: "ADIDAS",
      price: 99.99,
      quantity: 2,
    },
    {
      name: "REAL MADRID 11/12 SHIRT",
      image:
        "https://www.retrofootball.co.uk/media/catalog/product/cache/8/small_image/280x/9df78eab33525d08d6e5fb8d27136e95/r/e/real_madrid_2011_2012_v13659_retrofootball.jpg",
      brand: "ADIDAS",
      price: 99.99,
      quantity: 2,
    },
    {
      name: "REAL MADRID 11/12 SHIRT",
      image:
        "https://www.retrofootball.co.uk/media/catalog/product/cache/8/small_image/280x/9df78eab33525d08d6e5fb8d27136e95/r/e/real_madrid_2011_2012_v13659_retrofootball.jpg",
      brand: "ADIDAS",
      price: 99.99,
      quantity: 2,
    },
  ];
  return (
    <aside className="w-[33%] h-screen float-end bg-gray-200 fixed right-0 top-0 z-10 p-4 max-sm:w-full overflow-auto">
      <div className="flex justify-between items-center border-b-2 border-b-gray-900 mb-6 py-2">
        <h1 className="font-bold text-gray-900 text-xl">Your Cart</h1>
        <button onClick={onClose}>x</button>
      </div>
      <div className="flex flex-col gap-2">
        {products.map((product, index) => (
          <div className="grid grid-cols-5 bg-white p-2 rounded-md" key={index}>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-fill "
              />
            </div>
            <div className="col-span-2 flex justify-center items-center gap-1">
              <div className="text-gray-800 font-extrabold text-sm">
                {product.quantity}
              </div>
              <p className="font-semibold text-gray-600">x</p>
              <div>
                <h2 className="font-bold text-gray-950 text-sm">
                  {product.name}
                </h2>
                <p className="font-semibold text-gray-400 text-sm">
                  {product.brand}
                </p>
              </div>
            </div>
            <div className="text-center self-center">
              <p className="font-light text-lg">${product.price}</p>
            </div>
            <div className="col-auto text-center self-center">
              <button>x</button>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center absolute bottom-0 border-t-2 border-t-gray-900 w-full py-2 mt-2">
        <h1>Total</h1>
        <p>$99999</p>
      </div>
    </aside>
  );
}
