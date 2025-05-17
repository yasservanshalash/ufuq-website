import React from 'react';
import Section from '../components/ui/Section';
import TeamCard from '../components/ui/TeamCard';
import { teamMembers } from '../data/team';
<<<<<<< HEAD
import { useLocalization } from '../hooks/useLocalization';

const TeamSection: React.FC = () => {
  const { t } = useLocalization();
  
  return (
    <Section
      id="about"
      title={t('about.team.title')}
      subtitle={t('about.team.subtitle')}
=======

const TeamSection: React.FC = () => {
  return (
    <Section
      id="about"
      title="Meet Our Leadership Team"
      subtitle="Experts dedicated to revolutionizing enterprise resource planning"
>>>>>>> origin/main
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-8 animate-[fade-in-up_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;