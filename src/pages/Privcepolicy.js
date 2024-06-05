import React from 'react';
import BreadCump from '../conmponentes/BreadCump';
import PageHelmet from '../conmponentes/Helmet';

const Privcepolicy = () => {
  return (
    <>
      <PageHelmet title="Politique de confidentialité" />
      <BreadCump title="Politique de confidentialité" />
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto">

      <div className="cr7">
        <div className="container-xxl">
          <div className="row">
                <p>
                  Bienvenue sur notre page de politique de confidentialité. Cette politique décrit la manière dont nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web.
                </p>

                <h4 id="list-item-1">Collecte d'informations</h4>
                <p>
                  Nous collectons des informations personnelles telles que votre nom, adresse e-mail et informations de paiement lorsque vous effectuez un achat sur notre site web. Nous utilisons également des cookies et d'autres technologies de suivi pour recueillir des informations sur votre activité en ligne.
                </p>

                <h4 id="list-item-2">Utilisation des informations</h4>
                <p>
                  Nous utilisons les informations que nous collectons pour traiter vos commandes, personnaliser votre expérience utilisateur et vous envoyer des communications marketing. Nous ne partagerons pas vos informations personnelles avec des tiers sans votre consentement.
                </p>

                <h4 id="list-item-3">Protection des informations</h4>
                <p>
                  Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, divulgation, altération ou destruction.
                </p>

                <h4 id="list-item-4">Vos droits</h4>
                <p>
                  Vous avez le droit d'accéder, de corriger et de supprimer vos informations personnelles. Vous pouvez également vous opposer au traitement de vos données personnelles à des fins de marketing direct.
                </p>

                <h4 id="list-item-5">Mises à jour de la politique</h4>
                <p>
                  Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Toute modification de cette politique sera publiée sur cette page.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Privcepolicy;
