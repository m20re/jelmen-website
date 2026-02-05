'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function LinksDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const linkOptions = [
    {
      id: 1,
      title: 'Instagram',
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Links</button>

      {/* Ensures exit anims are played */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="absolute top-full right-0 left-0 bg-green-600"
          >
            <div className="px-4 py-8">
              <div className="mx-auto grid grid-cols-3 gap-6">
                {linkOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 rounded-xl bg-white/30 transition-all hover:scale-105 hover:bg-white/40"
                  >
                    <div>{option.icon}</div>
                    <div>{option.title}</div>
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
