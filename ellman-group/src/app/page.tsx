import { Header, Footer } from '@/components/layout';
import { Hero, Services, Portfolio, About, Process, Contact } from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
