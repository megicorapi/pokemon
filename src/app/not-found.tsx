import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <Image
            src='/images/broken-pokeball.png'
            alt='Broken Pokeball'
            width={224}  
            height={224} 
            className='drop-shadow-glow animate-flicker text-red-500 md:w-56'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <a href='/'>Back to home</a>
        </div>
      </section>
    </main>
  );
}
