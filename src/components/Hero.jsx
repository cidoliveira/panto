import shoppingBagIcon from "../assets/icons/Bag.svg";
import heroBackground from "../assets/img/hero_background.jpg";

export default function Hero() {
  return (
    <div
      className="relative text-white h-[100vh]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 20%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray",
      }}
    >
      <header className="py-5 px-5 sm:py-15 sm:px-10 lg:px-40 flex items-center justify-between ">
        <span className="font-bold text-2xl">Panto</span>
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
      <section className="mt-15  mb-4 lg:mx-20 xl:mx-40 2xl:mx-120">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-5 lg:mb-10 mx-10 whitespace-nowrap">
          Make your interior more <br /> minimalistic & modern
        </h1>
        <p className="text-center text-2xs sm:mx-30 md:mx-40 md:text-xl lg:text-2xl whitespace-nowrap ">
          Turn your room with panto into a lot br more <br /> minimalist and
          modern with ease and speed
        </p>
      </section>
    </div>
  );
}
