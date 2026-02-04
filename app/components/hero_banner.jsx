import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div>
      <Image
        className=""
        src={'/sonic-evil-sonic.gif'}
        width={500}
        height={500}
        alt="Placeholder"
      ></Image>
      <h1 className="text-4xl font-bold">Name Here</h1>
    </div>
  );
}
