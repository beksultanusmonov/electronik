import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const products = [
  { title: "Relelar", image: "post1.png" },
  { title: "Ilova Elektron Modullar", image: "post2.png" },
  { title: "Past kuchlanish qurilmalari", image: "post3.png" },
  { title: "LV & MV Qurilmalar", image: "post4.png" },
  { title: "Ulagichlar", image: "post5.png" },
  { title: "Plenka Kondensatorlar", image: "post6.png" },
  { title: "Tok Sensorlar", image: "post7.png" },
  { title: "Fuzlar", image: "post8.png" },
  { title: "Vakuum to'xtatuvchilari", image: "post9.png" },
  { title: "Avtomatlashtirish uskunalari", image: "post10.png" },
  { title: "Boshqalar", image: "post11.png" },
];

const newsItems = [
  {
    date: "11 Sen",
    title: "Hongfa 2025 yil oraliq hisobotidan asosiy xulosalar",
  },
  {
    date: "27 Avg",
    title:
      "21 ta Yevropa davlatidan diplomatlar Hongfa kompaniyasiga tashrif buyurdi",
  },
  {
    date: "10 Iyul",
    title:
      "Hongfa avtomobil relelari uchun milliy standart ishlab chiqishda yetakchilik qildi",
  },
];

function Home() {
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 1 ? 2 : 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-full h-[90vh] relative">
        {slide == 1 && (
          <div className="w-full h-full absolute too-0 right-0">
            <img
              src="robo-qol2.png"
              className="w-full h-full z-10 object-cover brightness-50"
            />
            <div className="absolute w-full h-24 z-20 top-[calc(90vh/2-48px)] flex justify-between items-center px-2 md:px-10">
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-left text-xl text-white"></i>
              </button>
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-right text-xl text-white"></i>
              </button>
            </div>
            <div className="w-[90vw] left-[5vw] flex flex-col gap-2 items-center justify-center top-0 h-full absolute text-center text-white">
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <h2 className="sm:text-xl md:text-2xl font-semibold">
                  HONGFaga hush kelibsiz
                </h2>
              </Slide>
              <Slide direction="down" triggerOnce={false} fraction={0}>
                <h1 className="sm:text-4xl md:text-5xl font-bold">
                  Yetakchi reley ishlab chiqaruvchi kampaniya
                </h1>
              </Slide>
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <button className="btn rounded-none mt-5 bg-blue-500 border-none px-4 py-6 uppercase">
                  Ko'proq Malumot
                </button>
              </Slide>
            </div>
          </div>
        )}
        {slide == 2 && (
          <div className="w-full h-full absolute too-0 right-0">
            <img
              src="robo-qol.png"
              className="w-full h-full z-10 object-cover brightness-50"
            />
            <div className="absolute w-full h-24 z-20 top-[calc(90vh/2-48px)] flex justify-between items-center px-2 md:px-10">
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-left text-xl text-white"></i>
              </button>
              <button
                className="h-16 w-16 border-2 rounded-full flex items-center justify-center hover:border-blue-400 cursor-pointer tran"
                onClick={() => setSlide(slide == 1 ? 2 : 1)}
              >
                <i className="fa-solid fa-arrow-right text-xl text-white"></i>
              </button>
            </div>
            <div className="w-[90vw] left-[5vw] flex flex-col gap-2 items-center justify-center top-0 h-full absolute text-center text-white">
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <h2 className="sm:text-xl md:text-2xl font-semibold">
                  HONGFaga hush kelibsiz
                </h2>
              </Slide>
              <Slide direction="right" triggerOnce={false} fraction={0}>
                <h1 className="sm:text-4xl md:text-5xl font-bold">
                  HONGFAning rasmiy sayti yuritilmoqda{" "}
                </h1>
              </Slide>
              <Slide direction="up" triggerOnce={false} fraction={0}>
                <button className="btn rounded-none mt-5 bg-blue-500 border-none px-4 py-6 uppercase">
                  Ko'proq Malumot
                </button>
              </Slide>
            </div>
          </div>
        )}
      </div>
      <div class="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <img src="banner-1.png" alt="Contact illustration" />
            <div className="mb-6">
              <p className="text-gray-800 text-lg">
                Doimiy innovatsiyalar va yuqori sifatga intilish orqali Hongfa
                foydalanuvchilarga qoniqarli mahsulotlar va yechimlar taqdim
                etadi, hamda insonlar hayotini qulay va zamonaviy qilishga
                intiladi.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2 mt-2">
                <li>
                  Chuqur integratsiyalashgan ishlab chiqarish zanjiri yaratildi
                </li>
                <li>
                  Old va orqa sanoatlarda yadro ustunlik shakllantirildi, bu esa
                  takrorlashni qiyinlashtiradi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 my-5">
        {products.map((data) => {
          return (
            <div
              key={data.title}
              className="w-[300px] h-[350px] p-3 flex flex-col justify-evenly gap-3 text-center border-b border-blue-500 hover:bg-blue-800 shadow-md rounded tran group"
            >
              <img src={data.image} className="w-[90%] mx-auto" />
              <h2 className="text-xl font-bold group-hover:text-white">
                {data.title}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="w-full bg-blue-800 my-6 py-18 flex flex-wrap justify-center gap-8 lg:gap-26">
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b1.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">Maishiy texnika</h5>
            <p class="mb-6 text-gray-300 text-md">
              Hongfa konditsionerlar, muzlatgichlar, kir yuvish mashinalari va
              boshqa ilovalar uchun to'liq rele xususiyatlariga ega bo'lgan
              dunyoning birinchi toifali maishiy texnika brendlarini
              qo'llab-quvvatlaydi.
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">Ko'proq</span>
            </a>
          </div>
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b2.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">Yangi energiya</h5>
            <p class="mb-6 text-gray-300 text-md">
              Hongfa yuqori kuchlanishli shahar o'rni, fotovoltaik o'rni,
              kontaktorlar, elektron to'xtatuvchilari, kondensatorlar va
              fotovoltaik, shamol energiyasi, yangi energiya vositalari va
              zaryadlovchi qoziqlar uchun boshqa mahsulotlarni taqdim etadi.
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">Ko'proq</span>
            </a>
          </div>
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b3.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">Sanoat nazorati</h5>
            <p class="mb-6 text-gray-300 text-md">
              Sanoat o'rni va kontaktorlarining professional ishlab
              chiqaruvchisi sifatida Hongfa butun dunyo bo'ylab yirik sanoat
              nazorati va avtomatlashtirish kompaniyalari uchun mahsulotlarni
              taqdim etadi.
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">Ko'proq</span>
            </a>
          </div>
        </div>
        <div className="w-[500px] max-w-[94vw] group">
          <figure className="w-[450px] max-w-[90vw] mx-auto overflow-hidden">
            <img
              src="h-b4.png"
              alt="Shoes"
              class="tran group-hover:scale-110 h-[300px] w-full object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h5 class="card-title mb-2.5 text-2xl">Avtomobil sanoati</h5>
            <p class="mb-6 text-gray-300 text-md">
              Hongfa jahonga mashhur OEM va Tier1 yetkazib beruvchilari bilan
              barqaror munosabatlarni saqlab turadi. Hongfa avtomobil o'rni,
              yuqori kuchlanishli shahar o'rni, BCM, BDU, PDU, kislorod
              sensorlari bilan ta'minlaydi.
            </p>
            <a href="" className="flex items-center">
              <i class="fa-solid fa-circle-arrow-right text-3xl"></i>
              <span className="text-2xl">Ko'proq</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <img src="factory.png" alt="" className="max-w-[90vw]" />
      </div>
      <div className="w-full bg-blue-800 my-6 py-18 flex flex-wrap justify-center gap-6">
        <div className="w-[800px] max-w-[96vw] md:w-[45vw]">
          <img src="humans2.png" alt="" />
        </div>
        <div className="w-[800px] max-w-[96vw] md:w-[45vw]">
          <div class="w-full overflow-x-auto bg-base-100">
            <table class="table-borderless table py-8">
              <tbody>
                <tr>
                  <td>
                    <div className="w-14 h-14 bg-blue-500 flex flex-col justify-center items-center text-white">
                      <h1 className="font-bold">11</h1>
                      <span>Sep</span>
                    </div>
                  </td>
                  <td>
                    Xongfaning 2025 yilgi oraliq hisobotidan asosiy tushunchalar
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-14 h-14 bg-blue-500 flex flex-col justify-center items-center text-white">
                      <h1 className="font-bold">27</h1>
                      <span>Aug</span>
                    </div>
                  </td>
                  <td>
                    Xunfaga Yevropaning 21 davlati va xalqaro tashkilotlardan
                    diplomatlar tashrif buyurishdi
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-14 h-14 bg-blue-500 flex flex-col justify-center items-center text-white">
                      <h1 className="font-bold">10</h1>
                      <span>Jul</span>
                    </div>
                  </td>
                  <td>
                    Hongfa avtomobil relelari uchun milliy standartni ishlab
                    chiqishda yetakchilik qilmoqda
                  </td>
                </tr>
                <a
                  href="#"
                  className="flex justify-end items-center text-blue-600 w-full mt-4"
                >
                  <i class="fa-regular fa-square-plus"></i>
                  <span>Koproq</span>
                </a>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="bg-[#0B1B3B] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 1️⃣ Korporativ info */}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-red-600 font-extrabold">HF</span> HONGFA
            </h1>
            <p className="text-sm text-gray-300">Korporativ shtab-kvartirasi</p>
            <p className="font-semibold">
              Xiamen Hongfa Electroacoustic Co., Ltd.
            </p>
            <p className="text-sm flex items-center gap-1">
              <span>📧</span> marketing@hongfa.com
            </p>
            <p className="text-sm flex items-center gap-1">
              <span>📍</span> NO.90-101, Sunban South Rd., Jimei North Ind.
              Dist., Xiamen 361021, Xitoy
            </p>
          </div>

          {/* 2️⃣ Mahsulot va xizmatlar */}
          <div>
            <h2 className="font-semibold mb-3">Mahsulot Va Xizmatlar</h2>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>Mahsulot tanlovchilari</li>
              <li>Resurslar yuklab olish</li>
              <li>Mahsulotni to'xtatish va almashtirish</li>
              <li>Mahsulotning muvofiqligi</li>
              <li>Yechimlar</li>
              <li>Mahsulot bilan bog'liq standartlar</li>
            </ul>
          </div>

          {/* 3️⃣ HONGFA haqida */}
          <div>
            <h2 className="font-semibold mb-3">HONGFA Haqida</h2>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>HONGFAga kirish</li>
              <li>Karyera</li>
              <li>Ishlab chiqarish bazasi</li>
              <li>Sayt xaritasi</li>
              <li>Marketing tarmog'i</li>
              <li>Maxfiylik bayonoti</li>
            </ul>
          </div>

          {/* 4️⃣ Bizning fabrikalarimiz */}
          <div>
            <h2 className="font-semibold mb-3">Bizning Fabrikalarimiz</h2>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-16 bg-gray-500 rounded-md"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer past qismi */}
        <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>© 2025 HONGFA tomonidan Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-4">
            <a href="#">Maxfiylik siyosati</a>
            <span>|</span>
            <a href="#">Sayt xaritasi</a>
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
    </div>
  );
}

export default Home;
