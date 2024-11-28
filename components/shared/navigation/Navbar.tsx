'use client';

import Link from 'next/link';
import SiteLogo from '@/components/shared/SiteLogo';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { RiMenu3Fill } from 'react-icons/ri';
import { Separator } from '@/components/ui/separator';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SignedIn, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className='bg-gray-50 shadow'>
      <div className='container'>
        <nav className='flex items-center justify-between py-3'>
          {/* Site Logo */}
          <Link
            href='/'
            onClick={sheetOpen ? () => setSheetOpen(false) : () => {}}
          >
            <SiteLogo />
          </Link>

          {/* Mobile Navigation */}
          <div className='md:hidden'>
            <Sheet
              open={sheetOpen}
              onOpenChange={setSheetOpen}
            >
              <SheetTrigger asChild>
                <RiMenu3Fill className='size-6 cursor-pointer' />
              </SheetTrigger>
              <SheetContent
                side='left'
                className='bg-gray-50'
              >
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href='/'
                      onClick={sheetOpen ? () => setSheetOpen(false) : () => {}}
                    >
                      <SiteLogo />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <Separator className='my-4 border-b border-gray-300' />

                <div className='flex flex-col gap-6'>
                  {navLinks.map((link) => {
                    const isActive =
                      (pathname.includes(link.route) &&
                        link.route.length > 1) ||
                      pathname === link.route;
                    return (
                      <Link
                        key={link._id}
                        href={link.route}
                        className={`${isActive ? 'text-blue-500 hover:text-blue-500' : 'text-muted-foreground transition-colors duration-300 hover:text-blue-500'} text-lg font-semibold`}
                        onClick={
                          sheetOpen ? () => setSheetOpen(false) : () => {}
                        }
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-4 md:flex'>
            {navLinks.map((link) => {
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;
              return (
                <Link
                  key={link._id}
                  href={link.route}
                  className={`${isActive ? 'text-blue-500 hover:text-blue-500' : 'text-muted-foreground transition-colors duration-300 hover:text-blue-500'} text-lg font-semibold`}
                >
                  {link.label}
                </Link>
              );
            })}

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
}
