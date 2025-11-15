import React from 'react'

const news = [
  {day: 11, mon: 'Sep', text: "Xongfaning 2025 yilgi oraliq hisobotidan asosiy tushunchalar", img: 'https://source.hongfa.com//Uploads//cafff8589b8145d497282191a990c3ed.jpg'},
  {day: 27, mon: 'Aug', text: "Xunfaga Yevropaning 21 davlati va xalqaro tashkilotlardan diplomatlar tashrif buyurishdi", img: 'https://source.hongfa.com//Uploads//06898f51f3464992989058957d3716e8.jpg'},
  {day: 10, mon: 'Iyul', text: "Hongfa avtomobil relelari uchun milliy standartni ishlab chiqishda yetakchilik qilmoqda", img: 'https://source.hongfa.com//Uploads//06898f51f3464992989058957d3716e8.jpg'},
  {day: 10, mon: 'Iyul', text: "Hongfa yana bir bor Huawei guruhining eng yuqori sifatli yetkazib beruvchi mukofotini qolga kiritdi", img: 'https://source.hongfa.com//Uploads//2892bde4276140bb8ac065e71efe2c93.jpg'},
  {day: 10, mon: 'Iyul', text: "Hongfa Intelligent Manufacturing yangi sanoat ekotizimini boshqaradi va birgalikda yaxshi uylar uchun kelajak mezonini quradi!", img: 'https://source.hongfa.com//Uploads//e4130ebfe4094b378055491b48d0f393.jpg'},
  {day: 26, mon: 'Iyun', text: "Tovar qiymati 13,87 milliard dollar! HONGFA 2025 Xitoy brendi qiymatini baholash ma'lumotlari ro'yxatida o'rin egallaydi", img: 'https://source.hongfa.com//Uploads//c892b9e17ce84336a4b81a5e6e0ddd09.jpg'},
]

function News() {
  return (
    <div className='flex py-18 gap-3 mx-auto flex-col max-w-[94vw] w-[900px]'>
      {news.map(data => {
        return <div key={data.text} className="w-full rounded-xs shadow-xl bg-white relative">
        <img src={data.img} className='z-10' />
        <div className="flex w-18 h-18 justify-center items-center flex-col bg-cyan-600 ml-10 text-white my-4">
          <h1 className='text-2xl font-bold'>{data.day}</h1>
          <h2 className='text-1xl font-semibold'>{data.mon}</h2>
        </div>
        <p className='ml-10 font-semibold text-xl mb-10'>{data.text}</p>
      </div>
      })}      
    </div>
  )
}

export default News
