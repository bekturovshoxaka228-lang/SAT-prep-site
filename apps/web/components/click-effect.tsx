"use client";

import { useEffect } from "react";

/**
 * Global Click Effect component.
 * Provides interactive tactile feedback and dynamic ripple animations
 * whenever any button or clickable element is pressed or activated via keyboard.
 */
export function ClickEffect() {
  useEffect(() => {
    // Selector for interactive button elements
    const buttonSelector =
      'button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"], .btn, .clickable-btn';

    const spawnRipple = (targetElement: HTMLElement, clientX?: number, clientY?: number) => {
      // Find closest button element
      const button = targetElement.closest<HTMLElement>(buttonSelector);
      if (!button) return;

      // Ignore disabled or non-interactive buttons, or exam option cards
      if (
        button.hasAttribute("disabled") ||
        button.getAttribute("aria-disabled") === "true" ||
        button.classList.contains("disabled") ||
        button.classList.contains("pointer-events-none") ||
        button.classList.contains("no-click-effect") ||
        button.classList.contains("quiz-option-btn") ||
        button.classList.contains("exam-choice-btn") ||
        button.hasAttribute("data-option-card")
      ) {
        return;
      }

      const rect = button.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      // Position context
      const computed = window.getComputedStyle(button);
      if (computed.position === "static") {
        button.style.position = "relative";
      }

      // Ensure overflow is clipped so ripple follows button border radius
      if (computed.overflow !== "hidden") {
        button.classList.add("overflow-hidden");
      }

      // Calculate gentle diameter, capped so large cards do not burst the screen
      const maxDim = Math.max(rect.width, rect.height);
      const diameter = Math.min(maxDim * 1.1, 160);
      const radius = diameter / 2;

      let x = 0;
      let y = 0;

      if (typeof clientX === "number" && typeof clientY === "number") {
        x = clientX - rect.left - radius;
        y = clientY - rect.top - radius;
      } else {
        // Center position for keyboard presses
        x = rect.width / 2 - radius;
        y = rect.height / 2 - radius;
      }

      const ripple = document.createElement("span");
      ripple.className = "prepsphere-click-ripple";
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      button.appendChild(ripple);

      const cleanup = () => {
        if (ripple.parentNode === button) {
          button.removeChild(ripple);
        }
      };

      ripple.addEventListener("animationend", cleanup, { once: true });
      setTimeout(cleanup, 600);
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Accept primary click / touch only
      if (e.button !== 0 && e.pointerType === "mouse") return;
      spawnRipple(e.target as HTMLElement, e.clientX, e.clientY);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger effect on Space or Enter for accessible keyboard navigation
      if (e.key !== "Enter" && e.key !== " ") return;
      if (e.repeat) return;

      const activeEl = document.activeElement as HTMLElement | null;
      if (activeEl) {
        spawnRipple(activeEl);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
