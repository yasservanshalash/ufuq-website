import React from 'react';
import { Card, CardContent } from './Card';
import { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card hoverable className="h-full overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent>
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-teal-600 mb-2">{member.position}</p>
        <p className="text-slate-600">{member.bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;