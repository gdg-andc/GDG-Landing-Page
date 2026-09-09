import { useState } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  wrapperClassName?: string;
}

export default function LazyImage({ src, alt, className, wrapperClassName, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { onAnimationStart, onDragStart, onDragEnd, onDrag, ...imgProps } = props as any;

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${wrapperClassName}`}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gray-200 animate-pulse z-10"
      />
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoaded(true)}
        className={`block w-full h-full object-cover ${className}`}
        {...imgProps}
      />
    </div>
  );
}
