import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ExpertiseAreas from '@/components/ExpertiseAreas';
import Stats from '@/components/Stats';
import ProjectGallery from '@/components/ProjectGallery';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SafetyProgram from '@/components/SafetyProgram';
import Awards from '@/components/Awards';
import CompanyValues from '@/components/CompanyValues';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Stats />
      <ExpertiseAreas />
      <Awards />
      <ProjectGallery />
      <CompanyValues />
      <TestimonialCarousel />
      <SafetyProgram />
    </>
  );
}
