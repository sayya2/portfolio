'use client';
import { useState, useEffect, useRef } from 'react';

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef({});
  const total = slides.length;

  function goTo(n) {
    setCurrent((n + total) % total);
  }

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([i, v]) => {
      if (!v) return;
      Number(i) === current ? v.play().catch(() => {}) : v.pause();
    });
  }, [current]);

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <div key={i} className="carousel-slide">
            {slide.type === 'video' ? (
              <video
                ref={el => { videoRefs.current[i] = el; }}
                src={slide.src}
                muted
                loop
                playsInline
              />
            ) : (
              <img src={slide.src} alt={slide.alt || ''} />
            )}
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button className="carousel-btn prev" onClick={() => goTo(current - 1)}>&#8249;</button>
          <button className="carousel-btn next" onClick={() => goTo(current + 1)}>&#8250;</button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className="slide-counter">{current + 1} / {total}</div>
        </>
      )}
    </div>
  );
}
