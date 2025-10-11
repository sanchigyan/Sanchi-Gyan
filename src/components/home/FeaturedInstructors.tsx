"use client"
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

export default function FeaturedInstructors() {
    



  const instructors = [
    {
      name: "Dr. Olivia Carter",
      subject: "Mathematics Expert",
      img: "https://i.ibb.co/hRcnCnH6/image.png",
      rating: 4.9,
      exp: "10+ Years Experience",
    },
    {
      name: "Mr. Liam Johnson",
      subject: "Computer Science Instructor",
      img: "https://i.ibb.co/svWn1ppZ/image.png",
      rating: 4.8,
      exp: "8+ Years Experience",
    },
    {
      name: "Ms. Sophia Allen",
      subject: "Social Studies Mentor",
      img: "https://i.ibb.co/0p72j6DF/image.png",
      rating: 4.7,
      exp: "6+ Years Experience",
    },
    {
      name: "Prof. Ethan Brown",
      subject: "Physics & Robotics",
      img: "https://i.ibb.co/Qv0sNySH/image.png",
      rating: 4.9,
      exp: "12+ Years Experience",
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <SectionTitle title="Featured Instructors" subtitle="Learn from the best educators with years of experience and excellence"/>

      <div className="gap-10 grid md:grid-cols-2 lg:grid-cols-4 mx-auto px-4 max-w-6xl">
        {instructors.map((ins, i) => (
          <div
            key={i}
            className="group relative bg-white dark:bg-gray-800 shadow-md hover:shadow-[0_0_30px_rgb(0,237,67)] border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-500"
          >
            <div className="overflow-hidden">
              <Image
                src={ins.img}
                alt={ins.name}
                width={400}
                height={400}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white text-xl">
                {ins.name}
              </h3>
              <p className="mb-2 font-medium text-indigo-600">{ins.subject}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {ins.exp}
              </p>
              <div className="flex justify-center items-center gap-1 mt-3 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < Math.round(ins.rating) ? "opacity-100" : "opacity-30"}
                  />
                ))}
                <span className="ml-1 text-gray-500 dark:text-gray-400 text-sm">
                  {ins.rating}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="bg-white/10 hover:bg-indigo-600 p-3 rounded-full text-white transition"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 hover:bg-indigo-600 p-3 rounded-full text-white transition"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 hover:bg-indigo-600 p-3 rounded-full text-white transition"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
