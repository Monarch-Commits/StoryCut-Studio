'use client';

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  {
    value: '2.3M+',
    numeric: 2.3,
    suffix: 'M+',
    decimals: 1,
    label: 'SUBSCRIBERS',
  },
  {
    value: '180M+',
    numeric: 180,
    suffix: 'M+',
    decimals: 0,
    label: 'TOTAL VIEWS',
  },
  { value: '500+', numeric: 500, suffix: '+', decimals: 0, label: 'VIDEOS' },
  { value: '8+', numeric: 8, suffix: '+', decimals: 0, label: 'YEARS' },
];

// Helper Component para sa umaakyat na numero
function AnimatedNumber({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest) => latest.toFixed(decimals) + suffix,
  );
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      // Magbibilang mula 0 hanggang sa target value sa loob ng 2 segundo gamit ang easeOut cubic
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.215, 0.61, 0.355, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsGrid() {
  const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;

  return (
    <div className="z-100 grid w-full grid-cols-2 gap-4 p-2 md:max-w-md md:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // May kaunting incremental delay bawat box batay sa index para sa staggered entrance
          transition={{ duration: 0.6, delay: index * 0.1, ease: easeOutCubic }}
          viewport={{ once: true }}
          className={`flex flex-col items-center justify-center xl:items-start ${
            index !== 0 ? 'md:border-border/50 pl-4 md:border-l' : ''
          } `}
        >
          {/* Dito tinatawag ang animated counter */}
          <p className="text-foreground text-2xl font-bold">
            <AnimatedNumber
              value={stat.numeric}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
          </p>

          <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-[10px] tracking-wider whitespace-nowrap">
            {stat.label}
            <span className="bg-primary h-1 w-1 rounded-full" />
          </p>
        </motion.div>
      ))}
    </div>
  );
}
