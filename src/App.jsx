import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import BestSellers from "./components/BestSellers";
import PopularLeagues from "./components/PopularLeagues";
import PopularBrands from "./PopularBrands";
import ShoppingCart from "./components/ShoppingCart";
export default function App() {
  return (
    <>
      <ShoppingCart />
      <Header />
      <Carousel />
      <Main />
      <BestSellers />
      <PopularLeagues />
      <PopularBrands />
      <Footer />
    </>
  );
}
