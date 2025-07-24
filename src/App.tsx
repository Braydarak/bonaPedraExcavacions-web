import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutSection from "./pages/about";
import ContactSection from "./pages/contact";
import Hero from "./pages/hero";
import ServicesSection from "./pages/services";

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
