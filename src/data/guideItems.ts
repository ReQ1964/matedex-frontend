import {
  GUIDE_ABOUT_LINK,
  GUIDE_TYPES_LINK,
  GUIDE_BENEFITS_LINK,
  GUIDE_PREPARATION_LINK,
  GUIDE_ACCESSORIES_LINK,
} from '@/constants/routing';

interface ExpandedGuideItem {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  href: string;
  className?: string;
}

export const guideItems = [
  {
    link: GUIDE_ABOUT_LINK,
    title: 'ABOUT YM',
    icon: '/icons/branch-leaves.png',
  },
  {
    link: GUIDE_TYPES_LINK,
    title: 'TYPES',
    icon: '/icons/mate.png',
  },
  {
    link: GUIDE_BENEFITS_LINK,
    title: 'BENEFITS',
    icon: '/icons/health.svg',
  },
  {
    link: GUIDE_PREPARATION_LINK,
    title: 'PREPARATION',
    icon: '/icons/mate-tea.png',
  },
  {
    link: GUIDE_ACCESSORIES_LINK,
    title: 'ACCESSORIES',
    icon: '/icons/thermo.png',
  },
];

export const expandedGuideItems: ExpandedGuideItem[] = [
  {
    title: 'About Yerba Mate',
    description: 'Learn more about the beverage!',
    icon: '/icons/branch-leaves.png',
    iconAlt: 'Branch Leaves Icon',
    href: GUIDE_ABOUT_LINK,
  },
  {
    title: 'Types',
    description: 'Discover your type!',
    icon: '/icons/mate.png',
    iconAlt: 'Mate icon',
    href: GUIDE_TYPES_LINK,
  },
  {
    title: 'Benefits',
    description: 'Why should you drink it?',
    icon: '/icons/health.svg',
    iconAlt: 'Health icon',
    href: GUIDE_BENEFITS_LINK,
  },
  {
    title: 'Preparation',
    description: 'How to do it right?',
    icon: '/icons/mate-tea.png',
    iconAlt: 'Pouring to mate icon',
    href: GUIDE_PREPARATION_LINK,
  },
  {
    title: 'Accesories',
    description: 'How to make your life easier?',
    icon: '/icons/thermo.png',
    iconAlt: 'A thermo icon',
    href: GUIDE_ACCESSORIES_LINK,
    className: 'col-span-2',
  },
];
