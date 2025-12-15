import React from "react";
import { useTranslation } from "react-i18next";

// const products = [
//   { titleKey: "mm_metr", img: "detal.png", more: "ONIX(52164287 52164288)", size: "1700x700", weight: "1600", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "ONIX(26299502)", size: "1700x1250", weight: "1600", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "ONIX(51164561)", size: "1850x1250", weight: "1850", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "ONIX(26212432)", size: "780x720", weight: "1100", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "540x520", weight: "1000", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "400x270", weight: "1000", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "370x220", weight: "1000", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "270x100", weight: "1000", title: "product_felt"},
//   { titleKey: "mm_metr", img: "detal.png", more: "KIA SONET (84260-CC000WK)", size: "1700x1600", weight: "2000", title: "product_felt"},
// ];

function Products() {
  const { t } = useTranslation();
  // const [select, setSelect] = useState({})

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
        <h1 className="text-2xl font-bold">{t('products_related_products')}</h1>
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
                {t(data.title)} <br /> {t(data.more)}
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