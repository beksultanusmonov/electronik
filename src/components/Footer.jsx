import React from 'react'

export default function Footer() {
  return (
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
  )
}
