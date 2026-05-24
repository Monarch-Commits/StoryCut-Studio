'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const creatorStory = {
  name: 'Alexandra Chen',
  title: 'Photography & Visual Storyteller',
  bio: 'With over 8 years of experience, I specialize in capturing authentic moments and turning them into compelling visual narratives that resonate with audiences worldwide.',
  image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop',
  stats: [
    { label: 'Videos Created', value: '250+' },
    { label: 'Students Taught', value: '15K+' },
    { label: 'Years Experience', value: '8+' },
  ],
  highlights: [
    'Certified Professional Photographer',
    'Featured in National Geographic',
    'International Award Winner',
    'Published Author',
  ],
};

export default function CreatorStory() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28 lg:py-36">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 -mt-48 -mr-48 h-96 w-96 rounded-full bg-slate-800/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-48 -ml-48 h-96 w-96 rounded-full bg-slate-800/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-slate-400 uppercase">
            Creator Story
          </span>
        </div>

        {/* Main Layout - Asymmetric */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Image */}
          <div
            className="lg:col-span-5"
            style={{
              animation: 'slideInLeft 0.8s ease-out',
            }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={creatorStory.image}
                alt={creatorStory.name}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-2xl border border-slate-700/50" />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="lg:col-span-7"
            style={{ animation: 'slideInRight 0.8s ease-out' }}
          >
            {/* Name and Title */}
            <div className="mb-8">
              <h2 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
                {creatorStory.name}
              </h2>
              <p className="text-lg font-medium text-slate-400">
                {creatorStory.title}
              </p>
            </div>

            {/* Bio */}
            <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
              {creatorStory.bio}
            </p>

            {/* Stats Grid */}
            <div className="mb-12 grid grid-cols-3 gap-6 border-y border-slate-800/50 py-8">
              {creatorStory.stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both`,
                  }}
                >
                  <div className="mb-1 text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <p className="text-xs tracking-wider text-slate-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-10">
              <h3 className="mb-5 text-sm font-semibold tracking-widest text-slate-400 uppercase">
                Credentials & Achievements
              </h3>
              <ul className="space-y-3">
                {creatorStory.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center text-slate-300"
                    style={{
                      animation: `slideInLeft 0.5s ease-out ${0.3 + index * 0.08}s both`,
                    }}
                  >
                    <div className="mr-3 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span className="text-sm md:text-base">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:shadow-xl hover:shadow-white/10">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-slate-900">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: Featured Work Preview */}
        <div className="mt-24 border-t border-slate-800/50 pt-20">
          <div className="mb-10">
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">
              Featured Work
            </h3>
            <p className="text-slate-400">Recent projects and collaborations</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.4 + item * 0.1}s both`,
                }}
              >
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-slate-800">
                  <Image
                    src={`https://images.unsplash.com/photo-${1500000000000 + item * 1000000}?q=80&w=800&auto=format&fit=crop`}
                    alt={`Work ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full border-2 border-white p-3">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-white transition-colors group-hover:text-slate-300">
                  Project {item}
                </h4>
                <p className="text-sm text-slate-500">Category • Year</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
