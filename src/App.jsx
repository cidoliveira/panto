import "./App.css";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Products from "./components/Products";

function App() {
  return (
    <div className="font-[Gilroy] bg-white">
      <Hero />
      <WhyChoose />
      <Products />
    </div>
  );
}

export default App;
