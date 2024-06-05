import React from 'react';
import BreadCump from '../conmponentes/BreadCump';
import PageHelmet from '../conmponentes/Helmet';

const Shippingpolicy = () => {
  return (
    <>
      <PageHelmet title="Politique d'expédition" />
      <BreadCump title="Politique d'expédition" />
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto">
      <div className="cr7">
        <div className="container-xxl">
          <div className="row">
         
               <p>
                  Bienvenue sur notre page de politique d'expédition. Cette politique définit les conditions et les procédures relatives à l'expédition de nos produits vers nos clients.
                </p>

                <h4 id="list-item-1">Méthodes d'expédition</h4>
                <p>
                  Nous proposons différentes méthodes d'expédition pour répondre aux besoins de nos clients. Les options d'expédition disponibles seront affichées lors du processus de commande.
                </p>

                <h4 id="list-item-2">Délais de livraison</h4>
                <p>
                  Les délais de livraison varient en fonction de la méthode d'expédition sélectionnée et de la destination de livraison. Nous nous efforçons de livrer les commandes dans les délais les plus courts possibles.
                </p>

                <h4 id="list-item-3">Frais d'expédition</h4>
                <p>
                  Les frais d'expédition sont calculés en fonction du poids de la commande, de la destination de livraison et de la méthode d'expédition sélectionnée. Ces frais seront affichés lors du processus de commande.
                </p>

                <h4 id="list-item-4">Suivi des commandes</h4>
                <p>
                  Une fois votre commande expédiée, vous recevrez un numéro de suivi par e-mail. Vous pourrez ainsi suivre l'acheminement de votre colis jusqu'à sa livraison.
                </p>

                <h4 id="list-item-5">Politique de retour</h4>
                <p>
                  Pour plus d'informations sur notre politique de retour, veuillez consulter notre page dédiée aux retours.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Shippingpolicy;
