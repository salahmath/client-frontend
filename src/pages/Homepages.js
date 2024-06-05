import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import Blogcard from "../conmponentes/Blogcart";
import Productcart from "../conmponentes/Productcart";
import Special from "../conmponentes/Special";
import PageHelmet from "../conmponentes/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/Blogs/BlogSlice";
import moment from "moment";
import { AddToLoves, getproductss } from "../features/Product/productSlice";
import ImgMediaCard from "../conmponentes/Cards";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Skeleton from '@mui/material/Skeleton'

const Homepages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const blogState = useSelector((state) => state.Blog.Blogs);
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  function RenderHTML({ htmlContent }) {
    return (
      <div
        style={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
        }}
        dangerouslySetInnerHTML={{ __html: truncateText(htmlContent, 100) }}
      />
    );
  }
  function getRandomBlogs(blogState) {
    const randomIndices = [];
    while (randomIndices.length < 4) {
      const randomIndex = Math.floor(Math.random() * blogState.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const selectedBlogs = randomIndices.map((index) => blogState[index]);
    return selectedBlogs;
  }
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  useEffect(() => {
    if (blogState.length > 0) {
      setSelectedBlogs(getRandomBlogs(blogState));
    }
  }, [blogState]);

  useEffect(() => {
    dispatch(getproductss());
  }, [dispatch]);
  const Productstate = useSelector((state) => state?.Product?.Products);
  const getRandomItems = (arr, numItems) => {
    if (!arr) return [];
    const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Copier le tableau 
    return shuffled.slice(0, numItems);
  };

  const onSaleProducts = Productstate?.filter(
    (product) => product?.tags === "En solde"
  );
  const randomOnSaleProduct = getRandomItems(onSaleProducts, 1)[0];
  const navigate = useNavigate();
  // Fonction pour mélanger aléatoirement un tableau
  function shuffleArray(array) {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math?.floor(Math?.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const mutableProductState = [...Productstate];
  const shuffledProductState = shuffleArray(mutableProductState);

  // Récupérer les trois premiers éléments mélangés pour les images
  const images = shuffledProductState.slice(0, 3).map((item) => ({
    url: item?.images[0]?.url, //
    title: item?.title, //
    width: "30%", // 
    id: item?._id, //
  }));
  const images1 = Productstate.slice(0, 3).map((item) => ({
    url: item?.images[0]?.url, // 
    width: "30%", //
    id: item?._id, //
  }));

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  function getRandomoulair(Productstate) {
    const selectedProduct = [];
    const availableProducts = Productstate?.filter((product) => product?.tags === "mis en avant");
  
    while (selectedProduct.length < 4 && availableProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableProducts.length);
      const randomProduct = availableProducts[randomIndex];
      selectedProduct.push(randomProduct);
      availableProducts.splice(randomIndex, 1);
    }
  
    return selectedProduct;
  }
  
  const [selectedProduct, setSelectedProduct] = useState([]);
  
  useEffect(() => {
    if (Productstate.length > 0) {
      setSelectedProduct(getRandomoulair(Productstate));
    }
  }, [Productstate]);


  function getRandomoulair1(Productstate) {
    const selectedProduct1 = [];
    const availableProducts = Productstate?.filter((product) => product?.tags === "spécial");
  
    while (selectedProduct1.length < 4 && availableProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableProducts.length);
      const randomProduct = availableProducts[randomIndex];
      selectedProduct1.push(randomProduct);
      availableProducts.splice(randomIndex, 1);
    }
  
    return selectedProduct1;
  }
  
  const [selectedProduct1, setSelectedProduct1] = useState([]);
  useEffect(() => {
    if (Productstate.length > 0) {
      setSelectedProduct1(getRandomoulair1(Productstate));
    }
  }, [Productstate]);


  useEffect(() => {
    if (Productstate.length > 0) {
      setSelectedProduct2(getRandomoulair2(Productstate));
    }
  }, [Productstate]);


  function getRandomoulair2(Productstate) {
    const selectedProduct2 = [];
    const availableProducts = Productstate?.filter((product) => product?.tags === "populair");
  
    while (selectedProduct2.length < 4 && availableProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableProducts.length);
      const randomProduct = availableProducts[randomIndex];
      selectedProduct2.push(randomProduct);
      availableProducts.splice(randomIndex, 1);
    }
  
    return selectedProduct2;
  }
  
  const [selectedProduct2, setSelectedProduct2] = useState([]);
  
  useEffect(() => {
    if (Productstate.length > 0) {
      setSelectedProduct2(getRandomoulair2(Productstate));
    }
  }, [Productstate]);
  return (
    <>
      <PageHelmet title="Home" />
      <section className="home-wrapper1 py-5">
        <div className="container-xxl">
          <div className="row">
          <div className="d-flex">
            {/* <div className="col-3">
              <div className="main-banner position-relative p-3">
                {randomOnSaleProduct ? (
                  <>
                    <img
                      onClick={() => {
                        navigate(`/produit/${randomOnSaleProduct?._id}`);
                      }}
                      src={randomOnSaleProduct.images[0].url} // Utiliser la première image du produit
                      className=" img-fluid rounded-4"
                      alt={randomOnSaleProduct.title}
                    />
                    <div className="main-banner-content position-absolute">
                      <p onClick={() => {
                        navigate(`/produit/${randomOnSaleProduct?._id}`);
                      }} className="">
                        -{randomOnSaleProduct.solde}DT
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="card-body">
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
                )}
              </div>
            </div> <div className="col-3">
              <div className="main-banner position-relative p-3">
                {randomOnSaleProduct ? (
                  <>
                    <img
                      onClick={() => {
                        navigate(`/produit/${randomOnSaleProduct?._id}`);
                      }}
                      src={randomOnSaleProduct.images[0].url} // Utiliser la première image du produit
                      className=" img-fluid rounded-4"
                      alt={randomOnSaleProduct.title}
                    />
                    <div className="main-banner-content position-absolute">
                      <p onClick={() => {
                        navigate(`/produit/${randomOnSaleProduct?._id}`);
                      }} className="">
                        -{randomOnSaleProduct.solde}DT
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="card-body">
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
                )}
              </div>
            </div> */}
            </div>
            <div className=" thisiam">
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
          
        </div></div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className=" ena services d-flex align-items-center justify-content-between">
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
      <section className="marque-warpper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex lign-items-between">
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1280px-Zara_Logo.svg.png"
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
                      src="https://logo-marque.com/wp-content/uploads/2020/04/Apple-Logo.png"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://logo-marque.com/wp-content/uploads/2020/09/Nokia-Logo.png"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://1000logos.net/wp-content/uploads/2022/12/POCO-Emblem.png"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://www.thd.tn/wp-content/uploads/2020/11/oppo-logo-e1604398366388.png"
                      alt="huawi"
                    />
                  </div>
                  <div>
                    <img
                      className="img11 mx-4 ww-25"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Itel-mobile-logo-vector.svg/1024px-Itel-mobile-logo-vector.svg.png"
                      alt="huawi"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
          <div className="col-1">
          </div> 
            <div className="col-11">
              <Box
                sx={{
                  display: "flex",
                //  flexWrap: "wrap",
                ///  minWidth: 300,
                 // width: "100%",
                }}
              >
                {images.map((image) => (
                  <ImageButton
                    focusRipple
                    key={image?.title}
                    style={{
                      width: image.width,
                    }}
                    onClick={() => {
                      navigate(`/produit/${image?.id}`);
                    }}
                  >
                    <ImageSrc
                      style={{ backgroundImage: `url(${image?.url})` }}
                    />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                          position: "relative",
                          p: 4,
                          pt: 2,
                          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                      >
                        {image?.title}
                        <ImageMarked className="MuiImageMarked-root" />
                      </Typography>
                    </Image>
                  </ImageButton>
                ))}
              </Box>
            </div>
         
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">produit célèbre</h3>
            </div>
          </div>
          <div className="row">
  
    {selectedProduct.map((product, key) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
        <ImgMediaCard
          title={product.title}
          src={product?.images[0]?.url}
          price={product.price}
          description={<RenderHTML htmlContent={product.description} />}
          brand={product.brand}
          totalrating={product.totalrating}
          quatite={product.quantite}
          id={product._id}
          solde={product.solde}
        />
      </div>
    ))}
    {(selectedProduct.length < 4 ? Array.from({ length: 4 - selectedProduct.length }).fill(null) : []).map((_, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={`skeleton-${index}`}>
        <div className="card">
          <div className="card-body">
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">produit special</h3>
            </div>
          </div>
          <div className="row">
    {selectedProduct1.map((product, key) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
        <ImgMediaCard
          title={product.title}
          src={product?.images[0]?.url}
          price={product.price}
          description={<RenderHTML htmlContent={product.description} />}
          brand={product.brand}
          totalrating={product.totalrating}
          quatite={product.quantite}
          id={product._id}
        />
      </div>
    ))}
    
  </div>



        </div>
      </section>
      <section className="populair-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">produit populaire</h3>
            </div>
          

            <div className="row">
    {selectedProduct2.map((product, key) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
        <ImgMediaCard
          title={product.title}
          src={product?.images[0]?.url}
          price={product.price}
          description={<RenderHTML htmlContent={product.description} />}
          brand={product.brand}
          totalrating={product.totalrating}
          quatite={product.quantite}
          id={product._id}
          
        />
      </div>
    ))}
   
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
            {selectedBlogs?.map((blog, key) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
                <Blogcard
                  src={blog?.image?.map((image) => image?.url)}
                  description={<RenderHTML htmlContent={blog.description} />}
                  date={moment(blog.createdAt).format("MMMM Do YYYY")}
                  title={blog.title}
                  id={blog._id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepages;
