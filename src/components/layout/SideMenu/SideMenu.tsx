import React from 'react';
import { Dialog, VisuallyHidden } from '@radix-ui/themes';
import Image from 'next/image';
import SideMenuAccordion from '@/components/layout/SideMenuAccordion/SideMenuAccordion';

const SideMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Title>
        <VisuallyHidden>Menu</VisuallyHidden>
      </Dialog.Title>
      <Dialog.Trigger>
        <Image
          src='/icons/burgericon.svg'
          alt='Burger menu'
          height={40}
          width={40}
          className='mt-3 cursor-pointer md:hidden'
        />
      </Dialog.Trigger>

      <Dialog.Content className='data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right fixed right-0 top-0 flex h-full w-3/5 max-w-64 flex-col rounded-none bg-white p-4 shadow-lg'>
        <Dialog.Close className='mr-3 mt-3 self-end'>
          <Image
            src='/icons/close.svg'
            alt='Close button'
            height={30}
            width={30}
            className='cursor-pointer'
          />
        </Dialog.Close>
        <Dialog.Description></Dialog.Description>
        <SideMenuAccordion />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default SideMenu;
