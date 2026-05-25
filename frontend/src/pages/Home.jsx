import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="
        relative 
        min-h-screen 
        bg-slate-950 
        text-slate-100 
        antialiased 
        selection:bg-indigo-500/30 
        selection:text-indigo-200
        overflow-x-hidden
      "
    >
      {/* Activated Premium Drifting Global Light Leaks */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[120px] animate-float-1" />
        <div className="absolute top-[40%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[100px] animate-float-2" />
      </div>

      <Navbar />
      <HeroSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Home;