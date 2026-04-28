import { CircleCheckBig, Cog, Handshake, LayoutDashboard, Mail, Menu, MonitorSmartphone, MoveRight, Package, Shield, ShoppingCart, Target } from "lucide-react";
import LogoIcon from "./components/LogoIcon"
import LogoName from "./components/LogoName"
import { useIsDesktop } from "./hooks/useIsDesktop";
import { useState } from "react";
import Background from "./components/ParallaxBg";
import dashboardDesktop from "./assets/dashboard-desktop.png";
import dashboardMobile from "./assets/dashboard-mobile.png";
import WindowFrame from "./components/WindowFrame";
import InfoCard from "./components/InfoCard";
import doc from "./assets/doc.png";
import box from "./assets/box.png";
import finance from "./assets/finance.png";
import ProductCard from "./components/ProductCard";
import nafaLogo from "./assets/nafa-logo.png";
import dashboard from "./assets/dashboard.png";
import products from "./assets/products.png";
import sales from "./assets/sales.png";
import { CallToActionCard } from "./components/CallToActionCard";
import { NumberCard } from "./components/NumberCard";
import { RiLinkedinLine, RiWhatsappLine } from "react-icons/ri";
import ContactCard from "./components/ContactCard";
import { MiniContactCard } from "./components/MiniContactCard";
import { StaggerReveal } from "./components/StaggerReveal";
import { Reveal } from "./components/Reveal";

function App() {

  const isDesktop = useIsDesktop();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };

  return (
    <>
      <Background isDesktop={isDesktop} />
      <div className="w-full min-h-screen flex flex-col items-center">

        {/* ── NAVBAR ── */}
        <div className="md:p-4 bg-white w-full justify-between flex flex-row border-b border-gray-200 h-16 fixed top-0 left-0 z-10">
          <div className="flex items-center gap-2 ml-4 md:ml-0">
            <LogoIcon size={isDesktop ? 38 : 28}></LogoIcon>
            <LogoName size={isDesktop ? 200 : 130} color="black" />
          </div>
          {isDesktop && (
            <div className="flex flex-row gap-10 items-center">
              <p onClick={() => scrollTo("produits")} className="hover:text-primary transition-colors cursor-pointer">Produits</p>
              <p onClick={() => scrollTo("nafa-pro")} className="hover:text-primary transition-colors cursor-pointer">Nafa Pro</p>
              <p onClick={() => scrollTo("a-propos")} className="hover:text-primary transition-colors cursor-pointer">À propos</p>
              <button onClick={() => scrollTo("contact")} className="btn btn-primary">Nous contacter</button>
            </div>
          )}
          {!isDesktop && (
            <div className="flex flex-row gap-4 items-center mr-4 md:mr-0">
              <Menu onClick={toggleMenu}></Menu>
            </div>
          )}
          {!isDesktop && (
            <div
              className={`
                absolute top-16 w-full bg-white p-4 flex flex-col border border-gray-200 items-center gap-4
                transition-all duration-300 ease-out z-10 fixed
                ${showMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
              `}
            >
              <p onClick={() => scrollTo("produits")} className="hover:text-primary transition-colors cursor-pointer">Produits</p>
              <p onClick={() => scrollTo("nafa-pro")} className="hover:text-primary transition-colors cursor-pointer">Nafa Pro</p>
              <p onClick={() => scrollTo("a-propos")} className="hover:text-primary transition-colors cursor-pointer">À propos</p>
              <button onClick={() => scrollTo("contact")} className="btn btn-primary w-[200px]">Nous contacter</button>
            </div>
          )}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-[80%] h-[70px]
          bg-[radial-gradient(circle_at_center,_rgba(52,199,162,0.45)_0%,_rgba(52,199,162,0.15)_40%,_transparent_70%)]
          blur-2xl opacity-80 pointer-events-none"
        />

        <div className="mt-16 flex flex-col items-center overflow-x-hidden overscroll-x-none overflow-y-hidden">

          {/* ── HERO ─────────────────────────────────────────────────────────── */}
          {/* Chaque élément hero utilise --hero-i pour le stagger CSS */}

          <div
            className="mt-20 bg-primary-soft rounded-full py-2 px-4 flex flex-row items-center gap-3 border border-primary hero-item"
            style={{ "--hero-i": 0 } as React.CSSProperties}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-scale" />
            <p className="text-primary font-semibold">Nafa Pro est maintenant disponible</p>
          </div>

          <h1
            className="w-[300px] md:w-[800px] md:text-6xl text-2xl mt-14 text-center hero-item"
            style={{ "--hero-i": 1 } as React.CSSProperties}
          >
            Gérez vos stocks, ventes et finances <span className="text-primary">sans friction.</span>
          </h1>

          <p
            className="text-gray-400 mt-14 text-center w-[300px] md:w-[450px] hero-item"
            style={{ "--hero-i": 2 } as React.CSSProperties}
          >
            Nafa est la suite SaaS tout-en-un pour boutiques, supermarchés et restaurants — stocks, ventes et finances centralisés en un seul endroit.
          </p>

          <div
            className="flex md:flex-row md:gap-10 gap-4 mt-14 flex-col hero-item"
            style={{ "--hero-i": 3 } as React.CSSProperties}
          >
            <button
              onClick={() => scrollTo("nafa-pro")}
              className="btn btn-primary px-6 py-3 flex flex-row items-center gap-4 w-[250px] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg group"
            >
              <div>Découvrez Nafa Pro</div>
              <MoveRight className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn btn-secondary px-6 py-3 w-[250px] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg"
            >
              Demandez une démo
            </button>
          </div>

          <div
            className="hero-item flex flex-col items-center justify-center"
            style={{ "--hero-i": 4 } as React.CSSProperties}
          >
            {isDesktop ? (
              <WindowFrame className="mt-20" title="Aperçu de Nafa Pro" src={dashboardDesktop} />
            ) : (
              <img className="mt-20 rounded w-[80%]" src={dashboardMobile} alt="Aperçu de Nafa Pro" />
            )}
          </div>

          {/* ── POURQUOI NAFA ── */}
          <div className="mt-28 flex md:flex-row flex-col items-center gap-20">
            <StaggerReveal
              className="md:w-[500px] w-[80%] flex flex-col gap-6"
              direction="up"
              stagger={110}
            >
              <InfoCard
                title="Gestion manuelle épuisante"
                description="Cahiers, Excel, feuilles volantes — des heures perdues chaque semaine à saisir des données qui se perdent."
                icon={doc}
              />
              <InfoCard
                title="Stocks incontrôlables"
                color="#E9D4BC"
                description="Ruptures de stock non anticipées, sur-stockage coûteux, pertes dues à l'expiration sans visibilité en temps réel."
                icon={box}
              />
              <InfoCard
                title="Finance dans le flou"
                color="#ff7575"
                description="Pas de vision claire des revenus, des marges ou des dépenses. Décisions prises à l'aveugle chaque mois."
                icon={finance}
              />
            </StaggerReveal>

            <Reveal direction="right" delay={150} className="md:w-[500px] w-[80%] flex flex-col gap-8">
              <div className="flex flex-row gap-4 items-center justify-start">
                <div className="w-[35px] h-[2px] bg-primary"></div>
                <p className="text-sm font-semibold text-primary">POURQUOI NAFA ?</p>
              </div>
              <h2 className="text-2xl md:text-4xl text-start md:text-start w-[330px] md:w-[450px]">
                Les commerçants méritent <br/><span className="text-primary">mieux</span> que ça.
              </h2>
              <p className="text-gray-400 text-start w-[300px] md:w-[450px]">
                Nous avons conçu Nafa pour les gérants de boutiques, restaurants et supermarchés qui veulent piloter leur business avec la même rigueur qu'une grande entreprise — sans la complexité.
              </p>
              <div className="bg-primary-soft rounded-md py-4 px-4 flex flex-row items-center gap-3 border border-primary w-[fit-content]">
                <CircleCheckBig className="text-primary" />
                <p className="text-primary font-semibold">Une plateforme. Tous sous contrôle.</p>
              </div>
            </Reveal>
          </div>

          {/* ── PRODUITS ── */}
          <div id="produits" className="mt-20 flex flex-col items-center gap-8 scroll-mt-20">
            <Reveal className="flex flex-col items-center gap-8 w-full">
              <div className="flex flex-row gap-4 items-center justify-center">
                <div className="w-[50px] h-[2px] bg-primary"></div>
                <p className="text-sm font-semibold text-primary">PRODUITS</p>
                <div className="w-[50px] h-[2px] bg-primary"></div>
              </div>
              <h1 className="text-2xl md:text-4xl text-center w-[330px] md:w-full">
                Trois outils. <span className="text-primary">Un seul écosystème.</span>
              </h1>
              <p className="text-gray-400 text-center w-[330px] md:w-[450px]">
                Nafa se décline en trois modules pensés pour couvrir l'ensemble de vos besoins métier.
              </p>
            </Reveal>

            <StaggerReveal
              className="flex flex-col md:flex-row gap-10 px-10"
              direction="up"
              baseDelay={80}
              stagger={120}
            >
              <ProductCard
                name="Nafa Client"
                description="Le module réservé aux clients. Gérez votre base clients et suivez l'historique d'achats de chacun de vos clients."
                isAvailable={false}
                logoSrc={nafaLogo}
              />
              <ProductCard
                name="Nafa Pro"
                description="La solution complète pour gérer vos stocks, enregistrer vos ventes, et suivre vos finances en temps réel. Conçu pour les commerçants actifs."
                isAvailable={true}
                logoSrc={nafaLogo}
                onExplore={() => scrollTo("nafa-pro")}
              />
              <ProductCard
                name="Nafa Stock"
                description="Un module avancé de gestion d'entrepôt multi-dépôt, avec alertes automatiques et suivi des mouvements de marchandises."
                isAvailable={false}
                logoSrc={nafaLogo}
              />
            </StaggerReveal>
          </div>

          {/* ── NAFA PRO ── */}
          <div id="nafa-pro" className="w-full flex flex-col px-10 mt-20 gap-10 scroll-mt-20">
            <Reveal>
              <div className="flex flex-row gap-4 items-center justify-start">
                <div className="w-[35px] h-[2px] bg-primary"></div>
                <p className="text-sm font-semibold text-primary">NAFA PRO</p>
              </div>
              <h2 className="text-2xl md:text-4xl text-start md:text-start w-[330px] md:w-[800px] mt-4">
                Tout ce dont votre commerce a <br/><span className="text-primary">besoin</span> aujourd'hui.
              </h2>
            </Reveal>

            <div className="flex items-center justify-between gap-10 md:gap-20 flex-col-reverse md:flex-row">
              <StaggerReveal
                className="w-[330px] md:w-[500px] flex flex-col gap-8"
                direction="left"
                stagger={120}
              >
                <InfoCard
                  title="Gestion des stocks en temps réel"
                  description="Ajoutez, modifiez et suivez vos articles avec des alertes automatiques de réapprovisionnement."
                  iconComponent={Package}
                />
                <InfoCard
                  title="Enregistrement des ventes"
                  description="Interface rapide de caisse, historique complet de toutes vos transactions."
                  iconComponent={ShoppingCart}
                />
              </StaggerReveal>
              <Reveal direction="right" delay={100} scale className="flex flex-col items-center justify-center">
                <img src={dashboard} alt="Aperçu du tableau de bord" className="w-[500px]" />
              </Reveal>
            </div>

            <div className="flex flex-col-reverse items-center justify-between gap-10 md:gap-20 md:flex-row-reverse">
              <StaggerReveal
                className="w-[330px] md:w-[500px] flex flex-col gap-8"
                direction="right"
                stagger={100}
              >
                <InfoCard
                  title="Tableau de bord financier"
                  description="Revenus, marges, dépenses et bénéfices nets visualisés en un coup d'œil."
                  iconComponent={LayoutDashboard}
                />
                <InfoCard
                  title="Accessible partout"
                  description="Application web responsive, disponible sur ordinateur, tablette et mobile. Vos données, où que vous soyez."
                  iconComponent={MonitorSmartphone}
                />
                <InfoCard
                  title="Sécurité & Sauvegardes"
                  description="Données chiffrées, sauvegardes automatiques quotidiennes, aucune perte d'information."
                  iconComponent={Shield}
                />
              </StaggerReveal>
              <Reveal direction="left" delay={100} scale className="flex flex-row items-center justify-between md:w-[500px] w-[330px] gap-4">
                <img src={products} alt="Aperçu du tableau de bord" className="md:w-[220px] w-[150px]" />
                <img src={sales} alt="Aperçu du tableau de bord" className="md:w-[220px] w-[150px]" />
              </Reveal>
            </div>

            <Reveal className="mt-10" scale>
              <CallToActionCard
                title="Prêt à essayer Nafa Pro?"
                description="Contactez-nous pour une démonstration gratuite et découvrez comment Nafa peut transformer votre commerce."
                buttonLabel="Demander une démo"
                onClick={() => scrollTo("contact")}
              />
            </Reveal>
          </div>

          {/* ── À PROPOS ── */}
          <div id="a-propos" className="w-full mt-20 px-10 flex flex-col gap-10 scroll-mt-20">
            <Reveal>
              <div className="flex flex-row gap-4 items-center justify-start">
                <div className="w-[35px] h-[2px] bg-primary"></div>
                <p className="text-sm font-semibold text-primary">IRREX CONSTULTING</p>
              </div>
            </Reveal>
            <div className="flex md:flex-row flex-col items-center justify-between gap-10">
              <Reveal direction="left" delay={60} className="flex flex-col gap-4 w-[330px] md:w-[500px]">
                <h2 className="text-2xl md:text-4xl text-start md:text-start">
                  Des développeurs qui <span className="text-primary">comprennent</span> le terrain.
                </h2>
                <p className="text-gray-400 mt-4 text-start w-[300px] md:w-[450px]">
                  Irrex Consulting est une entreprise de développement logiciel spécialisée dans la création de solutions SaaS adaptées aux réalités des marchés locaux.
                </p>
                <InfoCard
                  className="mt-4"
                  title="Produits pensés pour le contexte local"
                  color="#2D2D2D"
                  iconComponent={Target}
                />
                <InfoCard
                  title="Ingénierie rigoureuse, interfaces simples"
                  color="#2D2D2D"
                  iconComponent={Cog}
                />
                <InfoCard
                  title="Support réactif et accompagnement continu"
                  color="#2D2D2D"
                  iconComponent={Handshake}
                />
              </Reveal>
              <Reveal direction="right" delay={150} className="flex flex-col w-[330px] md:w-[500px] gap-6 justify-center">
                <div className="flex md:flex-row gap-6">
                  <NumberCard number="1" label="SaaS en production" />
                  <NumberCard number="3" label="Modules en développement" />
                </div>
                <div className="flex md:flex-row gap-6">
                  <NumberCard number="100%" label="Cloud & Sécurisé" />
                  <NumberCard number="24/7" label="Disponibilité de la plateforme" />
                </div>
                <InfoCard
                  className="md:mt-8"
                  title="Notre mission"
                  description="Donner aux commerçants africains les outils numériques qu'ils méritent — robustes, accessibles et pensés pour leur réalité quotidienne. Nafa est la première étape de cette ambition."
                />
              </Reveal>
            </div>
          </div>

          {/* ── CONTACT ── */}
          <div id="contact" className="w-full mt-20 px-10 flex flex-col gap-10 scroll-mt-20">
            <Reveal>
              <div className="flex flex-row gap-4 items-center justify-start">
                <div className="w-[35px] h-[2px] bg-primary"></div>
                <p className="text-sm font-semibold text-primary">CONTACT</p>
              </div>
            </Reveal>
            <div className="flex md:flex-row flex-col items-start justify-between gap-10">
              <Reveal direction="left" delay={60} className="flex flex-col gap-4 w-[330px] md:w-[500px]">
                <h2 className="text-2xl md:text-4xl text-start md:text-start">Parlons de votre projet</h2>
                <p className="text-gray-400 mt-4 text-start w-[300px] md:w-[450px]">
                  Une question sur Nafa Pro, une demande de démo, ou simplement envie d'échanger — nous sommes à votre écoute.
                </p>
                <a href="mailto:contact@irrexconsulting.com">
                  <InfoCard
                    className="mt-4"
                    title="contact@irrexconsulting.com"
                    color="#2D2D2D"
                    iconComponent={Mail}
                  />
                </a>
                <a href="https://wa.me/22370313104" target="_blank" rel="noopener noreferrer">
                  <InfoCard
                    title="Irrex Consulting sur WhatsApp"
                    color="#2D2D2D"
                    iconComponent={RiWhatsappLine}
                  />
                </a>
                <a href="https://www.linkedin.com/company/irrex-consulting" target="_blank" rel="noopener noreferrer">
                  <InfoCard
                    title="Irrex Consulting sur LinkedIn"
                    color="#2D2D2D"
                    iconComponent={RiLinkedinLine}
                  />
                </a>
              </Reveal>
              <Reveal direction="right" delay={150} scale className="flex flex-col w-[330px] md:w-[500px] gap-6 justify-center">
                <ContactCard/>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="mt-20 border-t border-gray-300 w-full bg-white p-6 flex flex-col items-start gap-5">
          <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-0">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LogoIcon size={32}></LogoIcon>
                <LogoName width={170} color="black" />
              </div>
              <p className="text-gray-400 mt-4 text-start w-[330px] md:w-[350px]">Nous construisons des outils numériques pensés pour les commerçants et les organisations.</p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-[200px] md:pr-[100px] gap-10">
              <div className="flex flex-col gap-4">
                <h3>PRODUITS</h3>
                <p onClick={() => scrollTo("produits")} className="hover:text-primary transition-colors cursor-pointer">Nafa Client</p>
                <p onClick={() => scrollTo("nafa-pro")} className="hover:text-primary transition-colors cursor-pointer">Nafa Pro</p>
                <p onClick={() => scrollTo("produits")} className="hover:text-primary transition-colors cursor-pointer">Nafa Stock</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3>ENTREPRISE</h3>
                <p onClick={() => scrollTo("a-propos")} className="hover:text-primary transition-colors cursor-pointer">À propos</p>
                <p onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors cursor-pointer">Contact</p>
                <p className="hover:text-primary transition-colors cursor-pointer">Mentions légales</p>
                <p className="hover:text-primary transition-colors cursor-pointer">Politiques de confidentialité</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-200"></div>
          <div className="flex md:flex-row flex-col items-center justify-between w-full gap-4 md:gap-0">
            <p className="text-gray-400 text-start">© 2026 Irrex Consulting. Tous droits réservés.</p>
            <div className="flex flex-row gap-5">
              <a href="mailto:contact@irrexconsulting.com">
                <MiniContactCard icon={Mail}></MiniContactCard>
              </a>
              <a href="https://wa.me/22370313104" target="_blank" rel="noopener noreferrer">
                <MiniContactCard icon={RiWhatsappLine}></MiniContactCard>
              </a>
              <a href="https://www.linkedin.com/company/irrex-consulting" target="_blank" rel="noopener noreferrer">
                <MiniContactCard icon={RiLinkedinLine}></MiniContactCard>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;