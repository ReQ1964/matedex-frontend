import React from 'react';
import { Section, Flex } from '@radix-ui/themes';
import GuideItem from '@/components/home/Guides/GuideItem';

const Guides = () => {
  const guideItems = [
    {
      link: 'item1',
      title: 'ABOUT YM',
      icon: '/icons/branch-leaves.png',
    },
  ];

  return (
    <Section size='1' px='4'>
      <Flex align='center'>
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
