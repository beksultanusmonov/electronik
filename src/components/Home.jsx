import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const newspaper = [
  {title: "newspaper1", intro: "newsintro1"},
  {title: "newspaper2", intro: "newsintro2"},
  {title: "newspaper3", intro: "newsintro3"},
  {title: "newspaper4", intro: "newsintro4"},
  {title: "newspaper5", intro: "newsintro5"},
  {title: "newspaper6", intro: "newsintro6"},
]

function Home() {
  const { t } = useTranslation();
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 1 ? 2 : 1));
    }, 10000);

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
                  {t("home_welcome")}
                </h2>
              </Slide>
              <Slide direction="down" triggerOnce={false} fraction={0}>
                <h1 className="sm:text-4xl md:text-5xl font-bold">
                  {t("home_slogan_1")}
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
                  {t("home_welcome_2")}
                </h2>
              </Slide>
              <Slide direction="right" triggerOnce={false} fraction={0}>
                <h1 className="sm:text-4xl md:text-5xl font-bold">
                  {t("home_slogan_2")}
                </h1>
              </Slide>
            </div>
          </div>
        )}
      </div>
      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img src="kigiz.png" />
            <div className="mb-6">
              <p className="text-gray-800 text-lg">
                {t('home_data')}
              </p>
              <ul className="grid mx-auto text-heading sm:grid-cols-2">
                {newspaper.length > 0 && 
                newspaper.map((data, i) => {
                  return <li key={i}>
                  <div
                    className="block p-3 rounded-lg hover:bg-neutral-secondary-medium"
                  >
                    <div className="font-semibold flex gap-2"><span className="w-8 h-8 bg-gray-300 rounded-md flex justify-center items-centert">{i+1}</span> {t(data.title)}</div>
                    <span className="text-sm text-body">
                      {t(data.intro)}
                    </span>
                  </div>
                </li>
                })}
              </ul>                  
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-800 my-6 py-18 flex flex-wrap justify-center gap-8 lg:gap-26">
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="uskuna.png"
              className="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div className="card-body text-white">
            <h5 className="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="uskuna2.png"
              className="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div className="card-body text-white">
            <h5 className="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="uskuna3.png"
              className="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div className="card-body text-white">
            <h5 className="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="uskuna4.png"
              className="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div className="card-body text-white">
            <h5 className="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="uskuna5.png"
              className="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div className="card-body text-white">
            <h5 className="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="uskuna6.png"
              className="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          {/* <div className="card-body text-white">
            <h5 className="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
