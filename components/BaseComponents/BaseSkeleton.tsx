"use client";
import { Skeleton } from "primereact/skeleton";

interface BaseSkeletonProps {
  imageHeight?: string;
  imageRadius?: string;
  lines?: number;
}

export default function BaseSkeleton({
  imageHeight = "280px",
  imageRadius = "14px",
  lines = 2,
}: BaseSkeletonProps) {
  return (
    <div className="space-y-4">
      <Skeleton
        height={imageHeight}
        className={`rounded-[${imageRadius}]`}
      />

      {[...Array(lines)].map((_, i) => (
        <Skeleton
          key={i}
          width={`${80 - i * 20}%`}
          height="16px"
        />
      ))}
    </div>
  );
}
