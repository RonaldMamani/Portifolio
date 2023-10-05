import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Habilidades from "@/components/Habilidades";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Projetos from "@/components/Projetos";
import SwiperJs from "@/components/Projetos/Swiper";
import Sobre from "@/components/Sobre";


export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HomePage />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contact />
      <Footer />
    </main>
  )
}
