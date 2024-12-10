import React from 'react';
import { Flex, Heading, Section, Text } from '@radix-ui/themes';
import FeaturedItemList from '@/components/home/Featured/FeaturedItemList/FeaturedItemList';

const mockItems = [
  {
    id: 1,
    name: 'Elaborada Seleccion Especial',
    company: 'Rosamonte',
    rating: 4.7,
  },
];

const Featured = () => {
  return (
    <Section size='1' px='4'>
      <Flex justify='between' align='center'>
        <Heading as='h2'>Featured</Heading>
        <Text>See all</Text>
      </Flex>
      <FeaturedItemList featuredItems={mockItems} />
    </Section>
  );
};
export default Featured;
