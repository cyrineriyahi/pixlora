
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar";

import DesignGraphique from "./DesignGraphique";
import MontageVideo from "./MontageVideo";
import FormulaireService from "./FormulaireService";
import CreationSite from "./CreationSite";
import CreationIA from "./CreationIA";
import CreationProduitDigital from "./CreationProduitDigital";

import "./App.css";

import heroPhoto from "./assets/accueil.jpg";


/* =====================================================
   PAGE ACCUEIL
===================================================== */

function Accueil() {

  const navigate = useNavigate();
  const location = useLocation();

  /* =====================================================
     PHOTO / VIDEO SÉLECTIONNÉE
  ===================================================== */

  const [selectedMedia, setSelectedMedia] = useState(null);


  /* =====================================================
     SCROLL AUTOMATIQUE
  ===================================================== */

  useEffect(() => {

    const params = new URLSearchParams(
      location.search
    );

    const section = params.get("section");

    if (!section) {
      return;
    }

    const timer = setTimeout(() => {

      const element =
        document.getElementById(section);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }, 300);

    return () => {
      clearTimeout(timer);
    };

  }, [location.search]);


  /* =====================================================
     DÉFILEMENT PORTFOLIO
  ===================================================== */

  const scrollPortfolio = (direction) => {

    const container =
      document.querySelector(".portfolio-grid");

    if (!container) {
      return;
    }

    const card =
      container.querySelector(".portfolio-card");

    const cardWidth = card
      ? card.offsetWidth + 24
      : 330;

    container.scrollBy({

      left:
        direction === "left"
          ? -cardWidth
          : cardWidth,

      behavior: "smooth"

    });

  };


  /* =====================================================
     FERMER PHOTO / VIDEO AVEC ESC
  ===================================================== */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (
        event.key === "Escape" &&
        selectedMedia
      ) {

        setSelectedMedia(null);

      }

    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [selectedMedia]);


  return (

    <main>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-subtitle">
            CRÉATIVITÉ • DESIGN • DIGITAL
          </p>


          <h1>
            Donnez vie à vos <span>idées.</span>
          </h1>


          <p className="hero-description">
            Pixlora transforme vos idées en créations
            visuelles, produits digitaux et expériences
            modernes.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => {

                const services =
                  document.getElementById(
                    "services"
                  );

                if (services) {

                  services.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });

                }

              }}
            >
              Découvrir nos services
            </button>


            <button
              className="secondary-button"
              onClick={() =>
                navigate(
                  "/formulaire-service"
                )
              }
            >
              Nous contacter
            </button>

          </div>

        </div>


        {/* =================================================
            HERO IMAGE
        ================================================= */}

        <div className="hero-visual">

          <img
            src={heroPhoto}
            alt="Créativité Pixlora"
            className="hero-image"
          />

        </div>

      </section>



      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section
        className="portfolio-section"
        id="portfolio"
      >


        {/* =================================================
            HEADER PORTFOLIO
        ================================================= */}

        <div className="portfolio-header">

          <div className="portfolio-title">

            <p className="section-subtitle">
              NOS RÉALISATIONS
            </p>


            <h2>
              Des créations qui donnent vie
              à vos <span>idées.</span>
            </h2>


            <p className="portfolio-description">
              Découvrez quelques exemples de contenus
              créatifs réalisés pour différents projets,
              marques et activités.
            </p>

          </div>


          {/* =================================================
              BOUTONS PORTFOLIO
          ================================================= */}

          <div className="portfolio-controls">

            <button
              className="portfolio-control"
              onClick={() =>
                scrollPortfolio("left")
              }
              aria-label="Projet précédent"
            >
              ←
            </button>


            <button
              className="portfolio-control"
              onClick={() =>
                scrollPortfolio("right")
              }
              aria-label="Projet suivant"
            >
              →
            </button>

          </div>

        </div>



        {/* =================================================
            PORTFOLIO GRID
        ================================================= */}

        <div className="portfolio-grid">


          {/* =================================================
              PHOTO 1 — CHARTE GRAPHIQUE
          ================================================= */}

          <div
            className="portfolio-card"
            onClick={() =>
              setSelectedMedia({
                type: "image",
                src: "/charte graphique pixlora.png",
                title: "Charte graphique Pixlora"
              })
            }
          >

            <div className="portfolio-image">

              <img
                src="/charte graphique pixlora.png"
                alt="Charte graphique Pixlora"
              />

            </div>


            <div className="portfolio-content">

              <div>

                <h3>
                  Charte graphique Pixlora
                </h3>

                <p>
                  Création graphique
                </p>

              </div>

            </div>

          </div>



          {/* =================================================
              VIDEO 1 — CASQUE JBL
          ================================================= */}

          <div
            className="portfolio-card video-card"
            onClick={() =>
              setSelectedMedia({
                type: "video",
                src: "/casque JBL .mp4",
                title: "Casque JBL"
              })
            }
          >

            <div className="portfolio-image">

              <video
                src="/casque JBL .mp4"
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="video-play-button">
                ▶
              </div>

            </div>


            <div className="portfolio-content">

              <div>

                <h3>
                  Casque JBL
                </h3>

                <p>
                  Vidéo publicitaire
                </p>

              </div>

            </div>

          </div>



          {/* =================================================
              PHOTO 2 — COUVERT
          ================================================= */}

          <div
            className="portfolio-card"
            onClick={() =>
              setSelectedMedia({
                type: "image",
                src: "/couvert.jpg",
                title: "Couvert"
              })
            }
          >

            <div className="portfolio-image">

              <img
                src="/couvert.jpg"
                alt="Couvert"
              />

            </div>


            <div className="portfolio-content">

              <div>

                <h3>
                  Couvert
                </h3>

                <p>
                  Présentation produit
                </p>

              </div>

            </div>

          </div>



          {/* =================================================
              VIDEO 2 — SPOT CAFÉ BEN YEDDER
          ================================================= */}

          <div
            className="portfolio-card video-card"
            onClick={() =>
              setSelectedMedia({
                type: "video",
                src: "/Spot café Ben yedder.mp4",
                title: "Spot café Ben Yedder"
              })
            }
          >

            <div className="portfolio-image">

              <video
                src="/Spot café Ben yedder.mp4"
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="video-play-button">
                ▶
              </div>

            </div>


            <div className="portfolio-content">

              <div>

                <h3>
                  Spot café Ben Yedder
                </h3>

                <p>
                  Vidéo promotionnelle
                </p>

              </div>

            </div>

          </div>



          {/* =================================================
              PHOTO 3 — DELIVERY
          ================================================= */}

          <div
            className="portfolio-card"
            onClick={() =>
              setSelectedMedia({
                type: "image",
                src: "/Delivery.png",
                title: "Delivery"
              })
            }
          >

            <div className="portfolio-image">

              <img
                src="/Delivery.png"
                alt="Delivery"
              />

            </div>


            <div className="portfolio-content">

              <div>

                <h3>
                  Delivery
                </h3>

                <p>
                  Contenu pour réseaux sociaux
                </p>

              </div>

            </div>

          </div>



          {/* =================================================
              VIDEO 3 — OIL LIP ESSANCE
          ================================================= */}

          <div
            className="portfolio-card video-card"
            onClick={() =>
              setSelectedMedia({
                type: "video",
                src: "/Spot oil  lip essance.mp4",
                title: "Spot Oil Lip Essance"
              })
            }
          >

            <div className="portfolio-image">

              <video
                src="/Spot oil  lip essance.mp4"
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="video-play-button">
                ▶
              </div>

            </div>


            <div className="portfolio-content">

              <div>

                <h3>
                  Spot Oil Lip Essance
                </h3>

                <p>
                  Création vidéo
                </p>

              </div>

            </div>

          </div>


        </div>



        {/* =================================================
            MODAL PHOTO / VIDEO
        ================================================= */}

        {selectedMedia && (

          <div
            className="video-modal"
            onClick={() =>
              setSelectedMedia(null)
            }
          >

            <div
              className="video-modal-content"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* BOUTON FERMER */}

              <button
                className="video-modal-close"
                onClick={() =>
                  setSelectedMedia(null)
                }
                aria-label="Fermer"
              >
                ×
              </button>


              {/* =================================================
                  PHOTO EN GRAND
              ================================================= */}

              {selectedMedia.type === "image" && (

                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="media-modal-image"
                />

              )}


              {/* =================================================
                  VIDEO EN GRAND
              ================================================= */}

              {selectedMedia.type === "video" && (

                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  playsInline
                  className="media-modal-video"
                />

              )}

            </div>

          </div>

        )}

      </section>



      {/* =================================================
          SERVICES
      ================================================= */}

      <section
        className="services-preview"
        id="services"
      >

        <p className="section-subtitle">
          NOS SERVICES
        </p>


        <h2>
          Créons quelque chose de{" "}
          <span>magnifique.</span>
        </h2>


        <div className="services-grid">


          {/* DESIGN GRAPHIQUE */}

          <div
            className="service-card"
            onClick={() =>
              navigate(
                "/design-graphique"
              )
            }
          >

            <div className="service-icon">
              🎨
            </div>


            <h3>
              Design graphique
            </h3>


            <p>
              Création de logos, affiches,
              identités visuelles et supports
              graphiques.
            </p>


            <button
              onClick={(e) => {

                e.stopPropagation();

                navigate(
                  "/design-graphique"
                );

              }}
            >
              Découvrir →
            </button>

          </div>



          {/* MONTAGE VIDEO */}

          <div
            className="service-card"
            onClick={() =>
              navigate(
                "/montage-video"
              )
            }
          >

            <div className="service-icon">
              🎬
            </div>


            <h3>
              Montage vidéo
            </h3>


            <p>
              Création et montage de vidéos
              modernes pour vos projets et
              réseaux sociaux.
            </p>


            <button
              onClick={(e) => {

                e.stopPropagation();

                navigate(
                  "/montage-video"
                );

              }}
            >
              Découvrir →
            </button>

          </div>



          {/* CREATION SITE */}

          <div
            className="service-card"
            onClick={() =>
              navigate(
                "/creation-site"
              )
            }
          >

            <div className="service-icon">
              💻
            </div>


            <h3>
              Création de site
            </h3>


            <p>
              Création de sites web modernes,
              rapides et adaptés à vos besoins.
            </p>


            <button
              onClick={(e) => {

                e.stopPropagation();

                navigate(
                  "/creation-site"
                );

              }}
            >
              Découvrir →
            </button>

          </div>



          {/* PRODUIT DIGITAL */}

          <div
            className="service-card"
            onClick={() =>
              navigate(
                "/produit-digital"
              )
            }
          >

            <div className="service-icon">
              📱
            </div>


            <h3>
              Produit digital
            </h3>


            <p>
              Création de produits digitaux
              modernes et adaptés à votre activité.
            </p>


            <button
              onClick={(e) => {

                e.stopPropagation();

                navigate(
                  "/produit-digital"
                );

              }}
            >
              Découvrir →
            </button>

          </div>



          {/* CREATION IA */}

          <div
            className="service-card"
            onClick={() =>
              navigate(
                "/creation-ia"
              )
            }
          >

            <div className="service-icon">
              🤖
            </div>


            <h3>
              Création avec IA
            </h3>


            <p>
              Création de contenus et visuels
              modernes grâce aux outils
              d'intelligence artificielle.
            </p>


            <button
              onClick={(e) => {

                e.stopPropagation();

                navigate(
                  "/creation-ia"
                );

              }}
            >
              Découvrir →
            </button>

          </div>


        </div>

      </section>



      {/* =================================================
          À PROPOS
      ================================================= */}

      <section
        className="about-section"
        id="about"
      >

        <p className="section-subtitle">
          À PROPOS
        </p>


        <h2>
          À propos de <span>Pixlora</span>
        </h2>


        <p className="about-description">

          <strong>
            Pixlora
          </strong>{" "}
          est une agence créative qui aide les
          marques, entrepreneurs et créateurs à
          développer leur image grâce au{" "}

          <strong>
            design, à la vidéo et aux solutions
            digitales.
          </strong>

        </p>


        <p className="about-description">

          Nous transformons vos idées en contenus{" "}

          <strong>
            modernes, professionnels et percutants.
          </strong>

        </p>


        <p className="about-slogan">
          Creative Solutions for Your Growth.
        </p>

      </section>



      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <p className="section-subtitle">
          CONTACT
        </p>


        <h2>
          Parlons de votre <span>projet.</span>
        </h2>


        <p className="contact-description">
          Vous avez un projet ou une idée ?
          Contactez-nous et discutons ensemble
          de votre projet.
        </p>



        <div className="contact-info">


          {/* EMAIL */}

          <div
            className="contact-item"
            onClick={() => {

              window.location.href =
                "mailto:pixlora26@gmail.com";

            }}
          >

            <div className="contact-icon">

              <FontAwesomeIcon
                icon={faEnvelope}
              />

            </div>


            <h3>
              Email
            </h3>


            <a
              href="mailto:pixlora26@gmail.com"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              pixlora26@gmail.com
            </a>

          </div>



          {/* WHATSAPP */}

          <div
            className="contact-item"
            onClick={() => {

              window.open(
                "https://wa.me/21620898688",
                "_blank"
              );

            }}
          >

            <div className="contact-icon">

              <FontAwesomeIcon
                icon={faWhatsapp}
              />

            </div>


            <h3>
              WhatsApp
            </h3>


            <a
              href="https://wa.me/21620898688"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              20 898 688
            </a>

          </div>



          {/* FACEBOOK */}

          <div
            className="contact-item"
            onClick={() => {

              window.open(
                "https://www.facebook.com/profile.php?id=61592936854600",
                "_blank"
              );

            }}
          >

            <div className="contact-icon">

              <FontAwesomeIcon
                icon={faFacebookF}
              />

            </div>


            <h3>
              Facebook
            </h3>


            <a
              href="https://www.facebook.com/profile.php?id=61592936854600"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              Pixlora
            </a>

          </div>



          {/* INSTAGRAM */}

          <div
            className="contact-item"
            onClick={() => {

              window.open(
                "https://www.instagram.com/pixlora26/",
                "_blank"
              );

            }}
          >

            <div className="contact-icon">

              <FontAwesomeIcon
                icon={faInstagram}
              />

            </div>


            <h3>
              Instagram
            </h3>


            <a
              href="https://www.instagram.com/pixlora26/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              @pixlora26
            </a>

          </div>



          {/* TIKTOK */}

          <div
            className="contact-item"
            onClick={() => {

              window.open(
                "https://www.tiktok.com/@pixlora26",
                "_blank"
              );

            }}
          >

            <div className="contact-icon">

              <FontAwesomeIcon
                icon={faTiktok}
              />

            </div>


            <h3>
              TikTok
            </h3>


            <a
              href="https://www.tiktok.com/@pixlora26"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              @pixlora26
            </a>

          </div>


        </div>

      </section>


    </main>

  );

}


/* =====================================================
   APP
===================================================== */

function App() {

  return (

    <>

      <Navbar />


      <Routes>


        {/* ACCUEIL */}

        <Route
          path="/"
          element={
            <Accueil />
          }
        />


        {/* À PROPOS */}

        <Route
          path="/about"
          element={
            <Navigate
              to="/?section=about"
              replace
            />
          }
        />


        {/* SERVICES */}

        <Route
          path="/services"
          element={
            <Navigate
              to="/?section=services"
              replace
            />
          }
        />


        {/* CONTACT */}

        <Route
          path="/contact"
          element={
            <Navigate
              to="/?section=contact"
              replace
            />
          }
        />


        {/* DESIGN GRAPHIQUE */}

        <Route
          path="/design-graphique"
          element={
            <DesignGraphique />
          }
        />


        {/* MONTAGE VIDEO */}

        <Route
          path="/montage-video"
          element={
            <MontageVideo />
          }
        />


        {/* CREATION SITE */}

        <Route
          path="/creation-site"
          element={
            <CreationSite />
          }
        />


        {/* PRODUIT DIGITAL */}

        <Route
          path="/produit-digital"
          element={
            <CreationProduitDigital />
          }
        />


        {/* CREATION IA */}

        <Route
          path="/creation-ia"
          element={
            <CreationIA />
          }
        />


        {/* FORMULAIRE SERVICE */}

        <Route
          path="/formulaire-service"
          element={
            <FormulaireService />
          }
        />


        {/* PAGE INEXISTANTE */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />


      </Routes>

    </>

  );

}


export default App;