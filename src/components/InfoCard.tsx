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
        relative flex items-start gap-4 p-6 rounded-2xl
        border backdrop-blur-sm
        ${className}
      `}
      style={{
        borderColor: `${color}40`, // bordure douce
        backgroundColor: `${color}1A`, // couleur + transparence (~10%)
      }}
    >

      {/* contenu */}
      <div className="relative flex-shrink-0 w-14 h-14 rounded-sm bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200">
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

      <div className="relative">
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