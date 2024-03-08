import Description from "@/components/organisms/Description";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import HowItWorks from "@/components/organisms/How";
import People from "@/components/organisms/People";
import WhyWeDo from "@/components/organisms/Why";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description/>
      <People/>
      <HowItWorks/>
      <WhyWeDo/>
      <Footer/>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Main
      </h1>
      <div className="font-mono">Main</div>
      <Button>Cek Here</Button>
    </main>
  );
}
