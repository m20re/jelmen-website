import { Rnd } from 'react-rnd';

export default function AboutComponent({ onClose }) {
  return (
    <Rnd
      dragHandleClassName="draggable"
      className="overflow-hidden rounded-lg border border-black/20 shadow-lg"
      default={{ x: 0, y: 0, width: 320, height: 200 }}
    >
      {/* Top Bar */}
      <nav className="draggable flex cursor-grab gap-1 rounded-lg bg-black/90">
        {/* Title */}
        <span className="flex-1">About</span>
        {/* Close Button */}
        <span className="h-3 w-3 rounded-b-full border"></span>
      </nav>
    </Rnd>
  );
}
