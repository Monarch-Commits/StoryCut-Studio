import Image from 'next/image';

export function HeroPortrait() {
  return (
    <div className="static bottom-0 z-80 flex w-full items-end justify-center overflow-hidden border md:absolute">
      <Image
        src="/Human.png"
        alt="Alex Rivera"
        width={1400}
        height={1400}
        priority
        className="mx-auto h-auto w-full max-w-sm object-contain sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      />
    </div>
  );
}
