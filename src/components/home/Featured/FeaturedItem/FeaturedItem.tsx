// FeaturedItem.tsx
import React from 'react';
import Image from 'next/image';
import { Flex, Heading, Text, Link } from '@radix-ui/themes';
import type { FeaturedItem as FeaturedItemType } from '../FeaturedItemList/FeaturedItemList';

interface FeaturedItemProps {
  item: FeaturedItemType;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({ item }) => {
  const { id, name, company, rating } = item;

  return (
    <Link
      href={`/products/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Flex
        p='4'
        width='240px'
        justify='center'
        direction='column'
        className='relative transform cursor-pointer rounded-xl border-2 bg-white shadow-xl transition-all duration-75 hover:border-gray-400 hover:shadow-2xl'
      >
        <Image
          src='/icons/argentina-flag.svg'
          alt={`Argentinan flag`}
          width={26}
          height={26}
          className='absolute top-3'
        />
        <Image
          src='/images/rosamonte.webp'
          alt={`Image of ${name} by ${company}`}
          width={180}
          height={180}
          className='self-center'
        />
        <Flex justify='between' mt='4'>
          <Heading as='h3' size='3'>
            {name}
          </Heading>
          <Flex justify='center' align='center' gap='3px'>
            <Image
              src={'/icons/star-rating.svg'}
              alt={'Star rating'}
              width={16}
              height={16}
              className='mb-[1px]'
            />
            {rating}
          </Flex>
        </Flex>
        <Text size='2'>{company}</Text>
      </Flex>
    </Link>
  );
};

export default FeaturedItem;
