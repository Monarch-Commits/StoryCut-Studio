'use client';

import Image from 'next/image';
import Link from 'next/link'; // Idinagdag ito
import { Plus, ArrowRight } from 'lucide-react'; // Idinagdag ang ArrowRight

export default function CreatorStory() {
  return (
    <section className="bg-background relative border-y py-16 text-white md:py-24 lg:py-32">
      {/* decorative plus icons */}
      <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 md:grid md:grid-cols-2 md:items-center">
        {/* IMAGE */}
        <div className="relative w-full text-center">
          <Image
            src="/About.png"
            alt="Creator"
            width={1000}
            height={1000}
            className="h-auto w-full border-b object-contain"
          />
          <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-primary text-xs tracking-widest uppercase md:text-sm">
              Creator Story
            </p>
            <h1 className="text-3xl leading-tight font-semibold md:text-5xl">
              The Mission <br />
              <span className="text-primary">Behind The Work</span>
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            I started this journey with a simple goal: to help creators,
            entrepreneurs, and businesses build digital experiences that truly
            make an impact.
          </p>

          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            Every project, every line of code, and every design is built with
            purpose — to create value, inspire growth, and leave a lasting
            impression.
          </p>

          {/* VIEW MORE LINK */}
          <div className="pt-2">
            <Link
              href="/about"
              className="group hover:text-primary inline-flex items-center gap-2 text-sm font-medium text-white transition-colors md:text-base"
            >
              View Full Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* signature block */}
          <div className="flex flex-col items-center gap-4 pt-4 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-primary font-medium">This isn’t just work.</p>
              <p className="font-semibold text-white">It’s purpose.</p>
            </div>

            <Image
              src="/Monarch1.svg"
              alt="Signature"
              width={120}
              height={60}
              className="h-auto w-28 md:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
