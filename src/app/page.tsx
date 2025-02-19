import  AiFeatures from "@/components/layout/AiFeatures";
import AiPoweredAgents from "@/components/layout/AiPoweredAgents";
import AiTechnologies from "@/components/layout/AiTechnologies";
import Contact from "@/components/layout/Contact";
import Hero from "@/components/layout/Hero";
import NeuralCapabilities from "@/components/layout/Capabilities";
import Pricing from "@/components/layout/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <AiFeatures />
      <NeuralCapabilities />
      <AiTechnologies />
      <AiPoweredAgents />
      <Pricing />
      <Contact />
    </>
  );
}
