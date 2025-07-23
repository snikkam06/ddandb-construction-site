import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ExpertiseAreas from '@/components/ExpertiseAreas';
import Timeline from '@/components/Timeline';
import Stats from '@/components/Stats';
import ProjectGallery from '@/components/ProjectGallery';
import SafetyProgram from '@/components/SafetyProgram';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ExpertiseAreas />
      <Timeline />
      <Stats />
      <ProjectGallery />
      <SafetyProgram />
      <TestimonialCarousel />
    </>
  );
}
