import type React from "react";

type MiniContactCardProps = {
  icon: React.ElementType;
};

export const MiniContactCard: React.FC<MiniContactCardProps> = ({
  icon: IconComponent,
}) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 border border-primary">
      <IconComponent className="w-6 h-6 text-gray-500" />
    </div>
  );
};