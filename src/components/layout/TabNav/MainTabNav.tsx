'use client';

import { usePathname } from 'next/navigation';
import { Box, TabNav } from '@radix-ui/themes';
import {
  ABOUT_LINK,
  CATALOG_LINK,
  CONTACT_LINK,
  HOME_LINK,
} from '@/constants/routing';
import NavigationMenuPopover from '@/components/layout/TabNav/NavigationMenuPopover';

const MainTabNav = () => {
  const pathName = usePathname();

  return (
    <Box className='mt-5' display={{ initial: 'none', sm: 'block' }}>
      <TabNav.Root color='orange' justify='center'>
        <TabNav.Link href={HOME_LINK} active={pathName === HOME_LINK}>
          Home
        </TabNav.Link>
        <TabNav.Link href={CATALOG_LINK} active={pathName === CATALOG_LINK}>
          Catalog
        </TabNav.Link>
        <NavigationMenuPopover />
        <TabNav.Link href={ABOUT_LINK} active={pathName === ABOUT_LINK}>
          About
        </TabNav.Link>
        <TabNav.Link href={CONTACT_LINK} active={pathName === CONTACT_LINK}>
          Contact
        </TabNav.Link>
      </TabNav.Root>
    </Box>
  );
};

export default MainTabNav;
