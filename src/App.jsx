import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Offers from "./components/Offers";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  return (
    <div className="max-w-[1480px] mx-auto w-full flex flex-col items-center">
      <Header></Header>
      <Services></Services>
      <Products></Products>
      <Offers></Offers>
      <div className="w-full bg-[#179800] flex flex-col items-center pt-40 md:mt-40 mt-96 relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
