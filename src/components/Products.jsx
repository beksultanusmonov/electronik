import React from "react";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();

  const products = [
    { title: "product_felt", image: "product1.jpg", more: "product_down"},
    { title: "product_felt", image: "product2.jpg", more: "product_middle"},
    { title: "product_felt", image: "product3.jpg", more: "product_front"},
    { title: "product_felt", image: "product4.jpg", more: "product_door"},
    { title: "product_felt", image: "product5.jpg", more: "product_special_down"},
    { title: "product_felt", image: "product6.jpg", more: "product_special_front"},
  ];

  return (
    <>
      <div className="flex py-18 gap-3 mx-auto flex-col max-w-[94vw] w-[900px]">
        <h1 className="text-2xl font-bold uppercase">{t('product_felt')}</h1>
        <div className="flex flex-wrap justify-center gap-8 md:gap-30 my-5">
        {products.map((data, i) => {
          return (
            <div
              key={i}
              className="w-[350px] h-[400px] p-3 flex flex-col justify-evenly gap-3 text-center border-b shadow-md rounded tran group relative hover:cursor-pointer"
            >
              <img
                src={data.image}
                className="w-full mx-auto z-30 group-hover:scale-105 tran"
              />
              <h2 className="text-xl font-bold group-hover:text-white z-30">
               {t(data.more)}
              </h2>
              <div className="absolute w-0 group-hover:w-full h-full z-10 right-[50%] group-hover:right-0 transition-all duration-700 bg-blue-700"></div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default Products;