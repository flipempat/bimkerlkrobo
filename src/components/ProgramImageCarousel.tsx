import React, { useState, useEffect } from 'react';

interface ProgramImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
  aspectRatioClass?: string;
  overlayChildren?: React.ReactNode;
  showIndicators?: boolean;
}

export const ProgramImageCarousel: React.FC<ProgramImageCarouselProps> = ({
  images,
  alt,
  interval = 3500,
  className = '',
  aspectRatioClass = 'aspect-16/10',
  overlayChildren,
  showIndicators = true,
}) => {
  // Ensure we have at least one image
  const validImages = images && images.length > 0 ? images : ['https://res.cloudinary.com/ig4uk50k/image/upload/v1789968129/ylmupl2mz8vxvvruy5ay.webp'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (validImages.length <= 1) return;

    // Change image automatically
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [validImages.length, interval, isHovered]);

  return (
    <div
      className={`relative overflow-hidden bg-slate-950 ${aspectRatioClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides with Crossfade Animation */}
      {validImages.map((imgSrc, index) => (
        <div
          key={imgSrc + index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={imgSrc}
            alt={`${alt} - ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
        </div>
      ))}

      {/* Subtle Gradient Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20 z-10 pointer-events-none" />

      {/* Overlay Elements (Badges, Buttons, etc.) */}
      {overlayChildren && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {overlayChildren}
        </div>
      )}

      {/* Animated Indicators / Bars for Multi-Images */}
      {showIndicators && validImages.length > 1 && (
        <div className="absolute bottom-2.5 left-0 right-0 z-20 flex justify-center items-center gap-1.5 px-3 pointer-events-auto">
          {validImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Lihat gambar ke-${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-[#D4A017] shadow-xs'
                  : 'w-1.5 bg-white/50 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
