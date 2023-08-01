import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import LoginSection from "@/layouts/LoginSection";

export default function Login() {
  return (
    <main className="min-w-screen min-h-screen bg-white flex flex-col">
      <Header />
      <LoginSection />
      <Footer />
    </main>
  );
}
