import Link from 'next/link';
import { Flex, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';

interface BannerItemProps {
  link: string;
  title: string;
  icon: string;
}

const GuideItem = ({ link, title, icon }: BannerItemProps) => {
  return (
    <Link href={link}>
      <Flex
        justify='center'
        align='center'
        direction='column'
        className='p-15 rounded-xl border-2 border-gray-300 p-5 shadow-xl'
        gap='4'
      >
        <Image src={icon} alt={title} width={64} height={64} />
        <Heading as='h2'>{title}</Heading>
      </Flex>
    </Link>
  );
};

export default GuideItem;
