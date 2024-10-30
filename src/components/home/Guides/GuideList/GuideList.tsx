import React from 'react';
import { Section, Flex } from '@radix-ui/themes';
import GuideItem from '@/components/home/Guides/GuideItem/GuideItem';
import { guideItems } from '@/data/guideItems';

const GuideList = () => {
  return (
    <Section size='1' px='4' pt='7'>
      <Flex align='center' justify='center' wrap='wrap' gap='4'>
        {guideItems.map((guideItem) => (
          <GuideItem
            key={guideItem.link}
            link={guideItem.link}
            title={guideItem.title}
            icon={guideItem.icon}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default GuideList;
