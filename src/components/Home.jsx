import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const products = [
  { title: "product_felt", image: "detal.png", more: "ONIX(52164287)" },
  { title: "product_felt", image: "detal.png", more: "ONIX(52164288)" },
  { title: "product_felt_layer", image: "detal.png", more: "ONIX(52164561)"},
  { title: "product_felt_layer", image: "detal.png", more: "ONIX(26212432)"},
  { title: "product_felt_layer", image: "detal.png", more: "KIA-SONET(84260)"},
];


function Home() {
  const { t } = useTranslation();
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 1 ? 2 : 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-full h-[90vh] relative">
        {slide == 1 && (
          <div className="w-full h-full absolute too-0 right-0">
            <img
              src="building1.jpg"
              className="w-full h-full z-10 object-cover brightness-50"
            />
            <div className="absolute w-full h-24 z-20 top-[calc(90vh/2-48px)] flex justify-between items-center px-2 md:px-10">
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-left text-xl text-white"></i>
              </button>
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-right text-xl text-white"></i>
              </button>
            </div>
            <div className="w-[90vw] left-[5vw] flex flex-col gap-2 items-center justify-center top-0 h-full absolute text-center text-white">
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <h2 className="sm:text-xl md:text-2xl font-semibold">
                  {t('home_welcome')}
                </h2>
              </Slide>
              <Slide direction="down" triggerOnce={false} fraction={0}>
                <h1 className="sm:text-4xl md:text-5xl font-bold">
                  {t('home_slogan_1')}
                </h1>
              </Slide>
            </div>
          </div>
        )}
        {slide == 2 && (
          <div className="w-full h-full absolute too-0 right-0">
            <img
              src="building2.jpg"
              className="w-full h-full z-10 object-cover brightness-50"
            />
            <div className="absolute w-full h-24 z-20 top-[calc(90vh/2-48px)] flex justify-between items-center px-2 md:px-10">
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-left text-xl text-white"></i>
              </button>
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-right text-xl text-white"></i>
              </button>
            </div>
            <div className="w-[90vw] left-[5vw] flex flex-col gap-2 items-center justify-center top-0 h-full absolute text-center text-white">
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <h2 className="sm:text-xl md:text-2xl font-semibold">
                  {t('home_welcome')}
                </h2>
              </Slide>
              <Slide direction="right" triggerOnce={false} fraction={0}>
                <h1 className="sm:text-4xl md:text-5xl font-bold">
                  {t('home_slogan_2')}
                </h1>
              </Slide>
            </div>
          </div>
        )}
      </div>
      <div class="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <img src="building1.jpg" />
            <div className="mb-6">
              <p className="text-gray-800 text-lg">
                {t('home_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-30 my-5">
        {products.map((data) => {
          return (
            <Link to={'/products'}
              key={data.title}
              className="w-[300px] h-[400px] p-3 flex flex-col justify-evenly gap-3 text-center border-b shadow-md rounded tran group relative hover:cursor-pointer"
            >
              <img src={data.image} className="w-[70%] mx-auto z-30" />
              <h2 className="text-xl font-bold group-hover:text-white z-30">
                {t(data.title) + ' ' + data.more} 
              </h2>
              <div className="absolute w-0 group-hover:w-full h-full z-10 right-[50%] group-hover:right-0 transition-all duration-700 bg-blue-700"></div>
            </Link>
          );
        })}
      </div>
      <div className="w-full bg-blue-800 my-6 py-18 flex flex-wrap justify-center gap-8 lg:gap-26">
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="home1.jpg"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="home3.jpg"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="home2.jpg"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;