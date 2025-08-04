"use client";
import React from "react";
import Image from "next/image";
import { AuthSwiperData, IMAGES } from "../lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="flex-1 w-full md:w-1/2 bg-background flex flex-col justify-center px-6 py-5">
         {/* <ThemeToggleButton /> */}
        {children}
      </div>
      <div className="hidden md:flex relative flex-col flex-1 w-full md:w-1/2 bg-[#3e2687] overflow-y-auto">

        <Image
          src={IMAGES.Auth_bg}
          alt="Memoro_auth_bg"
          fill={true}
          className="absolute object-cover"
          priority
        />
     
        <div className="relative p-5 w-full h-full flex items-center justify-center">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper custom-swiper w-full h-full"
          >
            {AuthSwiperData.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="flex items-center justify-center h-full"
              >
                <div className="flex flex-col justify-center items-center gap-2 h-full">
                  <Image
                    src={slide.image}
                    alt="Memoro_AuthImg"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                  <div className="text-[#ffffff] w-full text-center flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
