import React, { forwardRef, ReactNode } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import Image from 'next/image';
import { expandedGuideItems } from '@/data/guideItems';

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  title: string;
  icon: ReactNode;
  children: React.ReactNode;
}

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, icon, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild ref={forwardedRef}>
        <a
          className={classNames(
            'block w-full rounded-md p-3 text-[15px] hover:bg-neutral-300',
            className
          )}
          {...props}
        >
          <div className='mb-[5px] flex gap-1 font-medium'>
            {icon}
            {title}
          </div>
          <p>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = 'ListItem';

const NavigationMenuPopover = () => {
  return (
    <NavigationMenu.Root className='flex justify-center'>
      <NavigationMenu.List className=''>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='relative mt-1.5 inline-flex items-center justify-center rounded-md px-4 py-1 text-sm text-gray-700 transition hover:bg-[#0000330f] hover:text-black'>
            Guide
            <Image
              src='icons/chevronDown.svg'
              alt='Arrow icon'
              className='mt-[1px]'
              width={20}
              height={20}
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='absolute left-0 top-0 w-full bg-neutral-200 sm:w-auto'>
            <ul
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
              className='w-[500px] grid-rows-3 gap-2.5 p-2'
            >
              {expandedGuideItems.map((item) => (
                <ListItem
                  key={item.href}
                  title={item.title}
                  icon={
                    <Image
                      width={20}
                      height={20}
                      src={item.icon}
                      alt={item.iconAlt}
                    />
                  }
                  href={item.href}
                  className={item.className}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className='top-full flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn'>
          <div className='relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-neutral-400' />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className='absolute left-0 top-full flex w-full justify-center'>
        <NavigationMenu.Viewport className='relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]' />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuPopover;
