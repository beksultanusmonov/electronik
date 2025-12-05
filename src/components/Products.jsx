import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const products = [
  { titleKey: "mm_metr", img: "detal.png", more: "ONIX(52164287 52164288)", size: "1700x700", weight: "1600", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "ONIX(26299502)", size: "1700x1250", weight: "1600", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "ONIX(51164561)", size: "1850x1250", weight: "1850", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "ONIX(26212432)", size: "780x720", weight: "1100", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "540x520", weight: "1000", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "400x270", weight: "1000", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "370x220", weight: "1000", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "270x100", weight: "1000", title: "product_felt"},
  { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "1700x1600", weight: "2000", title: "product_felt"},
];

function Products() {
  const { t } = useTranslation();
  const [select, setSelect] = useState({})

  return (
    <>
      <div className="flex py-18 gap-3 mx-auto flex-col max-w-[94vw] w-[900px]">
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <img src="../detal.png" className="w-[70%] mx-auto" />
              <h1 className="border max-sm:text-xl text-3xl py-2 px-1 text-center rounded-2xl">{`${t(select.title)} ${select.more} ${select.size} ${t(select.titleKey)}, ${select.weight}g/m2`}</h1>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        <h1 className="text-2xl font-bold">{t('products_related_products')}</h1>
        <div className="w-full flex flex-wrap gap-x-10 gap-y-20 justify-center">
          {products.map((data) => {
            return (
              <div
                key={data.size}
                className="w-[420px] py-5 px-2 relative border border-blue-800 group z-10"
                onClick={()=>{document.getElementById('my_modal_3').showModal(), setSelect(data)}}
              >
                <img
                  src={data.img}
                  className="tran group-hover:scale-120 z-20 max-h-[280px] mx-auto"
                />
                <div className="absolute w-[90%] shadow-md z-30 h-18 border-b-2 border-b-cyan-500 flex items-center">
                  <div className="w-[20%] bg-blue-900 h-full flex items-center justify-center">
                    <i className="fa-solid fa-sheet-plastic text-white text-3xl"></i>
                  </div>
                  <div className="w-[80%] h-full bg-white flex items-center pl-5 font-semibold text-xl">
                    <h2>{`${t(data.title)} ${data.more}`}</h2>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </>
  );
}

export default Products;