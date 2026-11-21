import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const t1 = window.setTimeout(() => setProgress(55), 220);
    const t2 = window.setTimeout(() => setProgress(100), 620);
    const t3 = window.setTimeout(() => onComplete(), 1050);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen w-full bg-[#F97316] flex flex-col items-center justify-center px-6 select-none">
      <h1 className="font-inter font-black text-white text-5xl sm:text-7xl md:text-8xl tracking-tight text-center mb-14 leading-tight">
        Loading
        <br />
        Website
      </h1>

      <div className="w-full max-w-4xl h-12 sm:h-16 bg-white border border-black rounded-[25px] overflow-hidden p-0">
        <div
          className="h-full bg-[#15FF00] rounded-[25px] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        type="button"
        onClick={onComplete}
        className="mt-8 font-abeezee text-sm text-white/90 hover:text-white underline cursor-pointer"
      >
        Skip loading
      </button>
    </div>
  );
}
