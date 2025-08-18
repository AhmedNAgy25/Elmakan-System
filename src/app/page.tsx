import Navbar from "@/components/client/Navbar";
import About from "@/components/server/About";
import Features from "@/components/server/Features";
import Footer from "@/components/server/Footer";
import Hero from "@/components/client/Hero";
import Services from "@/components/server/Services";
import Team from "@/components/server/Team";
import Testimonials from "@/components/server/Testimonials";
import HeroBackground from "@/components/server/HeroBackground";
import { getSlides } from "@/lib/data";
import { ISlide } from "@/lib/types";
import ContactWraper from "@/components/server/ContactWraper";

export default async function page() {
  const slides: ISlide[] = await getSlides();
  return (
    <>
      <Navbar></Navbar>
      <HeroBackground id="hero">
        <Hero slides={slides} />
      </HeroBackground>
      <Services id="services"></Services>
      <Features id="features"></Features>
      <About id="about"></About>
      <Testimonials id="testimonials"></Testimonials>
      <Team id="team"></Team>
      <ContactWraper></ContactWraper>
      <Footer></Footer>
    </>
  );
}
