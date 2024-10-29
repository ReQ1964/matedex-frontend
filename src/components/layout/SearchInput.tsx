'use client';

import React, { useEffect } from 'react';
import { TextField } from '@radix-ui/themes';
import Image from 'next/image';

const SearchInput = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [debouncedInputValue, setDebouncedInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return (
    <TextField.Root
      placeholder="Type in what you're looking for"
      onChange={handleInputChange}
      value={inputValue}
    >
      <TextField.Slot>
        <Image
          src='/icons/searchicon.svg'
          alt='Magnifying glass'
          height='16'
          width='16'
        />
      </TextField.Slot>
    </TextField.Root>
  );
};
export default SearchInput;
