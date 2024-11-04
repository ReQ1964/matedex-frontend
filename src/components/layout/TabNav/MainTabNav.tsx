'use client';

import { usePathname } from 'next/navigation';
import { TabNav } from '@radix-ui/themes';
import {
  ABOUT_LINK,
  CATALOG_LINK,
  CONTACT_LINK,
  GUIDE_BASE,
  HOME_LINK,
} from '@/constants/routing';
import Test from '@/components/layout/TabNav/NavigationMenuPopover';

const MainTabNav = () => {
  const pathName = usePathname();

  return (
    <TabNav.Root
      color='orange'
      className='hidden py-2 md:flex'
      justify='center'
    >
      <TabNav.Link href={HOME_LINK} active={pathName === HOME_LINK}>
        Home
      </TabNav.Link>
      <TabNav.Link href={CATALOG_LINK} active={pathName === CATALOG_LINK}>
        Catalog
      </TabNav.Link>
      <Test />
      <TabNav.Link href={ABOUT_LINK} active={pathName === ABOUT_LINK}>
        About
      </TabNav.Link>
      <TabNav.Link href={CONTACT_LINK} active={pathName === CONTACT_LINK}>
        Contact
      </TabNav.Link>
    </TabNav.Root>
  );
};

export default MainTabNav;
