import React from 'react';
import { Box, Flex, Grid, Section, TextField } from '@radix-ui/themes';
import Image from 'next/image';
import SearchInput from '@/components/layout/SearchInput';

const Navbar = () => {
  return (
    <Section size='1' pt='2'>
      <Grid>
        <Flex justify='between' align='center' px='3'>
          <Image
            src='/images/matedex.png'
            alt='Our icon!'
            height={100}
            width={200}
          />
          <Image
            src='/icons/burgericon.svg'
            alt='Burger menu'
            height={40}
            width={40}
            className='mt-3'
          />
        </Flex>
        <Box px='2' pt='4'>
          <SearchInput />
        </Box>
      </Grid>
    </Section>
  );
};
export default Navbar;
