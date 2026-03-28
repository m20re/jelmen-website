'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faPaintbrush,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { Rnd } from 'react-rnd';
import AboutComponent from './components/about-component';
import ThemeToggle from './components/theme-toggle';

// found at "/"

export default function Page() {
  // "0" acts as the homepage
  const [currentWindow, setAsWindow] = useState(0);
  const [animState, setAnimState] = useState('idle');

  const SECTIONS = [
    {
      id: 1,
      title: 'About',
      icon: <FontAwesomeIcon icon={faFaceSmile} size="2xl" />,
      component: AboutComponent,
    },
    {
      id: 2,
      title: 'Work',
      icon: <FontAwesomeIcon icon={faPaintbrush} size="2xl" />,
    },
    {
      id: 3,
      title: 'Links',
      icon: <FontAwesomeIcon icon={faLink} size="2xl" />,
    },
    {
      id: 4,
      title: 'Process',
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

  const SUBSECTIONS = [
    {
      id: 1,
    },
  ];

  // defines the different animation states
  const animClass = {
    idle: '',
    out: 'animate-slide-out-right',
    in: 'animate-slide-in-right',
  }[animState];

  const OpenWindow = id => {
    if (id === currentWindow) return;
    setAnimState('out');
    setTimeout(() => {
      setAsWindow(id);
      setAnimState('in');
      setTimeout(() => setAnimState('idle'), 200);
    }, 200);
  };

  const CloseWindow = () => {
    setAnimState('out');
    setTimeout(() => {
      setAsWindow(0);
      setAnimState('idle');
    }, 200);
  };

  // renders window specific content
  const renderContent = () => {
    if (currentWindow === 0) {
      return (
        <Image
          src={'/skeleton-mad-skeleton.gif'}
          width={500}
          height={500}
          alt="Placeholder"
        ></Image>
      );
    }

    // if not the main window, find the section to be rendered
    const section = SECTIONS.find(s => s.id === currentWindow);
    const Window = section?.component;

    return (
      <Rnd
        disableDragging
        enableResizing={false}
        position={{ x: 0, y: 0 }}
        size={{ width: '100%', height: '100%' }}
        className="overflow-hidden border border-black/20 shadow-lg"
        default={{ x: 0, y: 0, width: 400, height: 300 }}
      >
        {/* Title Bar */}
        <nav className="flex items-center justify-center gap-2 border-b border-black/40 bg-gray-200 px-3 py-1 select-none active:cursor-grabbing dark:bg-gray-700">
          <span className="ml-4.5 flex-1 text-center text-sm">
            {section.title}
          </span>
          <div
            onClick={CloseWindow}
            className="group flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-red-500"
          >
            <span className="hidden text-[9px] leading-none font-bold text-red-900 group-hover:block">
              ✕
            </span>
          </div>
        </nav>

        {/* Content */}
        <div className="h-full bg-white p-5 dark:bg-gray-900">
          {Window ? (
            <Window />
          ) : (
            <p className="text-sm text-gray-400">
              {section?.text} - In development
            </p>
          )}
        </div>
      </Rnd>
    );
  };

  return (
    <div className="flex min-h-screen flex-col gap-2 px-4 py-4 md:gap-0 md:px-12 md:py-12">
      <ThemeToggle />
      <div className="flex grow flex-col items-center gap-4 self-stretch md:flex-row md:justify-center">
        <nav className="flex w-full flex-row flex-nowrap items-center justify-around gap-4 md:w-auto md:flex-col md:items-start md:justify-center">
          {SECTIONS.map(section => (
            <button
              key={section.id}
              className="md:flex-flex-nowrap inline-flex h-16 w-auto flex-wrap items-center justify-center text-lg md:h-18 md:w-40 md:justify-start md:gap-2 md:text-xl"
              onClick={() => OpenWindow(section.id)}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border p-1 md:h-14 md:w-14">
                <div className="scale-65 md:scale-100">{section.icon}</div>
              </span>
              <span className="font-bold">{section.title}</span>
            </button>
          ))}
        </nav>
        <main className="relative grow self-stretch overflow-hidden">
          <div
            className={`absolute inset-0 flex items-center justify-center ${animClass}`}
          >
            {renderContent()}
          </div>
        </main>
      </div>
    </div>

    // return (
    //   // Reduced padding on mobile (px-4) vs desktop (px-12)
    //   <div className="flex min-h-screen flex-col px-4 py-8 md:px-12 md:py-12">
    //     <ThemeToggle />

    //     {/* 1. Change flex-col (mobile) to flex-row (desktop)
    //         2. Items start (mobile) to items-center (desktop)
    //     */}
    //     <div className="flex flex-col md:flex-row grow items-center md:justify-center self-stretch gap-8">

    //       {/* 1. Navigation: Row on mobile, Column on desktop
    //           2. Centered on mobile, Start-aligned on desktop
    //       */}
    //       <nav className="flex flex-row md:flex-col flex-wrap items-center justify-center md:items-start gap-3 w-full md:w-auto">
    //         {SECTIONS.map(section => (
    //           <button
    //             key={section.id}
    //             // Adjusted width: auto on mobile so they can sit side-by-side, fixed w-40 on desktop
    //             className="inline-flex h-16 md:h-18 w-auto md:w-40 items-center justify-start gap-2 text-lg md:text-xl"
    //             onClick={() => OpenWindow(section.id)}
    //           >
    //             <span className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-xl border p-1">
    //               {/* Scale down icons slightly for mobile if needed */}
    //               <div className="scale-75 md:scale-100">
    //                  {section.icon}
    //               </div>
    //             </span>
    //             <span className="font-bold">{section.title}</span>
    //           </button>
    //         ))}
    //       </nav>

    //       {/* Main content area */}
    //       <main className="relative grow self-stretch w-full overflow-hidden min-h-[400px]">
    //         <div
    //           className={`absolute inset-0 flex items-center justify-center ${animClass}`}
    //         >
    //           {renderContent()}
    //         </div>
    //       </main>
    //     </div>
    //   </div>
    // );
  );
}
