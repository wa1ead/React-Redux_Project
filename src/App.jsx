import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import BestSellers from "./components/BestSellers";
export default function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Main />
      <BestSellers />
      <Footer />
    </>
  );
}
