import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "scale-down";
  priority?: boolean;
  srcSet?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "w-full h-auto",
  objectFit = "cover",
  priority = false,
  srcSet,
  sizes,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Preload image to ensure it loads before showing
  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  // Generate a simple blur placeholder
  const blurDataUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3E%3C/filter%3E%3Crect width='10' height='10' fill='%23888888' filter='url(%23blur)'/%3E%3C/svg%3E";

  return (
    <div className={`relative overflow-hidden bg-muted ${className}`} style={{ objectFit }}>
      {/* Blur placeholder (shown while loading) */}
      {!isLoaded && (
        <img
          src={blurDataUrl}
          alt="loading"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit }}
          aria-hidden="true"
        />
      )}

      {/* Actual image - always rendered, visibility controlled by opacity */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`w-full h-full transition-opacity duration-300 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectFit }}
        srcSet={srcSet}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
      />

      {/* Fallback for broken images */}
      {hasError && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}

export default OptimizedImage;

