import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const products = [
  { title: "product_relays", image: "post1.png" },
  { title: "product_modules", image: "post2.png" },
  { title: "product_lv_devices", image: "post3.png" },
  { title: "product_lv_mv_devices", image: "post4.png" },
  { title: "product_connectors", image: "post5.png" },
  { title: "product_film_capacitors", image: "post6.png" },
  { title: "product_current_sensors", image: "post7.png" },
  { title: "product_fuses", image: "post8.png" },
  { title: "product_vacuum_interrupters", image: "post9.png" },
  { title: "product_automation_equipment", image: "post10.png" },
  { title: "product_others", image: "post11.png" },
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

  const newsData = [
    { day: 11, mon: t('Sep'), textKey: 'news_title_1' },
    { day: 27, mon: t('Aug'), textKey: 'news_title_2' },
    { day: 10, mon: t('Jul'), textKey: 'news_title_3' },
  ];

  return (
    <div>
      <div className="w-full h-[90vh] relative">
        {slide == 1 && (
          <div className="w-full h-full absolute too-0 right-0">
            <img
              src="robo-qol2.png"
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
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <button className="btn rounded-none mt-5 bg-blue-500 border-none px-4 py-6 uppercase">
                  {t('home_more_info')}
                </button>
              </Slide>
            </div>
          </div>
        )}
        {slide == 2 && (
          <div className="w-full h-full absolute too-0 right-0">
            <img
              src="robo-qol.png"
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
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <button className="btn rounded-none mt-5 bg-blue-500 border-none px-4 py-6 uppercase">
                  {t('home_more_info')}
                </button>
              </Slide>
            </div>
          </div>
        )}
      </div>
      <div class="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <img src="banner-1.png" alt="Contact illustration" />
            <div className="mb-6">
              <p className="text-gray-800 text-lg">
                {t('home_description')}
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2 mt-2">
                <li>
                  {t('home_chain_1')}
                </li>
                <li>
                  {t('home_chain_2')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 my-5">
        {products.map((data) => {
          return (
            <div
              key={data.title}
              className="w-[300px] h-[350px] p-3 flex flex-col justify-evenly gap-3 text-center border-b shadow-md rounded tran group relative"
            >
              <img src={data.image} className="w-[90%] mx-auto z-30" />
              <h2 className="text-xl font-bold group-hover:text-white z-30">
                {t(data.title)} {/* KALITni chaqirish */}
              </h2>
              <div className="absolute w-0 group-hover:w-full h-full z-10 right-[50%] group-hover:right-0 transition-all duration-700 bg-blue-700"></div>
              <div className="absolute w-12 z-20 h-0 group-hover:h-12 tran shadow-md bg-white flex items-center justify-center -bottom-5 right-[45%] cursor-pointer hover:bg-cyan-400">
                <i className="fa-solid fa-plus invisible group-hover:visible hover:text-white text-3xl font-bold"></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full bg-blue-800 my-6 py-18 flex flex-wrap justify-center gap-8 lg:gap-26">
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b1.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">{t('app_household')}</h5>
            <p class="mb-6 text-gray-300 text-md">
              {t('app_household_desc')}
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">{t('home_more_info')}</span>
            </a>
          </div>
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b2.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">{t('app_new_energy')}</h5>
            <p class="mb-6 text-gray-300 text-md">
              {t('app_new_energy_desc')}
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">{t('home_more_info')}</span>
            </a>
          </div>
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b3.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">{t('app_industrial')}</h5>
            <p class="mb-6 text-gray-300 text-md">
              {t('app_industrial_desc')}
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">{t('home_more_info')}</span>
            </a>
          </div>
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b4.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">{t('app_automotive')}</h5>
            <p class="mb-6 text-gray-300 text-md">
              {t('app_automotive_desc')}
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">{t('home_more_info')}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <img src="factory.png" alt="" className="max-w-[90vw]" />
      </div>
      <div className="w-full bg-blue-800 my-6 py-18 flex flex-wrap justify-center gap-6">
        <div className="w-[800px] max-w-[96vw] md:w-[45vw]">
          <img src="humans2.png" alt="" />
        </div>
        <div className="w-[800px] max-w-[96vw] md:w-[45vw]">
          <div class="w-full overflow-x-auto bg-base-100">
            <table class="table-borderless table py-8">
              <tbody>
                {newsData.map((newsItem, index) => (
                  <tr key={index}>
                    <td>
                      <div className="w-14 h-14 bg-blue-500 flex flex-col justify-center items-center text-white">
                        <h1 className="font-bold">{newsItem.day}</h1>
                        <span>{newsItem.mon}</span>
                      </div>
                    </td>
                    <td>
                      {t(newsItem.textKey)}
                    </td>
                  </tr>
                ))}
                <a
                  href="#"
                  className="flex justify-end items-center text-blue-600 w-full mt-4"
                >
                  <i class="fa-regular fa-square-plus"></i>
                  <span>{t('news_more')}</span>
                </a>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;