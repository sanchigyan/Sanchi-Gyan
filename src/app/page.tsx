import Hero from "@/components/home/hero";
import OurServices from "@/components/home/OurServices";
import PlatformStats from "@/components/home/PlatformStats";
import PopulerCourses from "@/components/home/populerCourses";
import Navbar from "@/components/layout/Navber";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <PlatformStats/>
        <PopulerCourses/>
        <OurServices/>
      </main>
    </div>
  );
}
