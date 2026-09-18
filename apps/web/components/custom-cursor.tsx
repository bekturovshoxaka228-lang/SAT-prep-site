"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Aqua Blue Circle Custom Cursor component.
 * Provides a high-performance, smooth circular cursor in aqua blue (#00A8E8)
 * with an inner dot, a smooth trailing ring, and interactive hover animations.
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const targetPosRef = useRef({ x: -100, y: -100 });
  const trailingPosRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices that have a fine mouse pointer
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsEnabled(true);
    document.body.classList.add("custom-aqua-cursor");

    const onMouseMove = (e: MouseEvent) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, [role="button"], input, select, textarea, label, summary, .clickable, .quiz-option-btn, .btn, [data-clickable]'
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Smooth lerp loop for the trailing aqua circle
    const loop = () => {
      const speed = 0.24;
      trailingPosRef.current.x += (targetPosRef.current.x - trailingPosRef.current.x) * speed;
      trailingPosRef.current.y += (targetPosRef.current.y - trailingPosRef.current.y) * speed;

      setTrailingPos({
        x: trailingPosRef.current.x,
        y: trailingPosRef.current.y,
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("custom-aqua-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Central Aqua Blue Pointer Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[999999] transition-opacity duration-150"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className={`rounded-full bg-[#00A8E8] shadow-[0_0_8px_#00A8E8] transition-transform duration-100 ${
            isClicked ? "scale-50" : isHovered ? "scale-125" : "scale-100"
          }`}
          style={{ width: 5, height: 5 }}
        />
      </div>

      {/* Trailing Aqua Blue Circle Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[999998] transition-opacity duration-200"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ease-out flex items-center justify-center ${
            isHovered
              ? "w-9 h-9 border-[1.5px] border-[#00A8E8] bg-[#00A8E8]/10 shadow-[0_0_14px_rgba(0,168,232,0.35)] scale-110"
              : isClicked
              ? "w-5 h-5 border-[1.5px] border-[#00E5FF] bg-[#00A8E8]/25 scale-90"
              : "w-7 h-7 border-[1.5px] border-[#00A8E8]/70 bg-[#00A8E8]/5 shadow-[0_0_8px_rgba(0,168,232,0.2)]"
          }`}
        />
      </div>
    </>
  );
}
