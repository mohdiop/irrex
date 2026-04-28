import React from "react";

type WindowFrameProps = {
  title: string;
  src: string;
  alt?: string;
  className?: string;
};

const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  src,
  alt = "window content",
  className = "",
}) => {
  return (
    <div
      className={`rounded-sm overflow-hidden shadow-2xl border border-gray-200 bg-white ${className}`}
      style={{ maxWidth: "900px" }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#2b2b2b] text-white">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <div className="text-sm font-medium opacity-90">
          {title}
        </div>

        <div className="w-12" />
      </div>

      <div className="bg-gray-100">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default WindowFrame;