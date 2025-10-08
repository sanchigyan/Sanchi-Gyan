import Hero from "@/components/home/hero";
import PopulerCourses from "@/components/home/populerCourses";
import Navbar from "@/components/layout/Navber";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <PopulerCourses/>
      </main>
    </div>
  );
}
