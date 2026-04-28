import type { LucideIcon } from "lucide-react";
import React from "react";

type InfoCardProps = {
  title: string;
  description: string;

  icon?: string;
  alt?: string;

  lucideIcon?: LucideIcon;

  color?: string;
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  alt = "icon",
  lucideIcon: LucideIconComponent,
  color = "#34C7A2",
  className = "",
}) => {
  return (
    <div
      className={`
        flex items-start gap-4 p-6 rounded-2xl border shadow-sm
        ${className}
      `}
      style={{
        borderColor: color,
        backgroundColor: `${color}10`,
      }}
    >
      <div
        className="flex-shrink-0 w-14 h-14 rounded-sm bg-white flex items-center justify-center shadow-sm border border-gray-300"
      >
        {icon ? (
          <img
            src={icon}
            alt={alt}
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        ) : LucideIconComponent ? (
          <LucideIconComponent
            className="w-7 h-7"
            style={{ color }}
          />
        ) : null}
      </div>

      <div>
        <h3 className="text-md text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 mt-1 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;