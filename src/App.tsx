import Header from "./components/Header";
import Floating from "./components/Floating";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Hero, Trust, Problems, Solution, Dark, Reviews, Videos, Gallery, Plans, Store, Steps, Support, Faq } from "./components/Sections";

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido principal</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Trust />
        <Problems />
        <Solution />
        <Dark />
        <Reviews />
        <Videos />
        <Gallery />
        <Plans />
        <Store />
        <Steps />
        <Support />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <Floating />
    </>
  );
}
