import { Box, Container, Flex, Grid, Section, Avatar } from '@radix-ui/themes';
import Image from 'next/image';
import SearchTextBox from '@/components/layout/SearchTextBox/SearchTextBox';
import Link from 'next/link';
import SideMenu from '@/components/layout/SideMenu/SideMenu';
import MainTabNav from '@/components/layout/TabNav/MainTabNav';

const Navbar = () => {
  return (
    <Container size='3' className='bg-neutral-200'>
      <Section size='1' pt='3' className='md:pb-0'>
        <Grid>
          <Box>
            <Flex
              justify={{ initial: 'between', md: 'between' }}
              align='center'
              px='4'
            >
              <Link href='/'>
                <Image
                  src='/images/matedex.png'
                  alt='Our icon!'
                  height={100}
                  width={200}
                />
              </Link>

              <Box
                display={{ initial: 'none', sm: 'block' }}
                width='400px'
                pt='4'
              >
                <SearchTextBox />
              </Box>

              <SideMenu />

              <Avatar
                fallback='U'
                color='orange'
                className='mt-3 hidden cursor-pointer md:block'
              />
            </Flex>

            <Box display={{ initial: 'block', sm: 'none' }} px='4' pt='4'>
              <SearchTextBox />
            </Box>
          </Box>
          <MainTabNav />
        </Grid>
      </Section>
    </Container>
  );
};

export default Navbar;
