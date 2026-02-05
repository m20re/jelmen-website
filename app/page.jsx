'use client';

import Image from 'next/image';
import Navbar from '@/components/navbar';
import HeroBanner from '@/components/hero_banner';

// found at "/"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col pt-6 pb-0 md:px-4 lg:px-8">
      <nav>
        <Navbar />
      </nav>
      <main className="grow">
        <HeroBanner />
        <div id="about-section" className="flex gap-2.5">
          <Image
            className=""
            src={'/sonic-evil-sonic.gif'}
            width={250}
            height={250}
            alt="Placeholder-2"
          ></Image>
          <p>Hi! My name is ..., and I'm not a cool person!</p>
        </div>
      </main>
      <footer className="inline-flex justify-center bg-gray-500">
        <p>Back to Top</p>
      </footer>
    </div>
  );
}
