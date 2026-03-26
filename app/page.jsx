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
    <div className="flex min-h-screen flex-col px-12 py-12">
      <ThemeToggle />
      <div className="flex grow items-center justify-center self-stretch">
        <nav className="flex flex-col items-start justify-center gap-3">
          {SECTIONS.map(section => (
            <button
              key={section.id}
              className="inline-flex h-18 w-40 items-center justify-start gap-2 text-xl"
              onClick={() => OpenWindow(section.id)}
            >
              <span className="max-h-20 max-w-14 rounded-xl border px-1 py-1">
                {section.icon}
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
  );
}
