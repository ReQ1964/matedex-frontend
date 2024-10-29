// FeaturedItemList.tsx
import React from 'react';
import FeaturedItem from '@/components/home/Featured/FeaturedItem';
import { Flex } from '@radix-ui/themes';

export interface FeaturedItem {
  name: string;
  company: string;
  rating: number;
}

interface FeaturedItemListProps {
  featuredItems: FeaturedItem[];
}

const FeaturedItemList: React.FC<FeaturedItemListProps> = ({
  featuredItems,
}) => {
  return (
    <Flex align='center' pt='6'>
      {featuredItems.map((featuredItem) => (
        <FeaturedItem key={featuredItem.name} item={featuredItem} />
      ))}
    </Flex>
  );
};

export default FeaturedItemList;
