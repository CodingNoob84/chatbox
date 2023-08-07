import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import LoginSection from "@/layouts/LoginSection";
import { getServerSession } from "next-auth";
import { AuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(AuthOptions);
  if (session) {
    redirect("/");
  }
  return (
    <main className="min-w-screen min-h-screen bg-white flex flex-col">
      <Header />
      <LoginSection />
      <Footer />
    </main>
  );
}
