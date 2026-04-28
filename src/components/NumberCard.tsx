import React from "react";

type NumberCardProps = {
  number: string;
  label: string;
  color?: string;
  className?: string;
};

export const NumberCard: React.FC<NumberCardProps> = ({
  number,
  label,
  color = "#34C7A2",
  className = "",
}) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        p-6 rounded-2xl border backdrop-blur-sm
        shadow-sm transition-all duration-200
        hover:shadow-md hover:scale-[1.02]
        w-full md:w-[250px]
        ${className}
      `}
      style={{
        borderColor: `${color}40`,
        backgroundColor: `${color}1A`,
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-none text-primary">
        {number}
      </h1>

      <p className="mt-2 text-sm text-gray-600 text-center">
        {label}
      </p>
    </div>
  );
};