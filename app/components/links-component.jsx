'use client';

import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LinkComponent({ onClose }) {
  const LINKS = [
    {
      id: 1,
      name: 'instagram',
      link: '',
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      id: 2,
      name: 'Twitter',
      link: '',
      icon: <FontAwesomeIcon icon={faTwitter} />,
    },
  ];

  return (
    <>
      {LINKS.map(link => (
        <button
          key={link.id}
          className="inline-flex flex-col justify-center md:flex-row"
        >
          <span>{link.icon}</span>
          <span>{link.name}</span>
        </button>
      ))}
    </>
  );
}
