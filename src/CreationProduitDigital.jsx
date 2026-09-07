import { useNavigate } from "react-router-dom";
import "./CreationProduitDigital.css";

function CreationProduitDigital() {

  const navigate = useNavigate();

  // =====================================================
  // OUVRIR LE FORMULAIRE AVEC LE SERVICE CHOISI
  // =====================================================

  const handleServiceClick = (service) => {
    navigate("/formulaire-service", {
      state: {
        service: service
      }
    });
  };


  return (
    <div className="produit-digital-page">


      {/* ============================
      =========================
          HERO
      ===================================================== */}

      <section className="produit-digital-hero">


        {/* =================================================
            PARTIE GAUCHE
        ================================================= */}

        <div className="produit-digital-content">

          <div className="produit-digital-small">
            PIXLORA • DIGITAL CREATION
          </div>


          {/* =================================================
              TITRE
          ================================================= */}

          <h1>

            <span className="produit-title-main">
              CRÉATION DE
            </span>

            <span className="produit-title-gradient">
              PRODUITS
            </span>

            <span className="produit-title-script">
              Digitaux
            </span>

          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="produit-description">
            Des ressources digitales
            <strong>
              utiles, modernes et prêtes à vendre.
            </strong>
          </p>


          {/* =================================================
              OPTIONS
          ================================================= */}

          <div className="produit-options">


            {/* =================================================
                E-BOOKS
            ================================================= */}

            <div
              className="produit-option"
              onClick={() =>
                handleServiceClick("Création d'E-books")
              }
            >

              <div className="produit-icon">
                📖
              </div>

              <div>

                <h3>
                  E-books
                </h3>

                <p>
                  Des contenus clairs et professionnels.
                </p>

              </div>

            </div>


            {/* =================================================
                TEMPLATES
            ================================================= */}

            <div
              className="produit-option"
              onClick={() =>
                handleServiceClick("Création de Templates")
              }
            >

              <div className="produit-icon">
                ▣
              </div>

              <div>

                <h3>
                  Templates
                </h3>

                <p>
                  Gagnez du temps avec des modèles prêts à l'emploi.
                </p>

              </div>

            </div>


            {/* =================================================
                PRÉSENTATIONS
            ================================================= */}

            <div
              className="produit-option"
              onClick={() =>
                handleServiceClick("Création de Présentations")
              }
            >

              <div className="produit-icon">
                📊
              </div>

              <div>

                <h3>
                  Présentations
                </h3>

                <p>
                  Des présentations impactantes et modernes.
                </p>

              </div>

            </div>


            {/* =================================================
                DOCUMENTS
            ================================================= */}

            <div
              className="produit-option"
              onClick={() =>
                handleServiceClick(
                  "Documents et ressources digitales"
                )
              }
            >

              <div className="produit-icon">
                📄
              </div>

              <div>

                <h3>
                  Documents & ressources
                </h3>

                <p>
                  Des fichiers pratiques pour tous vos besoins.
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              SLOGAN
          ================================================= */}

          <p className="produit-slogan">
            Créez une fois,
            <span> vendez partout.</span>
          </p>


          {/* =================================================
              BOUTON
          ================================================= */}

          <button
            className="produit-button"
            onClick={() =>
              handleServiceClick(
                "Création de produit digital"
              )
            }
          >
            Créer mon produit digital →
          </button>

        </div>


        {/* =====================================================
            PARTIE DROITE : PHOTO
        ===================================================== */}

        <div className="produit-digital-visual">

          <div className="visual-glow"></div>

          <img
            src="/digital.jpg"
            alt="Création de produits digitaux"
            className="produit-digital-image"
          />

        </div>

      </section>

    </div>
  );
}

export default CreationProduitDigital;