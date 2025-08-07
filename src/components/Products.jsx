import Slider from "react-slick";

import chair1 from "../assets/img/products/sakarias-armchair-black-sporda-dark-gray__0729767_pe737131_s5_adobespark.png";
import chair2 from "../assets/img/products/chair2.png";
import chair3 from "../assets/img/products/chair3.png";
import chair4 from "../assets/img/products/chair4.png";
import chair5 from "../assets/img/products/3d-furniture-modern-leather-single-chair-isolated-white-background-decoration-design-dining.png";
import chair6 from "../assets/img/products/furniture.png";
import chair7 from "../assets/img/products/furniture (1).png";

import { useState } from "react";

export default function Products() {
  const [chairState, setChairState] = useState(true);
  const [bedsState, setBedsState] = useState(false);
  const [sofaState, setSofaState] = useState(false);
  const [lampState, setLampState] = useState(false);

  const activeTabKey = chairState
    ? "chairs"
    : bedsState
    ? "beds"
    : sofaState
    ? "sofas"
    : "lamps";

  const productsChairs = [
    {
      productImage: chair1,
      productClass: "Chair",
      productName: "Sakarias Armchair",
      productPrice: 392,
    },
    {
      productImage: chair2,
      productClass: "Chair",
      productName: "Baltsar Chair",
      productPrice: 299,
    },
    {
      productImage: chair3,
      productClass: "Chair",
      productName: "Anjay Chair",
      productPrice: 519,
    },
    {
      productImage: chair4,
      productClass: "Chair",
      productName: "Nyantuy Chair",
      productPrice: 921,
    },
    {
      productImage: chair5,
      productClass: "Chair",
      productName: "Leather Chair",
      productPrice: 425,
    },
    {
      productImage: chair6,
      productClass: "Chair",
      productName: "Bolo Chair",
      productPrice: 582,
    },
    {
      productImage: chair7,
      productClass: "Chair",
      productName: "Furnu Chair",
      productPrice: 245,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          nextArrow: <SlickArrowRight />,
          prevArrow: <SlickArrowLeft />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SlickArrowRight />,
          prevArrow: <SlickArrowLeft />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col items-center bg-[#F7F7F7] gap-8 w-full overflow-hidden pt-10 pb-20">
      <h2 className="mx-4 mt-10 text-3xl font-bold text-center sm:text-4xl">
        Best Selling Products
      </h2>
      <div className="flex bg-[#EEEEEE] rounded-full p-2 gap-2">
        <button
          style={chairState ? { background: "white" } : { background: "none" }}
          className="px-5 py-1 rounded-full"
          onClick={() => {
            setChairState(true);
            setBedsState(false);
            setSofaState(false);
            setLampState(false);
          }}
        >
          Chair
        </button>
        <button
          style={bedsState ? { background: "white" } : { background: "none" }}
          className="px-5 py-1 rounded-full"
          onClick={() => {
            setChairState(false);
            setBedsState(true);
            setSofaState(false);
            setLampState(false);
          }}
        >
          Beds
        </button>
        <button
          style={sofaState ? { background: "white" } : { background: "none" }}
          className="px-5 py-1 rounded-full"
          onClick={() => {
            setChairState(false);
            setBedsState(false);
            setSofaState(true);
            setLampState(false);
          }}
        >
          Sofa
        </button>
        <button
          style={lampState ? { background: "white" } : { background: "none" }}
          className="px-5 py-1 rounded-full"
          onClick={() => {
            setChairState(false);
            setBedsState(false);
            setSofaState(false);
            setLampState(true);
          }}
        >
          Lamp
        </button>
      </div>
      <div className="flex justify-center w-full px-2">
        <div className="w-full max-w-6xl px-10">
          <Slider key={activeTabKey} {...settings}>
            {chairState &&
              productsChairs.map((props, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center px-2 mb-10"
                >
                  <div className="bg-gradient-to-t from-[#FAFAFA] to-transparent rounded-t-3xl w-full max-w-55 mx-auto">
                    <img
                      className="object-contain w-full h-40 p-4 mx-auto sm:h-48 md:h-56 lg:h-60 sm:p-5"
                      src={props.productImage}
                      alt={props.productName}
                    />
                    <div className="flex flex-col p-4 sm:p-5 bg-white rounded-b-3xl w-full font-[Inter]">
                      <span className="text-xs text-[#8D8D8D]">
                        {props.productClass}
                      </span>
                      <h3 className="mt-1 text-base font-semibold sm:text-lg">
                        {props.productName}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="pb-2 text-base font-semibold sm:text-lg">
                          ${props.productPrice}
                        </span>
                        <button className="bg-[#0D1B39] text-white px-3 py-1 flex items-center rounded-full text-xl cursor-pointer hover:invert">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function SlickArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        borderRadius: "50%",
        zIndex: 2,
      }}
      onClick={onClick}
      aria-label="Previous"
    ></button>
  );
}

function SlickArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        borderRadius: "50%",

        zIndex: 2,
      }}
      onClick={onClick}
      aria-label="Next"
    ></button>
  );
}
