import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
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
  ],
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (filtered) => filtered.name !== action.payload.name
      );
    },
  },
});

export const { deleteProduct } = shoppingSlice.actions;
export default shoppingSlice.reducer;
