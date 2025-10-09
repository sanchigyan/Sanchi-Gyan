"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const books = [
  { id: 1, title: "Computer Science", img: "/book1.jpeg" },
  { id: 2, title: "Mathematics", img: "/book2.jpeg" },
  { id: 3, title: "Social Studies", img: "/book3.jpeg" },
  { id: 4, title: "Mathematics 2", img: "/book1.jpeg" },
  { id: 5, title: "Mathematics 2", img: "/book2.jpeg" },
];

export default function CardCarousel() {
  return (
    <div className="mx-auto px-10 md:px-0 py-10 w-full max-w-[1200px]">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="relative"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300 transform">
              <Image
                src={book.img}
                alt={book.title}
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
