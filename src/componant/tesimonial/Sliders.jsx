import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext } from "react";
import myContext from "../../context/data/myContext";

function Sliders() {
  const context = useContext(myContext);
  const { mode } = context;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="text-gray-600 body-font mb-10">
      <div className="container px-5 md:py-5  mx-auto  ">
        <h1
          className=" text-center text-3xl font-bold text-black"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Testimonial
        </h1>
        <h2
          className=" text-center text-2xl font-semibold mb-10"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          What our <span className=" text-pink-500">customers</span> are saying
        </h2>
        <Slider {...settings}>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center flex flex-wrap">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://ecommerce-sk.vercel.app/img/kamal.png"
              />
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="leading-relaxed"
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
              <h2
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
              >
                Kamal Nayan Upadhyay
              </h2>
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="text-gray-500"
              >
                Senior Product Designer
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
              />
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="leading-relaxed"
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
              <h2
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
              >
                React Js
              </h2>
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="text-gray-500"
              >
                UI Develeoper
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://webknudocs.vercel.app/logo/react.png"
              />
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="leading-relaxed"
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
              <h2
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
              >
                React Js
              </h2>
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="text-gray-500"
              >
                CTO
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Sliders;
