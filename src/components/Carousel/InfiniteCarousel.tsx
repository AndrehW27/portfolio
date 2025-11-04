import React from "react";

interface IconItem {
  name: string;
  color: string;
  paths: React.ReactNode;
}

const icons: IconItem[] = [
  {
    name: "Home",
    color: "stroke-sky-400",
    paths: (
      <>
        <path d="M3 11.5L12 4l9 7.5" />
        <path d="M5 22V12h14v10" />
      </>
    ),
  },
  {
    name: "Star",
    color: "stroke-amber-400",
    paths: (
      <path d="M12 17.3l-6.16 3.24 1.18-6.88L2 9.76l6.92-1.01L12 2.5l3.08 6.25L22 9.76l-5.02 3.9 1.18 6.88z" />
    ),
  },
  {
    name: "Bell",
    color: "stroke-emerald-400",
    paths: (
      <>
        <path d="M15 17h5l-1.403-1.403C18.746 14.746 18 13.5 18 11.5V9a6 6 0 10-12 0v2.5c0 2 0.746 3.246-0.597 4.097L4 17h5" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </>
    ),
  },
  {
    name: "Heart",
    color: "stroke-rose-400",
    paths: (
      <path d="M20.8 4.6a5 5 0 00-7.07 0L12 6.34l-1.73-1.74a5 5 0 10-7.07 7.07L12 21l8.8-9.33a5 5 0 000-7.07z" />
    ),
  },
  {
    name: "Cog",
    color: "stroke-violet-400",
    paths: (
      <>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 008.6 15a1.65 1.65 0 00-1.82-.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82L4.21 7.12A2 2 0 016 4.29l.06.06A1.65 1.65 0 008 4.6a1.65 1.65 0 001.82-.33l.06-.06A2 2 0 0112.71 2l.06.06A1.65 1.65 0 0016 4.6a1.65 1.65 0 001.82.33l.06-.06A2 2 0 0120.29 6l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 00.33 1.82l.06.06A2 2 0 0120 14.71l-.06-.06A1.65 1.65 0 0019.4 15z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
];

const InfiniteCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-[#0f172a] py-6">
      <div className="flex animate-scroll whitespace-nowrap gap-4 hover:[animation-play-state:paused]">
        {[...icons, ...icons].map((icon, i) => (
          <div
            key={`${icon.name}-${i}`}
            className="flex-none w-14 h-14 bg-[#1e293b] rounded-xl flex items-center justify-center shadow-md"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-8 h-8 ${icon.color}`}
            >
              {icon.paths}
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
