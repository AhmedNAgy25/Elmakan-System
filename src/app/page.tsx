import Navbar from "@/components/client/Navbar";
import About from "@/components/server/About";
import Footer from "@/components/server/Footer";
import Hero from "@/components/server/Hero";
import Services from "@/components/server/Services";
import Team from "@/components/server/Team";
import Testimonials from "@/components/server/Testimonials";
import ContactWraper from "@/components/server/ContactWraper";
import OurProjects from "@/components/server/OurProjects";

export default async function page() {
  return (
    <>
      <Navbar></Navbar>
      <Hero id="home" />
      <Services id="services"></Services>
      <OurProjects id="features"></OurProjects>
      <About id="about"></About>
      <Testimonials id="testimonials"></Testimonials>
      <Team id="team"></Team>
      <ContactWraper id="contact"></ContactWraper>
      <Footer></Footer>
    </>
  );
}
