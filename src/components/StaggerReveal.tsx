import { Children } from "react";
import { Reveal } from "./Reveal";

export function StaggerReveal({
  children,
  className = "",
  baseDelay = 0,
  stagger = 90,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  baseDelay?: number;
  stagger?: number;
  direction?: "up" | "left" | "right" | "fade";
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) => (
        <Reveal key={i} delay={baseDelay + i * stagger} direction={direction} scale>
          {child}
        </Reveal>
      ))}
    </div>
  );
}