import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function MainLayout() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language;

  return (
    <div>
      <header className="hidden md:block h-16 bg-gray-200">
        <div className="flex justify-between con_v h-full items-center">
          <select 
            onChange={changeLanguage} 
            value={currentLang} 
            className="select"
          >
            <option disabled={true} value="">
              {t('nav_select_lang')}
            </option>
            <option value="uz">{t('lang_uz')}</option> 
            <option value="ru">{t('lang_ru')}</option>
            <option value="en">{t('lang_en')}</option>
          </select>
          <div className="flex gap-3">
            <a
              href="https://t.me/iminov_x"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:bg-blue-400 hover:text-white"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </header>
      
      <nav className="h-24 sticky top-0 bg-base-100 z-100 transition-all duration-300">
        <div className="flex justify-center md:justify-between con_v h-full items-center">          
          {/* <img src="logo.png" /> */}
          <h1 className="text-blue-700 font-bold text-2xl md:text-4xl">NEW MATERIALS DIVISION</h1>
          <div className="hidden md:flex gap-3 h-full items-center">
            <Link to={"/"} className="h-20 w-20 flex justify-center items-center bg-blue-400">
              <i className="fa-solid fa-home text-3xl text-white"></i>
            </Link>
            <Link to={"/products"} className="hover:text-white transition-all duration-300 hover:bg-blue-400 h-14 px-2 flex items-center">
              <span className="text-lg font-semibold ">
                {t('nav_products')}
              </span>
            </Link>
            <Link to={"/about"} className="hover:text-white transition-all duration-300 hover:bg-blue-400 h-14 px-2 flex items-center">
              <span className="text-lg font-semibold">
                {t('nav_about')}
              </span>
            </Link>
            <Link to={"/contact"} className="hover:text-white transition-all duration-300 hover:bg-blue-400 h-14 px-2 flex items-center">
              <span className="text-lg font-semibold">
                {t('nav_contact')}
              </span>
            </Link>
          </div>
          
          <div className="w-[90vw] sm:w-[80vw] md:hidden h-[70px] bg-blue-700 absolute top-20 flex items-center justify-between px-3 gap-1">
            <div
              className="text-white bg-blue-400 h-10 w-14 flex justify-center items-center"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <dialog id="my_modal_2" className="modal tran">
                <div className="w-[300px] max-w-[100vw] absolute h-screen bg-black right-0">
                  <form
                    method="dialog"
                    id="dialog_form"
                    className="bg-white rounded-full absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black"
                  >
                    <button className="fa-solid fa-xmark" id="back_btn"></button>
                  </form>
                  {/* <img src="logo.png" className="mt-9 mx-auto" /> */}
                  <h1 className="text-blue-700 font-bold text-4xl mt-9 mx-auto pl-8">NMD</h1>
                  <nav className="flex flex-col mt-10">
                    <Link to={"/"} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold transition-all duration-300 hover:text-blue-400">
                        {t('nav_home')}
                      </span>
                    </Link>
                    <Link to={"/products"} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold transition-all duration-300 hover:text-blue-400">
                        {t('nav_products')}
                      </span>
                    </Link>
                    <Link to={"/about"} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold transition-all duration-300 hover:text-blue-400">
                        {t('nav_about')}
                      </span>
                    </Link>
                    <Link to={"/contact"} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold transition-all duration-300 hover:text-blue-400">
                        {t('nav_contact')}
                      </span>
                    </Link>
                  </nav>
                  <div className="flex gap-3 mt-10 justify-center"><a
                      href="https://t.me/iminov_x"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 text-black"
                    >
                      <i className="fa-brands fa-telegram"></i>
                    </a></div>
                  <select 
                    onChange={changeLanguage} 
                    value={currentLang} 
                    className="select my-6 text-black w-[90%] ml-[5%]"
                  >
                    <option disabled={true} value="">
                      {t('nav_select_lang')}
                    </option>
                    <option value="uz">{t('lang_uz')}</option>
                    <option value="ru">{t('lang_ru')}</option>
                    <option value="en">{t('lang_en')}</option>
                  </select>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <i className="fa-solid fa-bars text-2xl"></i>
            </div>
            <label className="input">
              <input type="search" className="grow" placeholder="Search" />
            </label>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;