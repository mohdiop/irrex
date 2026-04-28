import { MoveRight } from "lucide-react";
import React from "react";

type ProductCardProps = {
  name: string;
  description: string;
  isAvailable: boolean;
  logoSrc?: string;
  onExplore?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  isAvailable,
  logoSrc,
  onExplore,
}) => {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300  backdrop-blur-sm w-full md:w-[350px]
        ${
          isAvailable
            ? "bg-primary-soft border-primary"
            : "bg-gray-100 border-gray-300 opacity-80"
        }`}
    >
        {isAvailable && (
            <div
                className="w-full h-1 relative top-0"
                style={{
                    background: "linear-gradient(to right, rgba(52,199,162,0) 0%, rgba(52,199,162,0.6) 40%, #34C7A2 50%, rgba(52,199,162,0.6) 60%, rgba(52,199,162,0) 100%)"
                }}
            />
        )}
      <div className="p-6">
        <div
            className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm mb-6
            ${
                isAvailable
                ? "text-primary border-primary border"
                : "bg-gray-200 text-gray-500"
            }`}
        >
            <span
            className={`w-2 h-2 rounded-full ${
                isAvailable ? "bg-primary" : "bg-gray-400"
            }`}
            />
            {isAvailable ? "Disponible maintenant" : "Bientôt disponible"}
        </div>

        <div className="w-14 h-14 p-2 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm overflow-hidden border border-gray-200">
            {logoSrc ? (
            <img
                src={logoSrc}
                alt={`${name} logo`}
                className="w-full h-full object-contain"
            />
            ) : (
            <span className="font-bold text-lg">N</span>
            )}
        </div>

        <h3 className="text-xl font-semibold mb-2">{name}</h3>

        <p className="text-gray-500 mb-6">{description}</p>

        {isAvailable ? (
            <button
                onClick={onExplore}
                className="group text-primary font-medium flex items-center gap-2 transition-all duration-200"
                >
                <span className="transition-all duration-200 group-hover:translate-x-0.5">
                    Explorer {name}
                </span>

                <MoveRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
        ) : (
            <p className="text-gray-500">En développement ...</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;