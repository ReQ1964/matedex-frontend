import React from 'react';
import { Flex, Text } from '@radix-ui/themes';
import {
  ArrowUpIcon,
  DotFilledIcon,
  LightningBoltIcon,
  StarFilledIcon,
} from '@radix-ui/react-icons';

type IconType =
  | typeof LightningBoltIcon
  | typeof DotFilledIcon
  | typeof ArrowUpIcon
  | typeof StarFilledIcon;

interface RatingDisplayInterface {
  label?: string;
  value: number;
  icon: IconType;
  color?: string;
}

const RatingDisplay = ({
  label,
  value,
  icon: Icon,
  color = 'text-yellow-400',
}: RatingDisplayInterface) => (
  <Flex direction='column' className='mb-2 mr-4'>
    <Text size='2' weight='bold' className='mb-1'>
      {label && label}
    </Text>
    <Flex>
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          className={`h-5 w-5 ${i < value ? color : 'text-gray-300'}`}
        />
      ))}
    </Flex>
  </Flex>
);
export default RatingDisplay;
