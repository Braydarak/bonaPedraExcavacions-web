import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutSection from "./pages/about";
import ContactSection from "./pages/contact";
import Hero from "./pages/hero";
import ServicesSection from "./pages/services";
import "./i18n"; 
import WhatsappButton from "./components/whatsappButton";
import LenguageManager from "./components/lenguageManager";

function App() {
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
}

export default App;
