import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function MainLayout() {
  return (
    <div>
      <header className="hidden md:block h-16 bg-gray-200">
        <div className="flex justify-between con_v h-full items-center">
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>
              <i className="fa-solid fa-globe"></i> Tilni tanlang
            </option>
            <option>O'zbek tili</option>
            <option>Rus tili</option>
            <option>Ingliz tili</option>
            <option>Turk tili</option>
          </select>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:bg-blue-400 hover:text-white"
            >
              <i className="fa-brands fa-facebook "></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:bg-blue-400 hover:text-white"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:bg-blue-400 hover:text-white"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:bg-blue-400 hover:text-white"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:bg-blue-400 hover:text-white"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </header>
      <nav className="h-24 sticky top-0 bg-base-100 z-100 transition-all duration-300">
        <div className="flex justify-center md:justify-between con_v h-full items-center">
          <img src="logo.png" />
          <div className="hidden md:flex gap-3 h-full items-center">
            <Link to={'/'}
              className="h-20 w-20 flex justify-center items-center bg-blue-400"
            >
              <i className="fa-solid fa-home text-3xl text-white"></i>
            </Link>
            <Link to={'/products'}>
              <span className="text-lg font-semibold transition-all duration-300 hover:text-blue-400">
                Mahsulotlar
              </span>
            </Link>
            <Link to={'/news'}>
              <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                Yangiliklar
              </span>
            </Link>
            <Link to={'/services'}>
              <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                Xizmatlar
              </span>
            </Link>
            <Link to={'/about'}>
              <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                Biz haqimizda
              </span>
            </Link>
            <Link to={'/contact'}>
              <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                Aloqa
              </span>
            </Link>
          </div>
          <div className="w-[90vw] sm:w-[80vw] md:hidden h-[70px] bg-blue-700 absolute top-20 flex items-center justify-between px-3 gap-1">
            <a
              href="#"
              className="text-white bg-blue-400 h-10 w-14 flex justify-center items-center"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <dialog id="my_modal_2" className="modal ">
                <div className="w-[300px] max-w-[100vw] absolute h-screen bg-black right-0">
                  <form method="dialog" className="bg-white rounded-full absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black">
                    <button className="fa-solid fa-xmark"></button>
                  </form>
                  <img src="logo.png" className="mt-9 mx-auto" />
                  <nav className="flex flex-col mt-10">
                    <Link to={'/'} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                        Bosh sahifa
                      </span>
                    </Link>
                    <Link to={'/products'} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                        Mahsulotlar
                      </span>
                    </Link>
                    <Link to={'/news'} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                        Yangiliklar
                      </span>
                    </Link>
                    <Link to={'/services'} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                        Xizmatlar
                      </span>
                    </Link>
                    <Link to={'/about'} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                        Biz haqimizda
                      </span>
                    </Link>
                    <Link to={'/contact'} className="border-b border-gray-600 h-10 pl-5">
                      <span className="text-lg font-semibold  transition-all duration-300 hover:text-blue-400">
                        Aloqa
                      </span>
                    </Link>
                  </nav>
                  <div className="flex gap-3 mt-10 justify-center">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 text-black"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 text-black"
                    >
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 text-black"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 text-black"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 text-black"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <i className="fa-solid fa-bars text-2xl"></i>
            </a>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
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
