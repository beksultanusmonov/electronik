import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white">
      <div className="w-full h-[40vh] relative mb-10">
        <img
          src="https://source.hongfa.com//Uploads/Product/Factory/Factory_d36589f3-c87f-40e3-8b2e-f549133e06e7.jpg"
          className="w-full h-full object-cover brightness-50 absolute top-0"
          alt=""
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-md">
              <img
                src="hongfa-bino.png"
                alt="HONGFA binosi"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-semibold text-xl text-blue-500">
              {t('about_title')}
            </h2>

            <div className="space-y-2 mb-6">
              <p className="text-gray-800 md:text-4xl font-medium">
                {t('about_founded')}
              </p>
              <p className="text-gray-700">
                {t('about_global_leader')}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-gray-800 font-medium md:text-2xl">
                {t('about_branches_count')}
              </p>
              <p className="text-gray-700">
                {t('about_business_scope')}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 md:text-2xl">
                {t('about_mission_title')}
              </h3>
              <p className="text-gray-700">
                {t('about_mission_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-18 flex-wrap justify-center gap-8">
        <div className="w-[400px] max-w-[94vw] flex items-center min-h-[250px] sm:border-r-2 border-gray-400">
          <img src="about1.png" className="w-[200px]" />
          <div>
            <h1 className="font-bold text-4xl sm:text-7xl">35+</h1>
            <p className="font-semibold">
              {t('stat_relay_exp')}
            </p>
          </div>
        </div>
        <div className="w-[400px] max-w-[94vw] flex items-center min-h-[250px] sm:border-r-2 border-gray-400">
          <img src="about2.png" className="w-[200px]" />
          <div>
            <h1 className="font-bold text-4xl sm:text-7xl">30+</h1>
            <p className="font-semibold">{t('stat_branches')}</p>
          </div>
        </div>
        <div className="w-[400px] max-w-[94vw] flex items-center min-h-[250px]">
          <img src="about3.png" className="w-[200px]" />
          <div>
            <h1 className="font-bold text-4xl sm:text-7xl">250+</h1>
            <p className="font-semibold">
              {t('stat_lines')}
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-200 py-5 pt-24 flex-wrap justify-center gap-8 mb-18">
        <div className="w-[400px] max-w-[96vw] bg-white py-3 px-4 border-b-2 shadow-xl border-blue-400 tran hover:bg-blue-800 hover:text-white group">
          <span className="text-xl font-bold text-blue-500 block">01</span>
          <div className="w-full flex justify-center">
            <i class="fa-solid fa-book block my-2 text-9xl mx-auto tran text-blue-800 group-hover:text-white"></i>
          </div>
          <h1 className="text-center text-2xl my-4 mb-8 font-bold">
            {t('card_hongfa_intro')}
          </h1>
        </div>
        <div className="w-[400px] max-w-[96vw] bg-white py-3 px-4 border-b-2 shadow-xl border-blue-400 tran hover:bg-blue-800 hover:text-white group">
          <span className="text-xl font-bold text-blue-500 block">02</span>
          <div className="w-full flex justify-center">
            <i class="fa-solid fa-people-group block my-2 text-9xl mx-auto tran text-blue-800 group-hover:text-white"></i>
          </div>
          <h1 className="text-center text-2xl my-4 mb-8 font-bold">{t('card_career')}</h1>
        </div>
        <div className="w-[400px] max-w-[96vw] bg-white py-3 px-4 border-b-2 shadow-xl border-blue-400 tran hover:bg-blue-800 hover:text-white group">
          <span className="text-xl font-bold text-blue-500 block">03</span>
          <div className="w-full flex justify-center">
            <i class="fa-solid fa-handshake-angle block my-2 text-9xl mx-auto tran text-blue-800 group-hover:text-white"></i>
          </div>
          <h1 className="text-center text-2xl my-4 mb-8 font-bold">
            {t('card_support')}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default About;