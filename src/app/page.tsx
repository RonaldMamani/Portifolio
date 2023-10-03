import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Sobre from "@/components/Sobre";


export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HomePage />
      <Sobre />
      <Footer />
    </main>
  )
}
