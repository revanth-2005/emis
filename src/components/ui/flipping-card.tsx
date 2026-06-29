import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  /** Height of the card in px */
  height?: number;
  /** Width of the card in px */
  width?: number;
  /** Extra padding (px) around the card that still triggers the flip on hover */
  triggerPadding?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
  triggerPadding = 24,
}: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // Outer trigger zone — hovering or clicking anywhere here flips the card
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        padding: `${triggerPadding}px`,
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      {/* Perspective wrapper */}
      <div
        style={{
          perspective: "1000px",
          WebkitPerspective: "1000px",
          height: `${height}px`,
          width: `${width}px`,
        }}
      >
        {/* Flip card inner */}
        <div
          className={cn(
            "relative w-full h-full rounded-xl shadow-lg",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            WebkitTransform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
            WebkitTransition: "-webkit-transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl bg-white"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg) translate3d(0,0,0)",
              WebkitTransform: "rotateY(0deg) translate3d(0,0,0)",
            }}
          >
            {frontContent}
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl bg-white"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translate3d(0,0,0)",
              WebkitTransform: "rotateY(180deg) translate3d(0,0,0)",
            }}
          >
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
