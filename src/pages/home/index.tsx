import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import AboutSection from "../about";
import ContactSection from "../contact";
import Hero from "../hero";
import ServicesSection from "../services";
import WhatsappButton from "../../components/whatsappButton";
import LenguageManager from "../../components/lenguageManager";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const stateTarget = (location.state as { scrollTo?: string })?.scrollTo;
    const hashTarget = location.hash
      ? location.hash.replace(/^#/, "")
      : undefined;
    const target = stateTarget || hashTarget;
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        requestAnimationFrame(() => {
          try {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } catch {
            el.scrollIntoView();
          }
          try {
            window.history.replaceState(null, "", `/#${target}`);
          } catch {
            // noop
          }
        });
      }
    }
  }, [location]);

  return (
    <>
      <LenguageManager />
      <Header />
      <main className="pt-24">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default HomePage;
