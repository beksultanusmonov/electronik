import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0B1B3B] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-red-600 font-extrabold">HF</span> HONGFA
          </h1>
          <p className="text-sm text-gray-300">{t('footer_corp_hq')}</p>
          <p className="font-semibold">
            Xiamen Hongfa Electroacoustic Co., Ltd.
          </p>
          <p className="text-sm flex items-center gap-1">
            <span>📧</span> marketing@hongfa.com
          </p>
          <p className="text-sm flex items-center gap-1">
            <span>📍</span> NO.90-101, Sunban South Rd., Jimei North Ind. Dist.,
            Xiamen 361021, Xitoy
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-3">{t('footer_products_services')}</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>{t('footer_selector')}</li>
            <li>{t('footer_download')}</li>
            <li>{t('footer_discontinuation')}</li>
            <li>{t('footer_compliance')}</li>
            <li>{t('footer_solutions')}</li>
            <li>{t('footer_standards')}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-3">{t('footer_about_us')}</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>{t('card_hongfa_intro')}</li>
            <li>{t('card_career')}</li>
            <li>{t('footer_production_base')}</li>
            <li>{t('footer_sitemap')}</li>
            <li>{t('footer_marketing_network')}</li>
            <li>{t('footer_privacy_statement')}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-3">{t('footer_our_factories')}</h2>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-full h-16 bg-gray-500 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>{t('footer_copyright')}</p>
        <div className="flex gap-4">
          <a href="#">{t('footer_privacy_statement')}</a>
          <span>|</span>
          <a href="#">{t('footer_sitemap')}</a>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="#"
            className="w-8 h-8 bg-blue-700 flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-facebook "></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-blue-400 flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}