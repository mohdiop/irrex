import desktopBg from "../assets/desktop-bg.png";
import mobileBg from "../assets/mobile-bg.png";

type BackgroundProps = {
  isDesktop: boolean;
};

export default function Background({ isDesktop }: BackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${isDesktop ? desktopBg : mobileBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}