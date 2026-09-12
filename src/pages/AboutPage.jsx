import React from 'react';
import MissionVision from '../components/MissionVision';
import FounderMessage from '../components/FounderMessage';
import Promises from '../components/Promises';
import Team from '../components/Team';
import StatsHighlights from '../components/StatsHighlights';
import ContactForm from '../components/ContactForm';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="pt-24 space-y-0 animate-fadeIn">
      {/* 1. Mission & Vision & Corporate Overview */}
      <MissionVision />

      {/* 2. Message from Our Founder (Hexaware Reference Standard) */}
      <FounderMessage onOpenConsultation={onOpenConsultation} />

      {/* 3. What We Promise to Deliver & Student Assurances (Itransition Style) */}
      <Promises onOpenConsultation={onOpenConsultation} />

      {/* 4. Leadership & Technical Team */}
      <Team />

      {/* 5. Key Highlights & Decades of Experience */}
      <StatsHighlights onOpenConsultation={onOpenConsultation} />

      {/* 6. Consultation & Contact */}
      <ContactForm />
    </div>
  );
}
