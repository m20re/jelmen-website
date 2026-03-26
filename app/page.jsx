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

  const OpenWindow = id => {
    if (id === currentWindow) return;
    setAsWindow(id);
  };

  const CloseWindow = () => {
    setAsWindow(0);
  };

  const SECTIONS = [
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
        className="overflow-hidden border border-black/20 shadow-lg"
        default={{ x: 0, y: 0, width: 400, height: 300 }}
      >
        {/* Title Bar */}
        <nav className="flex items-center justify-center gap-2 border-b border-black/40 bg-gray-200 px-3 py-1 select-none active:cursor-grabbing dark:bg-gray-700">
          <div
            onClick={CloseWindow}
            className="group flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border"
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
      <div className="flex grow items-center justify-center">
        <nav className="flex flex-col items-start justify-center gap-3">
          {SECTIONS.map((section, index) => (
            <button
              key={section.id}
              className="inline-flex h-18 w-40 items-center justify-start gap-2 text-xl"
              onClick={() => OpenWindow(section.id)}
            >
              <span className="max-h-20 max-w-14 rounded-xl border px-1 py-1">
                {section.icon}
              </span>
              <span className="font-bold">{section.text}</span>
            </button>
          ))}
        </nav>
        <main className="inline-flex grow items-center justify-center overflow-hidden">
          <div>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}
