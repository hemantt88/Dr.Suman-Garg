import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Reviews } from "./components/Reviews";
import { BookingForm } from "./components/BookingForm";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { LoadingScreen } from "./components/LoadingScreen";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) progressBar.style.width = `${progress}%`;
      }
      
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-600 selection:text-white transition-colors duration-500">
        <LoadingScreen />
        <Navbar />

        <Hero />
        <Stats />
        <About />
        <Services />
        <BookingForm />
        <Reviews />
        <Contact />

        <Footer />
        <WhatsAppButton />

        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gray-100 dark:bg-slate-800 pointer-events-none">
           <div id="scroll-progress" className="h-full bg-blue-600 transition-all duration-100 w-0" />
        </div>
      </main>
    </ThemeProvider>
  );
}
