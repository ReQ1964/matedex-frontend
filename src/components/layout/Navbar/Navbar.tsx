import { Box, Container, Flex, Grid, Section } from '@radix-ui/themes';
import Image from 'next/image';
import SearchInput from '@/components/layout/SearchInput';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Container size='3'>
      <Section size='1' pt='3'>
        <Grid>
          <Flex justify='between' align='center' px='4'>
            <Link href='/'>
              <Image
                src='/images/matedex.png'
                alt='Our icon!'
                height={100}
                width={200}
              />
            </Link>
            <Image
              src='/icons/burgericon.svg'
              alt='Burger menu'
              height={40}
              width={40}
              className='mt-3 cursor-pointer'
            />
          </Flex>
          <Box px='4' pt='4'>
            <SearchInput />
          </Box>
        </Grid>
      </Section>
    </Container>
  );
};
export default Navbar;
