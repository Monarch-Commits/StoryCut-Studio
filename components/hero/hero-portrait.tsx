import Image from 'next/image';

export function HeroPortrait() {
  return (
    <div className="relative flex w-full items-end justify-center lg:absolute lg:bottom-0 lg:z-50">
      <Image
        src="/Human.png"
        alt="Alex Rivera"
        width={1400}
        height={1400}
        priority
        className="h-auto w-full max-w-2xl object-contain"
      />
    </div>
  );
}
