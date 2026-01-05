import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { AboutWhizzySection } from "@/components/home/AboutWhizzySection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { ImpactNumbersSection } from "@/components/home/ImpactNumbersSection";
import { FeaturedEventsSection } from "@/components/home/FeaturedEventsSection";
import { EventPopup } from "@/components/home/EventPopup";

const Index = () => {
  return (
    <Layout>
      <EventPopup />
      <HeroSection />
      <CountdownTimer />
      <AboutWhizzySection />
      <WhatWeDoSection />
      <ImpactNumbersSection />
      <FeaturedEventsSection />
    </Layout>
  );
};

export default Index;
