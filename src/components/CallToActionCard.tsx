import React from "react";

type CallToActionCardProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  onClick?: () => void;
};

export const CallToActionCard: React.FC<CallToActionCardProps> = ({
  title = "Prêt à essayer Nafa Pro ?",
  description = "Contactez-nous pour une démonstration gratuite.",
  buttonLabel = "Demander une démo",
  onClick,
}) => {
  return (
    <section
      className="w-full bg-primary text-white rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md"
    >
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm sm:text-base text-white/90 max-w-md">
        {description}
      </p>

        <button
            onClick={onClick}
            className="btn btn-white px-6 mt-4 py-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md group"
        >
            {buttonLabel}
        </button>
    </section>
  );
};