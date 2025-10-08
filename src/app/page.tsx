import Hero from "@/components/home/hero";
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
      </main>
    </div>
  );
}
