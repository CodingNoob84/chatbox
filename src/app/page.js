import CenterSection from "@/layouts/CenterSection";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(AuthOptions);
  if (!session) {
    redirect("/login");
  }
  console.log(session);
  return (
    <main className="min-w-screen min-h-screen max-h-screen bg-white flex flex-col">
      <Header session={session} />
      <CenterSection userId={session?.user?.id} />
      <Footer />
    </main>
  );
}
