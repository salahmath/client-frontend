import React from "react";
import { Link } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { MdExpandMore, MdLocalOffer } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import Blogcard from "../conmponentes/Blogcart";
import Productcart from "../conmponentes/Productcart";
import Special from "../conmponentes/Special";
import PageHelmet from '../conmponentes/Helmet';

const Homepages = () => {
  return (
    <>
    <PageHelmet title="Home"/>
      <section className="home-wrapper1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="https://assets-fr.imgfoot.com/media/cache/1200x1200/lionel-messi-2223-4.jpg"
                  className="img10 img-flud rounded-3"
                  alt="main binner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>charger</h4>
                  <h5>super charge</h5>
                  <p>from 1000 a 200</p>
                  <Link className="button">buy now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-1">
                  <img
                    src="https://cdnfr.africanmanager.com/wp-content/uploads/2023/07/solde.jpg"
                    className="img2 img-flud rounded-3"
                    alt="small binner"
                  />
                  <div className="small-banner-content position-absolute"></div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="https://www.moneyvox.fr/i/media/08l/008683l70a.jpg"
                    className="img2 img-flud rounded-3"
                    alt="small binner"
                  />
                  <div className="small-banner-content position-absolute"></div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="https://www.macapflag.com/blog/wp-content/uploads/2023/11/Offre-speciale-soldes-dhiver.jpg"
                    className="img2 img-flud rounded-3"
                    alt="small binner"
                  />
                  <div className="small-banner-content position-absolute"></div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    src="https://images.frandroid.com/wp-content/uploads/2023/07/selection-apple-soldes-ete-2023.jpg"
                    className="img2 img-flud rounded-3"
                    alt="small binner"
                  />
                  <div className="small-banner-content position-absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <FaShippingFast className="icons" />
                  <div>
                    <h4>livraison gratuite</h4>
                    <p className="p mb-0">
                      {" "}
                      De toute commande supérieure à 300dt
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <MdLocalOffer className="icons" />
                  <div>
                    <h4>Offres surprises quotidiennes</h4>
                    <p className="p mb-0">Économisez jusqu'à 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <MdOutlineSupportAgent className="icons" />
                  <div>
                    <h4>Assistance 24/7</h4>
                    <p className="p mb-0">Achetez avec un expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <GiPriceTag className="icons" />
                  <div>
                    <h4>Prix abordables</h4>
                    <p className="p mb-0">Obtenez un prix direct d'usine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center border">
                  <div>
                    <h4 className="h60">camera</h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://s.alicdn.com/@sc04/kf/HTB13c6cy25TBuNjSspmq6yDRVXai.jpg_300x300.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center border">
                  <div>
                    <h4 className="h60">
                      Music &<br />
                      gaming
                    </h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://image.jeuxvideo.com/medias-md/158227/1582271131-3532-card.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center border">
                  <div>
                    <h4 className="h60">Smart TV</h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/t/v/tv-samsung-50-smart-cu7000-crystal-uhd-4k-20232.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center border ">
                  <div>
                    <h4 className="h60">
                      Smart
                      <br />
                      watches
                    </h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/4586/1.jpg?0214"
                    alt="camera"
                  />
                </div>
              </div>
              <div className="categories d-flex justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center border">
                  <div>
                    <h4 className="h60">camera</h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://s.alicdn.com/@sc04/kf/HTB13c6cy25TBuNjSspmq6yDRVXai.jpg_300x300.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center border">
                  <div>
                    <h4 className="h60">
                      Music &<br />
                      gaming
                    </h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://image.jeuxvideo.com/medias-md/158227/1582271131-3532-card.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center border">
                  <div>
                    <h4 className="h60">Smart TV</h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/t/v/tv-samsung-50-smart-cu7000-crystal-uhd-4k-20232.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center border ">
                  <div>
                    <h4 className="h60">
                      Smart
                      <br />
                      watches
                    </h4>
                    <p className="para">10 items</p>
                  </div>
                  <img
                    className="img12"
                    src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/4586/1.jpg?0214"
                    alt="camera"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collection-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h1>Collection vedette</h1>
            <br />
            <br />
            <div className="col-3">
              <Productcart
                src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                title="iPhone 14 Pro Max"
                description="The iPhone 14 Pro Max is the latest flagship smartphone from Apple, featuring a stunning Super Retina XDR display, powerful A15 Bionic chip, and advanced camera system."
                prix="100dt"
              />
            </div>
            <div className="col-3">
              <Productcart
                src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                title="Product 2"
                description="Description of Product 2."
                prix="100dt"
              />
            </div>
            <div className="col-3">
              <Productcart
                src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                title="Product 3"
                description="Description of Product 3."
                prix="100dt"
              />
            </div>
            <div className="col-3">
              <Productcart
                src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                title="Product 4"
                description="Description of Product 4."
                prix="100dt"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="containner-xxl">
          <h1>famous product</h1>
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img13" src="https://www.flbsolutions.com/media/catalog/product/cache/0e69c0a3af4a1191f674ab68a277fd4f/1/5/1590102_BL_fr_CA_1_f633.png"alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big screen</h5>
                  <h6>Smart watch series 7</h6>
                  <p>from 500dt </p>

                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img13" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnpS6bx1rnogeNGUGYTm3YrbIrIVwdsrG0Q&usqp=CAU"alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big screen</h5>
                  <h6>Smart watch series 7</h6>
                  <p>from 500dt </p>

                </div>
              </div>
            </div>
            
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img13" src="https://previews.123rf.com/images/ctrlh/ctrlh1611/ctrlh161100299/66524325-best-seller-le-produit-le-plus-populaire-de-l-ann%C3%A9e-ruban-de-r%C3%A9compense.jpg"alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big screen</h5>
                  <h6>Smart watch series 7</h6>
                  <p>from 500dt </p>

                </div>
              </div>
            </div> <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img13" src="https://www.flbsolutions.com/media/catalog/product/cache/0e69c0a3af4a1191f674ab68a277fd4f/1/5/1590102_BL_fr_CA_1_f633.png"alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big screen</h5>
                  <h6>Smart watch series 7</h6>
                  <p>from 500dt </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">special product</h3>
            </div>
          </div>
          <div className="row ">
            <Special />
            <Special />
            <Special />
          </div>
        </div>
      </section>
      <section className="populair-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">populaire produit</h3>
            </div>
          </div>
          <div className="row ">
            <Special />
            <Special />
            <Special />
          </div>
        </div>
      </section>
      <section className="marque-warpper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex lign-items-between">
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://www.tunisienumerique.com/wp-content/uploads/2023/12/Zara_Logo.png"
                      alt="zara"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://www.laptopspirit.fr/wp-content/uploads/new/2021/12/Branding_lenovo-logo_lenovologoposred_low_res.png"
                      alt="lenovo"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png"
                      alt="hp"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://drpciyuuf9kdh.cloudfront.net/save/media/2018/02/huawei-logo-.jpg"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://drpciyuuf9kdh.cloudfront.net/save/media/2018/02/huawei-logo-.jpg"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://drpciyuuf9kdh.cloudfront.net/save/media/2018/02/huawei-logo-.jpg"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://drpciyuuf9kdh.cloudfront.net/save/media/2018/02/huawei-logo-.jpg"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://drpciyuuf9kdh.cloudfront.net/save/media/2018/02/huawei-logo-.jpg"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://drpciyuuf9kdh.cloudfront.net/save/media/2018/02/huawei-logo-.jpg"
                      alt="huawi"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h1>Liste de nouveaux blogs</h1>
            <br />
            <br />
            <div className="col-3">
              <Blogcard
                src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
                title="Product 5"
                description="Description of Product 5."
              />
            </div>
            <div className="col-3">
              <Blogcard
                src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
                title="Product 6"
                description="Description of Product 6."
              />
            </div>
            <div className="col-3">
              <Blogcard
                src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
                title="Product 7"
                description="Description of Product 7."
              />
            </div>
            <div className="col-3">
              <Blogcard
                src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
                title="Product 8"
                description="Description of Product 8."
              />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Homepages;
