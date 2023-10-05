import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Sobre from "@/components/Sobre";
import Habilidades from "@/components/Habilidades";
import Projetos from "@/components/Projetos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


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
