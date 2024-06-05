import React from 'react';
import BreadCump from '../conmponentes/BreadCump';
import PageHelmet from '../conmponentes/Helmet';

const RefundPolicy = () => {
  return (
    <>
      <PageHelmet title="Politique de remboursement" />
      <BreadCump title="Politique de remboursement" />
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto">

      <div className="cr7">
        <div className="container-xxl">
          <div className="row">
               <p>
                  Bienvenue sur notre page de politique de remboursement. Cette politique explique les conditions dans lesquelles les remboursements sont accordés pour les produits achetés sur notre site.
                </p>

                <h4 id="list-item-1">Conditions de remboursement</h4>
                <p>
                  Les remboursements sont accordés dans les cas suivants :
                  <ul>
                    <li>Produit défectueux ou endommagé à la réception</li>
                    <li>Commande incorrecte reçue</li>
                    <li>Produit non conforme à la description</li>
                  </ul>
                </p>

                <h4 id="list-item-2">Processus de remboursement</h4>
                <p>
                  Pour demander un remboursement, veuillez contacter notre service clientèle dans les plus brefs délais. Nous vous demanderons de fournir des photos du produit endommagé ou incorrect, ainsi que d'autres informations pertinentes.
                </p>

                <h4 id="list-item-3">Délai de remboursement</h4>
                <p>
                  Une fois que nous avons reçu et inspecté votre retour, nous vous enverrons un e-mail pour vous informer que nous avons reçu votre article retourné. Nous procéderons ensuite au traitement de votre remboursement. Le remboursement sera crédité sur votre mode de paiement initial dans un délai de [nombre de jours].
                </p>

                <h4 id="list-item-4">Exceptions</h4>
                <p>
                  Les articles en solde ou en promotion ne sont généralement pas remboursables. Seuls les articles à prix régulier peuvent être remboursés.
                </p>

                <h4 id="list-item-5">Contact</h4>
                <p>
                  Pour toute question concernant notre politique de remboursement, veuillez nous contacter à l'adresse suivante : info@votresociete.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default RefundPolicy;
