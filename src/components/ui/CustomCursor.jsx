import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'text'
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorRef = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device (mobile/tablet fallback)
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(hasTouch);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, isVisible]);

  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;
    
    const updatePosition = () => {
      // Easing speed interpolation: 0.15 factor for smooth transition
      const ease = 0.15;
      
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    animationFrameId = requestAnimationFrame(updatePosition);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer, iframe');
      const isText = target.closest('p, h1, h2, h3, h4, h5, h6, span, li, strong, em, label, code, blockquote');

      if (isInteractive) {
        setCursorType('hover');
      } else if (isText) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  // Compute cursor styles based on state
  let cursorSize = 16;
  let cursorBg = 'transparent';
  let cursorBorder = '2px solid #10B981';
  let cursorShadow = 'none';

  if (isClicked) {
    cursorSize = 12;
  } else if (cursorType === 'hover') {
    cursorSize = 36;
    cursorBg = 'rgba(16, 185, 129, 0.15)';
    cursorShadow = '0 0 15px rgba(16, 185, 129, 0.5)';
  } else if (cursorType === 'text') {
    cursorSize = 12;
  }

  return (
    <div
      ref={cursorRef}
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        border: cursorBorder,
        backgroundColor: cursorBg,
        boxShadow: cursorShadow,
        borderRadius: '50%',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        marginLeft: `-${cursorSize / 2}px`,
        marginTop: `-${cursorSize / 2}px`,
        transition: 'width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.2s ease-out, border 0.2s ease-out, box-shadow 0.2s ease-out, margin 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        willChange: 'transform'
      }}
    />
  );
}
