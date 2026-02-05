'use client';

import GalleryDropdown from './gallery_dropdown';
import LinksDropdown from './links_dropdown';

export default function Navbar() {
  return (
    <div className="relative flex justify-center gap-4 border-b-2 md:justify-end">
      <button>Contact Me!</button>
      <GalleryDropdown />
      <LinksDropdown />
    </div>
  );
}
