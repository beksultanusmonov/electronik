import React from "react";

const products = [
  { title: "Quvvat o'rni", img: "product1.png" },
  { title: "Avtomobil releyi", img: "product2.png" },
  { title: "Yuqori kuchlanishli shahar o'rni", img: "product3.png" },
  { title: "Gulfattan releyi", img: "product4.png" },
  { title: "Signal o'rni", img: "product5.png" },
  { title: "Yuqori chastotali rele", img: "product6.png" },
  { title: "Reed reley", img: "product7.png" },
  { title: "Sanoat releyi", img: "product8.png" },
  { title: "Qattiq holat relesi", img: "product9.png" },
  { title: "Rele rozetkasi", img: "products10.png" },
  { title: "Rele moduli", img: "products11.png" },
];

function Products() {
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
            Mahsulot toifasiga umumiy nuqtai
          </span>
        </div>
        <h1 className="text-4xl font-bold">Relelar</h1>
        <p className="my-10">
          Hongfa o'rni mahsulotlariga quvvat o'rni (umumiy maqsadli o'rni),
          avtomobil o'rni, yuqori kuchlanishli shahar o'rni (DC kontaktorlari),
          qulflash o'rni, signal o'rni, sanoat o'rni va boshqalar kiradi.
          Shuningdek, biz mos keladigan o'rni rozetkalarini taqdim etamiz.
          Hongfa o'rni 160 dan ortiq seriyali, 40 000 dan ortiq umumiy
          xususiyatlarni o'z ichiga oladi, yillik ishlab chiqarish quvvati 3
          milliard donadan ortiq bo'lib, mahsulotlar UL / C-UL, VDE, TÜV, CQC va
          boshqa xavfsizlik sertifikatlari bilan sertifikatlangan.
        </p>
        <h1 className="text-2xl font-bold">Tegishli mahsulotlar</h1>
        <div className="w-full flex flex-wrap gap-x-10 gap-y-20 justify-center">
          {products.map((data) => {
            return (
              <div
                key={data.title}
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
                    <h2>{data.title}</h2>
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
