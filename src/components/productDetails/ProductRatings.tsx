import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Section,
  Separator,
  Text,
} from '@radix-ui/themes';
import { StarFilledIcon } from '@radix-ui/react-icons';
import RatingDisplay from '@/utils/RatingDisplay';

interface reviewInterface {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

const ProductRatings = ({ reviews }: { reviews: reviewInterface[] }) => {
  return (
    <Section size='1'>
      <Heading size='6' className='mb-4'>
        Reviews
      </Heading>
      <Card size='2'>
        {reviews.map((review, index) => (
          <Box key={review.id}>
            {index > 0 && <Separator size='4' />}
            <Flex direction='column' className='p-3'>
              <Flex align='center' className='mb-2'>
                <Avatar
                  src={`https://i.pravatar.cc/40?u=${review.author}`}
                  fallback={review.author[0]}
                  size='3'
                  className='mr-2'
                />
                <Text weight='bold'>{review.author}</Text>
              </Flex>
              <Flex wrap='wrap' className='mb-2'>
                <RatingDisplay value={review.rating} icon={StarFilledIcon} />
              </Flex>
              <Text>{review.comment}</Text>
            </Flex>
          </Box>
        ))}
      </Card>
    </Section>
  );
};
export default ProductRatings;
