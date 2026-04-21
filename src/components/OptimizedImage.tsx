import { useState } from "react";

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

  // Generate a simple blur placeholder
  const blurDataUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3E%3C/filter%3E%3Crect width='10' height='10' fill='%23888888' filter='url(%23blur)'/%3E%3C/svg%3E";

  // Detect WebP filename variants
  const getWebPSrc = (url: string) => {
    if (url.endsWith(".png")) return url.replace(/\.png$/i, ".webp");
    if (url.endsWith(".jpg")) return url.replace(/\.jpg$/i, ".webp");
    if (url.endsWith(".jpeg")) return url.replace(/\.jpeg$/i, ".webp");
    return null;
  };

  const webpSrc = getWebPSrc(src);

  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      {/* Blur placeholder (shown while loading) */}
      {!isLoaded && (
        <img
          src={blurDataUrl}
          alt="loading"
          className={`absolute inset-0 w-full h-full ${className}`}
          style={{ objectFit }}
          aria-hidden="true"
        />
      )}

      {/* Actual image with WebP support */}
      <picture>
        {webpSrc && (
          <source srcSet={srcSet ? srcSet.replace(/\.png|\.jpg|\.jpeg/g, ".webp") : webpSrc} type="image/webp" sizes={sizes} />
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ objectFit }}
          srcSet={srcSet}
          sizes={sizes}
        />
      </picture>
    </div>
  );
}

export default OptimizedImage;

