import CenterSection from "@/layouts/CenterSection";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-white flex flex-col">
      <Header />
      <CenterSection />
      <Footer />
    </main>
  );
}
