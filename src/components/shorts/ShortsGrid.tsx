import React from 'react';
import { ShortVideo } from './ShortVideo';
import type { Short } from '../../types';

interface ShortsGridProps {
  shorts: Short[];
}

export function ShortsGrid({ shorts }: ShortsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {shorts.map((short) => (
        <ShortVideo key={short.id} short={short} />
      ))}
    </div>
  );
}