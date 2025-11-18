'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'bg-gray-800/50 animate-pulse';
  
  const variantClasses = {
    text: 'h-4 rounded',
    rectangular: 'h-32 rounded-xl',
    circular: 'rounded-full',
    card: 'h-64 rounded-xl',
  };

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
      <Skeleton variant="rectangular" className="h-48" />
      <div className="p-6 space-y-4">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-full" />
        <Skeleton variant="text" className="w-full" />
        <div className="flex gap-2">
          <Skeleton variant="text" className="w-16 h-6" />
          <Skeleton variant="text" className="w-16 h-6" />
          <Skeleton variant="text" className="w-16 h-6" />
        </div>
      </div>
    </div>
  );
}

export function SkillCategorySkeleton() {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
      <Skeleton variant="text" className="w-1/2 mb-6 h-6" />
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <Skeleton variant="text" className="w-1/3 h-4" />
              <Skeleton variant="text" className="w-12 h-4" />
            </div>
            <Skeleton variant="text" className="w-full h-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
