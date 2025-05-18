import { FeatureType } from '../types';
import { useLocalization } from '../hooks/useLocalization';

export const getFeatures = (): FeatureType[] => {
  const { t } = useLocalization();

  return [
    {
      title: t('features.finance.title'),
      description: t('features.finance.description'),
      icon: 'Wallet',
    },
    {
      title: t('features.trading.title'),
      description: t('features.trading.description'),
      icon: 'BarChart',
    },
    {
      title: t('features.inventory.title'),
      description: t('features.inventory.description'),
      icon: 'Package',
    },
    {
      title: t('features.hrm.title'),
      description: t('features.hrm.description'),
      icon: 'Users',
    },
    {
      title: t('features.projects.title'),
      description: t('features.projects.description'),
      icon: 'Briefcase',
    },
    {
      title: t('features.production.title'),
      description: t('features.production.description'),
      icon: 'Factory',
    },
    {
      title: t('features.fixedAssets.title'),
      description: t('features.fixedAssets.description'),
      icon: 'Home',
    },
    {
      title: t('features.automotive.title'),
      description: t('features.automotive.description'),
      icon: 'Car',
    },
    {
      title: t('features.healthcare.title'),
      description: t('features.healthcare.description'),
      icon: 'Heart',
    },
    {
      title: t('features.CRM.title'),
      description: t('features.CRM.description'),
      icon: 'Handshake',
    },
    {
      title: t('features.property.title'),
      description: t('features.property.description'),
      icon: 'Building',
    },
    {
      title: t('features.readyMix.title'),
      description: t('features.readyMix.description'),
      icon: 'Construction',
    },
  ];
};