import React from "react";
import { useTranslation } from "react-i18next";

const cards = [
  {
    titleKey: "service_resources",
    img: "service1.png",
  },
  {
    titleKey: "service_product_cert",
    img: "service2.png",
  },
  {
    titleKey: "service_product_discon",
    img: "service3.png",
  },
  {
    titleKey: "service_product_compliance",
    img: "service4.png",
  },
  {
    titleKey: "service_management_cert",
    img: "service5.png",
  },
  {
    titleKey: "service_product_standards",
    img: "service6.png",
  },
];

function Services() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-[40vh] relative">
        <img
          src="https://www.hongfa.com/images/footer/fac6.jpg"
          className="w-full h-full object-cover brightness-50 absolute top-0"
          alt=""
        />
      </div>
      <div className="py-20 w-[1250px] max-w-[96vw] mx-auto">
        <h1 className="text-5xl text-center font-bold">
          {t('services_main_title')}
        </h1>
        <p className="text-xl text-center font-semibold my-10">
          {t('services_main_desc')}
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {cards.map((item, i) => (
            <div
              key={i}
              className="border-2 border-gray-300 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:bg-blue-800 cursor-pointer tran"
            >
              <div className="w-28 h-28 rounded-full flex items-center justify-center mb-4 border-6 border-gray-300">
                <img
                  src={item.img}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {t(item.titleKey)}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 p-6 my-10">
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services1.png"
              alt={t('services_fast_response_title')}
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              {t('services_fast_response_title')}
            </h3>
            <p className="text-sm text-gray-700">
              {t('services_fast_response_desc')}
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services2.png"
              alt={t('services_multi_channel_title')}
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              {t('services_multi_channel_title')}
            </h3>
            <p className="text-sm text-gray-700">
              {t('services_multi_channel_desc')}
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services3.png"
              alt={t('services_technical_title')}
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              {t('services_technical_title')}
            </h3>
            <p className="text-sm text-gray-700">
              {t('services_technical_desc')}
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services4.png"
              alt={t('services_complaints_title')}
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              {t('services_complaints_title')}
            </h3>
            <p className="text-sm text-gray-700">
              {t('services_complaints_desc')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;