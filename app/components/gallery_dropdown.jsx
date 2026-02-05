'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export default function GalleryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const galleryOptions = [
    {
      id: 1,
      title: 'Nature',
      icon: <FontAwesomeIcon icon={faFolder} />,
    },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Gallery</button>
      {/* Allows exit anims to be played */}
      <AnimatePresence>
        {isOpen && (
          // defines keyframes
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="absolute top-full right-0 left-0 bg-yellow-600" // Add top-full
          >
            <div className="px-4 py-8">
              <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6">
                {galleryOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 rounded-xl bg-white/20 p-6 text-white transition-all hover:scale-105 hover:bg-white/30"
                  >
                    <div className="text-white">{option.icon}</div>
                    <span className="font-semibold">{option.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
