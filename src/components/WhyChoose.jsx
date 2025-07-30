import arrow from "../assets/icons/Arrow.svg";

export default function WhyChoose() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-20 align-middle lg:flex-row lg:gap-20">
      <h2 className="text-2xl font-bold mr-25 lg:mr-0">
        Why <br /> Choosing Us
      </h2>
      <div className="flex flex-col gap-2 max-w-60">
        <h3 className="font-bold">Luxury facilities</h3>
        <p className="text-xs leading-5">
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
        <a
          src=""
          className="flex items-center text-xs text-[#F57E00] cursor-pointer"
        >
          More Info <img src={arrow} alt="" />
        </a>
      </div>
      <div className="flex flex-col gap-2 max-w-60">
        <h3 className="font-bold">Affordable Price</h3>
        <p className="text-xs leading-5">
          You can get a workspace of the highst quality at an affordable price
          and still enjoy the facilities that are oly here.
        </p>
        <a
          src=""
          className="flex items-center text-xs text-[#F57E00] cursor-pointer"
        >
          More Info <img src={arrow} alt="" />
        </a>
      </div>
      <div className="flex flex-col gap-2 max-w-60">
        <h3 className="font-bold">Many Choices</h3>
        <p className="text-xs leading-5">
          We provide many unique work space choices so that you can choose the
          workspace to your liking.
        </p>
        <a
          src=""
          className="flex items-center text-xs text-[#F57E00] cursor-pointer"
        >
          More Info <img src={arrow} alt="" />
        </a>
      </div>
    </section>
  );
}
