import Router from "next/router";
import axios from "axios";
import useSWR from "swr";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "react-loading";

import "swiper/css";
import "swiper/css/pagination";

import {
  MdBolt,
  MdDinnerDining,
  MdLunchDining,
  MdReplay,
  MdRestaurantMenu,
} from "react-icons/md";
import { format } from "date-fns";

SwiperCore.use([Autoplay]);

const fetcher = (url, targetDate) =>
  axios({
    method: "GET",
    url: url,
    params: { targetDate },
  }).then((res) => res.data);

const DietCard = () => {
  const today = new Date();
  const targetDate = format(today, "yyyyMMdd");
  const formattedDate = format(today, "MM월 dd일");
  const { data: diet, error } = useSWR("/api/diet", (url) =>
    fetcher(url, targetDate)
  );

  return (
    <div className="mx-auto w-full rounded-lg">
      <div className="flex w-full justify-between items-center pb-2 border-b">
        <div className="flex justify-center items-center space-x-1">
          <MdRestaurantMenu />
          <p>오늘의 급식</p>
        </div>
        <div className="flex justify-center items-center bg-yellow-300 px-2 rounded-full text-sm">
          <p>알레르기 설정</p>
        </div>
      </div>
      {diet ? (
        <Swiper
          cardsEffect
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            {diet.isLunchServed ? (
              <div className="flex flex-col items-start justify-center mt-2">
                <div className="flex w-full justify-between mb-2">
                  <div className="flex justify-center items-center space-x-1 text-2xl">
                    <MdLunchDining />
                    <p>{formattedDate} 중식</p>
                  </div>

                  <div className="flex justify-center items-center space-x-0 text-lg">
                    <MdBolt />
                    <p>{diet.lunchCal}</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 whitespace-pre-line">
                  {diet.lunch
                    .replace(/<br ?\/?>/g, "\n")
                    .replace(/\.?\d\.?/g, "")}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center space-x-1 text-xl mt-5">
                <MdLunchDining />
                <p>{formattedDate} 중식은 없습니다.</p>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {diet.isDinnerServed ? (
              <div className="flex flex-col items-start justify-center mt-2">
                <div className="flex w-full justify-between mb-2">
                  <div className="flex justify-center items-center space-x-1 text-2xl">
                    <MdDinnerDining />
                    <p>{formattedDate} 석식</p>
                  </div>

                  <div className="flex justify-center items-center space-x-0 text-lg">
                    <MdBolt />
                    <p>{diet.dinnerCal}</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 whitespace-pre-line">
                  {diet.dinner
                    .replace(/<br ?\/?>/g, "\n")
                    .replace(/\.?\d\.?/g, "")}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center space-x-1 text-xl mt-5 ">
                <MdDinnerDining />
                <p>{formattedDate} 석식은 없습니다.</p>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      ) : error ? (
        <div className="flex flex-col justify-center items-center pt-5 space-y-2">
          <p>⚠️ 오류가 발생했습니다.</p>

          <button
            onClick={() => Router.reload(window.location.pathname)}
            className="bg-gray-300 px-2 rounded-md animate-pulse"
          >
            <div className="flex justify-center items-center space-x-1">
              <p>다시 시도하기</p>
              <MdReplay />
            </div>
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center pt-5">
          <Loading type="bars" color="#000" width="40px" />
        </div>
      )}
    </div>
  );
};

export default DietCard;
