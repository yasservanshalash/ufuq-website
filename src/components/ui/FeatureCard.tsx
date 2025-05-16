import React from 'react';
import * as Icons from 'lucide-react';
import { FeatureType } from '../../types';
import { Card, CardContent } from './Card';

interface FeatureCardProps {
  feature: FeatureType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const IconComponent = Icons[feature.icon as keyof typeof Icons];

  return (
    <Card hoverable className="h-full">
      <CardContent className="p-6">
        <div className="w-12 h-12 flex items-center justify-center relative top-2 rounded-full bg-[#A6292E] text-white mb-4">
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-slate-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;