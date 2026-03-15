import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
