import React, { FormEvent, useState } from 'react';
import {
  Button,
  Card,
  Flex,
  Heading,
  Section,
  Text,
  TextField,
} from '@radix-ui/themes';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';

const ProductAddReview = () => {
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [userReview, setUserReview] = useState('');

  const handleRatingChange = (rating: number) => {
    setUserRating(rating);
  };

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (userRating <= 0) {
      toast.error('Please select a rating before submitting your review!');
      return;
    }
    setUserRating(0);
    setUserReview('');
    toast.success('Your review has been submitted!');
  };

  return (
    <Section size='1'>
      <Card size='3'>
        <Heading size='5' className='mb-4'>
          Add Your Review
        </Heading>
        <form onSubmit={handleReviewSubmit}>
          <Flex direction='column' gap='3'>
            <Flex align='center' className='mb-2'>
              <Text size='2' className='mr-2'>
                Your Rating:
              </Text>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarFilledIcon
                  key={star}
                  className={`h-6 w-6 cursor-pointer transition-colors ${
                    star <= (hoveredRating || userRating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
            </Flex>
            <TextField.Root
              placeholder='Write your review here...'
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
              required
            />
            <Button type='submit' disabled={!userReview || userRating <= 0}>
              Submit Review
            </Button>
          </Flex>
        </form>
      </Card>
    </Section>
  );
};
export default ProductAddReview;
