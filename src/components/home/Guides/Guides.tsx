import React from 'react';
import { Section, Flex } from '@radix-ui/themes';
import GuideItem from '@/components/home/Guides/GuideItem';

const Guides = () => {
  const guideItems = [
    {
      link: '/guide/about',
      title: 'ABOUT YM',
      icon: '/icons/branch-leaves.png',
    },
    {
      link: '/guide/types',
      title: 'TYPES',
      icon: '/icons/container-storage.png',
    },
    {
      link: '/guide/benefits',
      title: 'BENEFITS',
      icon: '/icons/health.svg',
    },
    {
      link: '/guide/preparation',
      title: 'PREPARATION',
      icon: '/icons/mate-tea.png',
    },
    {
      link: '/guide/accessories',
      title: 'ACCESSORIES',
      icon: '/icons/thermo.png',
    },
  ];

  return (
    <Section size='1' px='4'>
      <Flex align='center' justify='between'>
        {guideItems.map((guideItem) => {
          return (
            <GuideItem
              key={guideItem.link}
              link={guideItem.link}
              title={guideItem.title}
              icon={guideItem.icon}
            />
          );
        })}
      </Flex>
    </Section>
  );
};

export default Guides;
