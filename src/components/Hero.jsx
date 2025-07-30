import shoppingBagIcon from "../assets/icons/Bag.svg";
import heroBackground from "../assets/img/hero_background.jpg";

export default function Hero() {
  return (
    <div
      className="relative text-white h-[80vh] sm:h-[120vh]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 20%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray",
      }}
    >
      <header className="flex items-center justify-between px-5 py-5 sm:py-15 sm:px-10 lg:px-60 ">
        <span className="text-2xl font-bold">Panto</span>
        <div className="hidden sm:flex sm:gap-5 md:gap-10 lg:gap-15">
          <a className="hover:invert" href="">
            Furniture
          </a>
          <a className="hover:invert" href="">
            Shop
          </a>
          <a className="hover:invert" href="">
            About Us
          </a>
          <a className="hover:invert" href="">
            Contact
          </a>
        </div>
        <img
          src={shoppingBagIcon}
          alt="Shopping Bag Icon"
          className="cursor-pointer"
        />
      </header>
      <section className="flex flex-col justify-center mb-4 lg:mx-20 xl:mx-40 2xl:mx-120">
        <h1 className="flex justify-center mx-10 my-5 text-2xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl lg:mb-10 whitespace-nowrap ">
          Make your interior more <br /> minimalistic & modern
        </h1>
        <p className="flex justify-center text-center text-2xs sm:mx-30 md:mx-40 md:text-xl lg:text-2xl whitespace-nowrap">
          Turn your room with panto into a lot more <br /> minimalist and modern
          with ease and speed
        </p>
      </section>
    </div>
  );
}
