import React from "react";
import { useTranslation } from "react-i18next";

const news = [
  {
    day: 11,
    mon: 'Sep',
    textKey: "news_title_1",
    img: "https://source.hongfa.com//Uploads//cafff8589b8145d497282191a990c3ed.jpg",
  },
  {
    day: 27,
    mon: "Aug",
    textKey: "news_title_2",
    img: "https://source.hongfa.com//Uploads//06898f51f3464992989058957d3716e8.jpg",
  },
  {
    day: 10,
    mon: "Jul",
    textKey: "news_title_3",
    img: "https://source.hongfa.com//Uploads//06898f51f3464992989058957d3716e8.jpg",
  },
  {
    day: 10,
    mon: "Jul",
    textKey: "news_title_4",
    img: "https://source.hongfa.com//Uploads//2892bde4276140bb8ac065e71efe2c93.jpg",
  },
  {
    day: 10,
    mon: "Jul",
    textKey: "news_title_5",
    img: "https://source.hongfa.com//Uploads//e4130ebfe4094b378055491b48d0f393.jpg",
  },
  {
    day: 26,
    mon: "Jun",
    textKey: "news_title_6",
    img: "https://source.hongfa.com//Uploads//c892b9e17ce84336a4b81a5e6e0ddd09.jpg",
  },
];

function News() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-[40vh] relative">
        <img
          src="https://interactives.dallasnews.com/2017/the-move/images/fan-blade-lights-1800.jpg"
          className="w-full h-full object-cover brightness-50 absolute top-0"
          alt=""
        />
      </div>
      <div className="flex py-18 gap-3 mx-auto flex-col max-w-[94vw] w-[900px]">
        {news.map((data) => {
          return (
            <div
              key={data.textKey}
              className="w-full rounded-xs shadow-xl bg-white relative"
            >
              <img src={data.img} className="z-10" />
              <div className="flex w-18 h-18 justify-center items-center flex-col bg-cyan-600 ml-10 text-white my-4">
                <h1 className="text-2xl font-bold">{data.day}</h1>
                <h2 className="text-1xl font-semibold">{t(data.mon)}</h2>
              </div>
              <p className="ml-10 font-semibold text-xl mb-10">{t(data.textKey)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default News;