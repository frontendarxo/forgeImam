import { useEffect, useRef, useState } from "react";


const LazyImage= ({ src, alt = '', className }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // больше не следим
          }
        });
      },
      {
        rootMargin: '0px 0px 200px 0px', // предварительная загрузка
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ''}
      data-src={src}
      alt={alt}
      className={className}
    />
  );
};

export default LazyImage;