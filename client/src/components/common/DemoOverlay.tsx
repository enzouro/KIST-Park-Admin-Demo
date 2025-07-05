import { useState, useEffect } from 'react';

export default function DemoOverlay() {
  const [opacity, setOpacity] = useState(0.12);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(0);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => setOpacity(0.12), 400);
      setScrollTimeout(timeout);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTimeout]);

  return (
    <div
      style={{
        position: 'fixed', // <-- changed from absolute to fixed
        top: 0, left: 0, width: '100vw', height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden',
        opacity,
        transition: 'opacity 0.4s ease-in-out',
        userSelect: 'none',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(-45deg)',
        }}
      >
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', marginTop: '2rem' }}>
            {Array.from({ length: 12 }).map((_, colIndex) => (
              <div key={colIndex} style={{ margin: '0 2rem' }}>
                <span
                  style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '120px',
                    opacity: 0.25,
                    letterSpacing: 2,
                  }}
                >
                  DEMO
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}