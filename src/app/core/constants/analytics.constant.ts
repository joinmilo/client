import { Maybe } from '../api/generated/schema';

export const chartsDefaultColor: Maybe<string>[] = [
  '--color-primary-500',
  '--color-accent-500',
  '--color-primary-300',
  '--color-primary-300',
  '--color-primary-800',
  '--color-accent-800',
];

// Search Console
export const searchConsoleClicksKey = 'clicks';
export const searchConsoleImpressionsKey = 'impressions';
export const searchConsolePositionsKey = 'position';
export const searchConsoleCtrKey = 'ctr';

// Ratings
export const scoreDistributionKey = 'percentages';
export const timeAmountDistributionKey = 'timeAmountDistribution';
export const timeAverageDistributionKey = 'timeAverageDistribution';

// Visitables
export const visitorsKey = 'visitors';
export const visitsKey = 'visits';