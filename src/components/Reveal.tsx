import { useInView } from "../hooks/useInView";

const SPRING = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  scale?: boolean;
}) {
  const { ref, inView } = useInView();

  const translateMap: Record<string, string> = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    fade: "translateY(0px)",
  };

  const transformOut = `${translateMap[direction]}${scale ? " scale(0.97)" : ""}`;
  const transformIn = "translate(0,0) scale(1)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? transformIn : transformOut,
        filter: inView ? "blur(0px)" : "blur(6px)",
        transition: [
          `opacity 0.75s ${EASE_OUT} ${delay}ms`,
          `transform 0.75s ${SPRING} ${delay}ms`,
          `filter 0.6s ${EASE_OUT} ${delay}ms`,
        ].join(", "),
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}