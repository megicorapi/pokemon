import HeroSection from '@/components/Hero';

export default function HomePage() {
  return (
    <main className='relative min-h-screen'>
      <HeroSection />
      <footer className='absolute bottom-2 w-full text-center text-gray-700'>
        © {new Date().getFullYear()} By Megi Corapi
      </footer>
    </main>
  );
}
