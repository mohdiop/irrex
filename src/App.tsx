import { Menu, MoveRight } from "lucide-react";
import LogoIcon from "./components/LogoIcon"
import LogoName from "./components/LogoName"
import { useIsDesktop } from "./hooks/useIsDesktop";
import { useState } from "react";
import Background from "./components/ParallaxBg";

function App() {

  const isDesktop = useIsDesktop();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  }

  return (
    <>
      <Background
        isDesktop={isDesktop}
      />
      <div
        className="w-full min-h-screen flex flex-col items-center">
        <div className="p-4 bg-white w-full justify-between flex flex-row border-b border-gray-200 h-16 fixed top-0 left-0 z-10">
          <div className="flex items-center gap-2">
            <LogoIcon size={isDesktop ? 38 : 28}></LogoIcon>
            <LogoName size={isDesktop ? 200 : 130} color="black" />
          </div>
          {isDesktop && (
            <div className="flex flex-row gap-10 items-center">
              <p className="hover:text-primary transition-colors cursor-pointer">Produits</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Nafa Pro</p>
              <p className="hover:text-primary transition-colors cursor-pointer">À propos</p>
              <button className="btn btn-primary">Nous contacter</button>
            </div>
          )}
          {!isDesktop && (
            <div className="flex flex-row gap-4 items-center">
               <Menu onClick={toggleMenu}></Menu>
            </div>
          )}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 w-[80%] h-[70px]
          bg-[radial-gradient(circle_at_center,_rgba(52,199,162,0.45)_0%,_rgba(52,199,162,0.15)_40%,_transparent_70%)]
          blur-2xl opacity-80 pointer-events-none"
        />
        {!isDesktop && (
          <div
            className={`
              absolute top-16 w-full bg-white p-4 flex flex-col border border-gray-200 items-center gap-4
              transition-all duration-300 ease-out z-10 fixed
              ${showMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
            `}
          >
            <p className="hover:text-primary transition-colors cursor-pointer">Produits</p>
            <p className="hover:text-primary transition-colors cursor-pointer">Nafa Pro</p>
            <p className="hover:text-primary transition-colors cursor-pointer">À propos</p>
            <button className="btn btn-primary w-[200px]">Nous contacter</button>
          </div>)
        }
        <div className="absolute top-16 flex flex-col items-center">
          <div className="mt-20 bg-primary-soft rounded-full py-2 px-4 flex flex-row items-center gap-3 border border-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-scale" />
            <p className="text-primary font-semibold">Nafa Pro est maintenant disponible</p>
          </div>
          <h1 className="w-[300px] md:w-[800px] md:text-6xl text-2xl mt-14 text-center">
            Gérez vos stocks, ventes et finances <span className="text-primary">sans friction.</span>
          </h1>
          <p className="text-gray-400 mt-14 text-center w-[300px] md:w-[450px]">
            Nafa est la suite SaaS tout-en-un pour boutiques, supermarchés et restaurants — stocks, ventes et finances centralisés en un seul endroit.
          </p>
          <div className="flex md:flex-row md:gap-10 gap-4 mt-14 flex-col ">
            <button className="btn btn-primary px-6 py-3 flex flex-row items-center gap-4 w-[250px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md group">
              <div>Découvrez Nafa Pro</div>
              <MoveRight className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </button>
            <button className="btn btn-secondary px-6 py-3 w-[250px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md group">Demandez une démo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
