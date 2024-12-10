import { useSelector, useDispatch } from "react-redux";

export default function BestSellers() {
  //IMPORTING THE PRODUCTS STATE FROM THE PRODUCTS SLICE
  const { shirts } = useSelector((state) => state.products);
  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-gray-950 font-semibold text-2xl">Best Sellers</h1>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {shirts.map((shirt, index) => (
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt={shirt.name}
                  class="object-fill object-center w-full h-full block"
                  src={shirt.image}
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {shirt.brand}
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {shirt.name}
                </h2>
                <p class="mt-1">${shirt.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
