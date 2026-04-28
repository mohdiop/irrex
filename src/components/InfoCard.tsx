import React from "react";

type InfoCardProps = {
  title: string;
  description?: string | null;
  icon?: string;
  alt?: string;

  iconComponent?: React.ElementType;

  color?: string;
  textColor?: string;
  bgTransparent?: boolean;
  bgOpacity?: number; // 0 → 1
  className?: string;
};

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const toHexAlpha = (opacity: number) => {
  const alpha = Math.round(clamp(opacity) * 255);
  return alpha.toString(16).padStart(2, "0");
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description = null,
  icon,
  alt = "icon",
  iconComponent: IconComponent,
  color = "#34C7A2",
  textColor = "#111827",
  bgTransparent = true,
  bgOpacity = 0.1,
  className = "",
}) => {
  const hasDescription = Boolean(description);
  const hasIcon = Boolean(icon || IconComponent);

  const backgroundColor = bgTransparent
    ? `${color}${toHexAlpha(bgOpacity)}`
    : color;

  return (
    <div
      className={`
        relative flex gap-4 rounded-2xl border backdrop-blur-sm
        transition-all duration-200
        ${hasDescription ? "p-6 min-h-[96px]" : "p-4 min-h-[64px] items-center"}
        ${className}
      `}
      style={{
        borderColor: `${color}40`,
        backgroundColor,
      }}
    >
      {/* Icon */}
      {hasIcon && (
        <div
          className={`
            relative flex-shrink-0 rounded-sm bg-white/80
            backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200
            ${hasDescription ? "w-14 h-14" : "w-10 h-10"}
          `}
        >
          {icon ? (
            <img
              src={icon}
              alt={alt}
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
          ) : IconComponent ? (
            <IconComponent
              className="w-6 h-6"
              style={{ color }} // 🔥 prend la couleur de la card
            />
          ) : null}
        </div>
      )}

      {/* Content */}
      <div className={hasDescription ? "" : "flex items-center"}>
        {hasDescription ? (
          <>
            <h3
              className="text-md leading-snug font-semibold"
              style={{ color: textColor }}
            >
              {title}
            </h3>
            <p className="mt-1 leading-relaxed text-sm text-gray-500">
              {description}
            </p>
          </>
        ) : (
          <p
            className="text-md font-semibold leading-snug"
            style={{ color: textColor }}
          >
            {title}
          </p>
        )}
      </div>
    </div>
  );
};

export default InfoCard;