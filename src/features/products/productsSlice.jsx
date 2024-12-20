import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shirts: [
    {
      name: "ITALY 2006 World Cup",
      image:
        "https://www.le7sorelle.it/94228-large_default/2006-Home-Italy-shirt-Puma-Totti-10.jpg",
      brand: "PUMA",
      price: 79.99,
    },
    {
      name: "ARSENAL 03/04 SHIRT",
      image:
        "https://maniacstore.in/cdn/shop/files/Screenshot-2024-06-03-00-08-09-59_40deb401b9ffe8e1df2f1cc5ba480b12_2.jpg?v=1717353661",
      brand: "NIKE",
      price: 59.99,
    },
    {
      name: "CELTIC 08/09 SHIRT",
      image:
        "https://www.vintagefootballshirts.com/cdn/shop/files/2008-09-celtic-nike-home-shirt-64607-1.jpg?v=1730189760&width=800",
      brand: "NIKE",
      price: 29.99,
    },
    {
      name: "REAL MADRID 11/12 SHIRT",
      image:
        "https://www.retrofootball.co.uk/media/catalog/product/cache/8/small_image/280x/9df78eab33525d08d6e5fb8d27136e95/r/e/real_madrid_2011_2012_v13659_retrofootball.jpg",
      brand: "ADIDAS",
      price: 99.99,
    },
    {
      name: "AC MILAN 06/07 SHIRT",
      image:
        "https://premierretros.co.uk/wp-content/uploads/2022/03/0206065C-4525-44C9-9C20-CA94C12D14A0-scaled.jpeg",
      brand: "ADIDAS",
      price: 89.99,
    },
    {
      name: "FC BARCELONA 08/09 SHIRT",
      image:
        "https://footballshirtcollective.com/cdn/shop/files/2008-09-barcelona-vintage-nike-home-football-shirt-xxl-42477592609015_5000x.jpg?v=1713967099",
      brand: "NIKE",
      price: 19.99,
    },
    {
      name: "MAN UNITED 98/99 SHIRT",
      image:
        "https://i0.wp.com/classicscollectivestore.com/wp-content/uploads/2021/11/9899MANUHOME.png?fit=800%2C800&ssl=1",
      brand: "UMBRO",
      price: 69.99,
    },
    {
      name: "RAJA CA 03/04 SHIRT",
      image:
        "https://classicfootballshirts.co.uk/pub/media/catalog/product/t/3/t35266490-1_mibc3mssb5dui1cm.jpg",
      brand: "KAPPA",
      price: 99.99,
    },
  ],
};

const productsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
