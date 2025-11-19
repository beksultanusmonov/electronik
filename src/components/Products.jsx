import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  { titleKey: "products_power_relay", img: "product1.png" },
  { titleKey: "products_auto_relay", img: "product2.png" },
  { titleKey: "products_hv_dc_relay", img: "product3.png" },
  { titleKey: "products_latching_relay", img: "product4.png" },
  { titleKey: "products_signal_relay", img: "product5.png" },
  { titleKey: "products_hf_relay", img: "product6.png" },
  { titleKey: "products_reed_relay", img: "product7.png" },
  { titleKey: "products_industrial_relay", img: "product8.png" },
  { titleKey: "products_ssr", img: "product9.png" },
  { titleKey: "products_relay_socket", img: "products10.png" },
  { titleKey: "products_relay_module", img: "products11.png" },
];

function Products() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-[40vh] relative">
        <img
          src="https://switchesplus.com.au/image/dfuqgOyuk83qQs4AERUgAA/Schrack-relays.webp"
          className="w-full h-full object-cover brightness-50 absolute top-0"
          alt=""
        />
      </div>
      <div className="flex py-18 gap-3 mx-auto flex-col max-w-[94vw] w-[900px]">
        <img src="../product-banner.png" className="w-full" />
        <div className="flex items-center gap-3">
          <hr className="h-0.5 w-10 bg-gray-700"></hr>
          <span className="font-semibold text-xl">
            {t('products_category_overview')}
          </span>
        </div>
        <h1 className="text-4xl font-bold">{t('product_relays')}</h1>
        <p className="my-10">
          {t('products_relays_desc')}
        </p>
        <h1 className="text-2xl font-bold">{t('products_related_products')}</h1>
        <div className="w-full flex flex-wrap gap-x-10 gap-y-20 justify-center">
          {products.map((data) => {
            return (
              <div
                key={data.titleKey}
                className="w-[420px] py-5 px-2 relative border border-blue-800 group z-10"
              >
                <img
                  src={data.img}
                  className="tran hover:scale-120 z-20 max-h-[280px]"
                />
                <div className="absolute w-[90%] shadow-md z-30 h-18 border-b-2 border-b-cyan-500 flex items-center">
                  <div className="w-[20%] bg-blue-900 h-full flex items-center justify-center">
                    <i class="fa-solid fa-car-battery text-white text-3xl"></i>
                  </div>
                  <div className="w-[80%] h-full bg-white flex items-center pl-5 font-semibold text-xl">
                    <h2>{t(data.titleKey)}</h2>
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