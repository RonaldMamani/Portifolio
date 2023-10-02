import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";


export default function Home() {
  return (
    <main className="h-screen bg-black relative">
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}
