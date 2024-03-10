import Description from "@/components/organisms/Description";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import HowItWorks from "@/components/organisms/How";
import People from "@/components/organisms/People";
import WhyWeDo from "@/components/organisms/Why";
import { BackgroundBeams } from "@/components/ui/backgroundBeams";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <People />
      <HowItWorks />
      <WhyWeDo />
      <Footer />
    </main>
  );
}
