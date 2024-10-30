import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import Link from 'next/link';
import { GUIDE_BENEFITS_LINK } from '@/constants/routing';

const SideMenuAccordion = () => (
  <Accordion.Root type='single' defaultValue='item-1' collapsible>
    <AccordionItem value='item-1'>
      <AccordionTrigger className='group flex h-[45px] w-full cursor-pointer items-center justify-between bg-white px-5'>
        Is it accessible
      </AccordionTrigger>
      <AccordionContent className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown text-md overflow-hidden'>
        <Link href={GUIDE_BENEFITS_LINK} className='px-2 py-2'>
          Benefits
        </Link>
        <div className='px-2 py-4'>
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

export default SideMenuAccordion;
