import React from 'react';

const HeroSection = () => {
  return (
    <section className='relative flex items-center justify-center overflow-hidden py-20 md:py-32'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
      </div>

      <div className='relative z-10 mx-auto max-w-4xl px-4 text-center text-white'>
        <h1 className='mb-6 text-4xl font-bold sm:text-5xl md:text-6xl'>
          <span className='text-yellow-400'>Gotta Catch</span> Em All!
        </h1>
        <p className='mb-8 text-lg sm:text-xl md:text-2xl '>
          Pick your team, plan your battles, and show the world what you're made
          of.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
