'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faPaintbrush,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import AboutComponent from './components/about-component';

// found at "/"

export default function Page() {
  // adds page reloading
  const [isOpen, setIsOpen] = useState(false);
  const buttons = [
    {
      id: 1,
      text: 'About',
      icon: <FontAwesomeIcon icon={faFaceSmile} size="2xl" />,
      component: AboutComponent,
    },
    {
      id: 2,
      text: 'Work',
      icon: <FontAwesomeIcon icon={faPaintbrush} size="2xl" />,
    },
    {
      id: 3,
      text: 'Links',
      icon: <FontAwesomeIcon icon={faLink} size="2xl" />,
    },
    {
      id: 4,
      text: 'Process',
      icon: (
        <Image
          src={'/skeleton-spinning.gif'}
          width={50}
          height={50}
          alt="spinny-guy"
        ></Image>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen px-12 py-12">
      <nav className="flex flex-col place-content-around">
        {buttons.map((button, index) => (
          <button
            key={button.id}
            className="inline-flex items-center gap-2 text-xl"
          >
            <span className="rounded-xl border px-1 py-1">{button.icon}</span>
            <span className="font-bold">{button.text}</span>
          </button>
        ))}
      </nav>
      <main className="inline-flex grow items-center justify-center">
        <Image
          src={'/skeleton-mad-skeleton.gif'}
          width={500}
          height={500}
          alt="Placeholder"
        ></Image>
      </main>
    </div>

    // <div className="flex min-h-screen flex-col pt-6 pb-0 md:px-4 lg:px-8">
    //   <nav>
    //     <Navbar />
    //   </nav>
    //   <main className="grow">
    //     <HeroBanner />
    //     <div id="about-section" className="flex gap-2.5">
    //       <Image
    //         className=""
    //         src={'/sonic-evil-sonic.gif'}
    //         width={250}
    //         height={250}
    //         alt="Placeholder-2"
    //       ></Image>
    //       <p>Hi! My name is ..., and I'm not a cool person!</p>
    //     </div>
    //   </main>
    //   <footer className="inline-flex justify-center bg-gray-500">
    //     <p>Back to Top</p>
    //   </footer>
    // </div>
  );
}
