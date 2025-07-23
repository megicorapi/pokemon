'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTeam } from '@/context/TeamContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { team } = useTeam();
  const teamCount = team.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full bg-white'>
      <div className='mx-auto px-6 sm:px-8 lg:px-10'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <img
              src='/svg/logo.svg'
              alt='Pokémon Logo'
              className='h-auto w-20'
            />
          </Link>

          {/* Desktop navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                href='/'
                className='rounded-md px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-blue-300'
              >
                Home
              </Link>
              <Link
                href='/team'
                className='relative rounded-md px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-blue-300'
              >
                Team
                {teamCount > 0 && (
                  <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
                    {teamCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='transition-color rounded-full bg-blue-200 p-2 text-white'
              aria-label='Toggle Menu'
            >
              {!isMenuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 9h16.5m-16.5 6.75h16.5'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='space-y-1 border-t border-blue-300 bg-blue-300 px-2 pb-3 pt-2'>
          <Link
            href='/'
            onClick={() => setIsMenuOpen(false)}
            className='block rounded-md px-3 py-2 text-base font-medium text-white transition-colors hover:bg-blue-500'
          >
            Home
          </Link>
          <Link
            href='/team'
            onClick={() => setIsMenuOpen(false)}
            className='relative block rounded-md px-3 py-2 text-base font-medium text-white transition-colors hover:bg-blue-500'
          >
            <div className='flex items-center justify-between'>
              <span>Team</span>
              {teamCount > 0 && (
                <span className='flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
                  {teamCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
