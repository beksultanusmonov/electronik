import React from "react";

const cards = [
  {
    title: "Resurslar yuklab olish",
    img: "service1.png",
  },
  {
    title: "Mahsulotni sertifikatlash",
    img: "service2.png",
  },
  {
    title: "Mahsulot to'xtatish va amalga oshirish",
    img: "service3.png",
  },
  {
    title: "Mahsulotning muvofiqligi",
    img: "service4.png",
  },
  {
    title: "Boshqaruv tizimi sertifikatlari",
    img: "service5.png",
  },
  {
    title: "Mahsulot bilan bog'liq standartlar",
    img: "service6.png",
  },
];

function Services() {
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
          Xizmatlar va qo'llab-quvvatlash
        </h1>
        <p className="text-xl text-center font-semibold my-10">
          30 yildan ko'proq vaqt oldin Hongfa birinchi tashkil etilganidan beri
          biz har doim "birinchi navbatda mijoz" xizmat ko'rsatish tamoyiliga
          amal qildik.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {cards.map((item, i) => (
            <div
              key={i}
              className="border-2 border-gray-300 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md  hover:bg-blue-800 cursor-pointer tran"
            >
              <div className="w-28 h-28 rounded-full flex items-center justify-center mb-4 border-6 border-gray-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 p-6 my-10">
          {/* 1. Tez javoblar */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services1.png"
              alt="Tez javoblar"
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              Tez javoblar
            </h3>
            <p className="text-sm text-gray-700">
              Tez va moslashuvchan javob; Mijozlarning muammolariga 24*7 yechim
            </p>
          </div>

          {/* 2. Ko'p kanalli, to'liq qamrov */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services2.png"
              alt="Ko'p kanalli"
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              Ko'p kanalli, to'liq qamrov
            </h3>
            <p className="text-sm text-gray-700">Mahalliy va chet elda</p>
          </div>

          {/* 3. Texnik xizmat */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services3.png"
              alt="Texnik xizmat"
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              Texnik xizmat
            </h3>
            <p className="text-sm text-gray-700">
              Mahsulot yechimlari bo'yicha professional va samarali texnik
              maslahat
            </p>
          </div>

          {/* 4. Shikoyat va takliflar */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 w-full md:w-[22%] tran hover:scale-105 cursor-pointer hover:border-b-black hover:border-b">
            <img
              src="services4.png"
              alt="Shikoyat va takliflar"
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              Shikoyat va takliflar
            </h3>
            <p className="text-sm text-gray-700">
              Tez javob va samarali jarayon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
