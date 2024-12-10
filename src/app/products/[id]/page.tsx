'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Avatar,
  Button,
  Card,
  Container,
  DropdownMenu,
  Flex,
  Heading,
  Separator,
  Text,
  TextField,
} from '@radix-ui/themes';
import {
  ArrowUpIcon,
  Cross2Icon,
  DotFilledIcon,
  LightningBoltIcon,
  PlusIcon,
  StarFilledIcon,
} from '@radix-ui/react-icons';

import { mockYerba } from '@/data/mockYerba';
import { useUserLists } from '@/hooks/useUserLists';
import ProductRatings from '@/components/productDetails/ProductRatings';
import RatingDisplay from '@/utils/RatingDisplay';
import ProductAddReview from '@/components/productDetails/ProductAddReview';

const item = mockYerba[0];
const isLoggedIn = true;

export default function ProductPage() {
  const [newListName, setNewListName] = useState('');
  const { lists, updateLists, isLoading, isError, isSyncing, syncError } =
    useUserLists();

  const handleAddToList = (listId: string) => {
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, items: [...list.items, item.id] } : list
    );
    updateLists(updatedLists);
  };

  const handleRemoveFromList = (listId: string) => {
    const updatedLists = lists.map((list) =>
      list.id === listId
        ? { ...list, items: list.items.filter((id) => id !== item.id) }
        : list
    );
    updateLists(updatedLists);
  };

  const handleCreateNewList = () => {
    if (newListName.trim()) {
      const newList = {
        id: `${lists.length + 1}`,
        name: newListName.trim(),
        items: [item.id],
      };
      updateLists([...lists, newList]);
      setNewListName('');
    }
  };

  return (
    <Container size='3' className='px-4 py-8'>
      <Card size='3' className='mb-8 p-6 md:p-8 lg:p-12'>
        <Flex direction={{ initial: 'column', md: 'row' }} gap='6'>
          <Image
            src={item.imageUrl}
            alt={`Image of ${item.name} by ${item.company}`}
            width={400}
            height={400}
            className='m-auto rounded-lg'
          />
          <Flex direction='column' className='w-full'>
            <Heading size='8' className='mb-2'>
              {item.name}
            </Heading>
            <Text size='3' className='mb-4 text-gray-600'>
              {item.company}
            </Text>
            <Flex wrap='wrap' className='mb-4'>
              <RatingDisplay
                label='Bitterness'
                value={item.bitterness}
                icon={LightningBoltIcon}
                color='text-red-500'
              />
              <RatingDisplay
                label='Amount of Dust'
                value={item.dust}
                icon={DotFilledIcon}
                color='text-brown-500'
              />
              <RatingDisplay
                label='Power'
                value={item.power}
                icon={ArrowUpIcon}
                color='text-green-500'
              />
            </Flex>
            <Flex align='center' className='mb-4'>
              <StarFilledIcon className='mr-1 h-5 w-5 text-yellow-400' />
              <Text size='4' weight='bold'>
                {item.rating}
              </Text>
            </Flex>
            <Text className='mb-6'>{item.description}</Text>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  size='3'
                  className='self-start'
                  color='orange'
                  disabled={!isLoggedIn}
                >
                  Manage your lists
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className='z-50 rounded-md bg-white p-2 shadow-lg'>
                {isLoading ? (
                  <Text>Loading lists...</Text>
                ) : isError ? (
                  <Text color='red'>
                    Error loading lists. Please try again.
                  </Text>
                ) : lists.length === 0 ? (
                  <Text>No lists available. Please create one.</Text>
                ) : (
                  <>
                    {lists.map((list) => (
                      <DropdownMenu.Item
                        key={list.id}
                        className='flex cursor-pointer items-center justify-between rounded px-4 py-2 text-sm hover:bg-gray-100'
                        onSelect={(e) => e.preventDefault()}
                      >
                        <span>{list.name}</span>
                        {list.items.includes(item.id) ? (
                          <Button
                            size='1'
                            onClick={() => handleRemoveFromList(list.id)}
                          >
                            <Cross2Icon />
                          </Button>
                        ) : (
                          <Button
                            size='1'
                            onClick={() => handleAddToList(list.id)}
                          >
                            <PlusIcon />
                          </Button>
                        )}
                      </DropdownMenu.Item>
                    ))}
                    <DropdownMenu.Separator className='my-2 h-px bg-gray-200' />
                    <DropdownMenu.Item className='px-4 py-2 text-sm'>
                      <Flex align='center'>
                        <TextField.Root
                          placeholder='New list name'
                          value={newListName}
                          onChange={(e) => setNewListName(e.target.value)}
                          className='mr-2'
                        />
                        <Button
                          size='1'
                          onClick={handleCreateNewList}
                          color='orange'
                        >
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </DropdownMenu.Item>
                  </>
                )}
                {isSyncing && (
                  <Text size='1' className='mt-2 italic'>
                    Syncing...
                  </Text>
                )}
                {syncError && (
                  <Text size='1' color='red' className='mt-2'>
                    Not saved to cloud. Please check your connection.
                  </Text>
                )}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Flex>
      </Card>

      {isLoggedIn && <ProductAddReview />}
      <ProductRatings reviews={item.reviews} />
    </Container>
  );
}
