import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrainingCourses from '../components/TrainingCourses';
import Roadmap from '../components/Roadmap';
import StatsHighlights from '../components/StatsHighlights';
import Team from '../components/Team';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function HomePage({ onOpenConsultation, setCurrentPage }) {
  const navigateToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToTraining = () => {
    const el = document.querySelector('#training');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      <Hero
        onOpenConsultation={onOpenConsultation}
        onNavigateServices={navigateToServices}
        onNavigateTraining={navigateToTraining}
      />
      <Services onOpenConsultation={onOpenConsultation} />
      <TrainingCourses onOpenConsultation={onOpenConsultation} />
      <Roadmap onOpenConsultation={onOpenConsultation} />
      <StatsHighlights onOpenConsultation={onOpenConsultation} />
      <Team />
      <GoogleReviewsWidget onOpenConsultation={onOpenConsultation} />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
