import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";
import { CiSearch } from "react-icons/ci";
import { TbCategory2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { getproductss } from "../features/Product/productSlice";

function Header() {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.auth.Panier);
  const productstate = useSelector((state) => state.Product?.Products);
  const [product, Setproduct] = useState([]);

  function calculateTotal(cartstate) {
    let total = 0;
    if (cartstate && cartstate.length > 0) {
      for (let rep = 0; rep < cartstate.length; rep++) {
        total += cartstate[rep].quantite * cartstate[rep].price;
      }
    }
    return total;
  }
  const navigate = useNavigate();
  /*   useEffect(() => {
    if (productstate && Array.isArray(productstate)) {
        const data = productstate.map((item, index) => ({
            
            prod: item?._id,
            name: item?.title,
        }));
        Setproduct(data);
    }
}, [productstate]);
 */

  useEffect(() => {
    // Assuming productstate is a state variable
    if (productstate && Array.isArray(productstate)) {
      const data = productstate.map((item) => ({
        prod: item ? item?._id : "",
        url: item ? item?.images[0].url : "",
        name: item ? item?.title : "",
      }));
      Setproduct(data);
    }
  }, [productstate]);
  const handlePaginate = () => {
    console.log("resultat pagin");
    // Add your pagination logic here
  };
  useEffect(() => {
    dispatch(getproductss());
  }, [dispatch]);
  const authState = useSelector((state) => state?.auth);

  return (
    <>
      {/* <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">free shopping $100</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                hotline:
                <a className="text-white" href="tel:+216028896143">
                  28 896 143
                </a>
              </p>
            </div>
          </div>
        </div>
      </header> */}
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="text-white ">MSI Consultants</h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <Typeahead
                  onPaginate={handlePaginate}
                  id="labelkey-example"
                  labelKey={(option) => `${option?.name}`}
                  options={product}
                  onChange={(selected) => {
                    navigate(`/produit/${selected[0]?.prod}`);
                  }}
                  placeholder="Chercher un produit!"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <CiSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/coupon.png" alt="compare" />
                  </Link>
                  <p className="d-flex align-items-center gap-10  text-white">
                    Coupon
                  </p>
                </div>
                <div>
                  <Link
                    to="/panier"
                    className="d-flex align-items-center gap-10  text-white"
                  >
                    <img src="images/wishlist.png" alt="wishlist" />
                  </Link>
                  <p className="d-flex align-items-center gap-10  text-white">
                    {" "}
                    favoris
                  </p>
                </div>
                <div>
                  <Link
                    to={authState?.user === null ? "/login" : "/profil"}
                    className="d-flex align-items-center gap-10  text-white"
                  >
                    <img src="images/login.png" alt="login" />
                  </Link>
                  <p className="d-flex align-items-center gap-10  text-white">
                    {authState?.user === null ? (
                      <>S'inscrire</>
                    ) : (
                      ` ${authState?.user?.lastname}`
                    )}
                  </p>
                </div>
                <div>
                  <Link
                    to="/carte"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/panier.png" alt="panier" />

                    <div className="d-flex flex-column gap-10">
                      {cartstate ? (
                        <span className="badge bg-white text-dark">
                          {cartstate?.length}
                        </span>
                      ) : (
                        <span className="badge bg-danger">0</span>
                      )}
                    </div>
                  </Link>
                  <p className="d-flex align-items-center gap-10  text-white">
                    panier:{cartstate ? calculateTotal(cartstate) : 0}DT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-botton py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              
              <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
        <div className="container-fluid col-12">
          <Link className="navbar-brand" to="/">
            <span className="me-5 d-inline-block">
              Home
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              
              <Link className="nav-item nav-link" to="/store">
                Boutique
              </Link>
              <Link className="nav-item nav-link" to="/blogs">
                Blog
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-item nav-link" to="/order">
                Commande
              </Link>
              <Link className="nav-item nav-link" to="/Enquirymessage">
                 Enquéte
              </Link>
              <Link
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="nav-item nav-link"
                to="#"
              >
                Se déconnecter
              </Link>
            </div>
          </div>
        </div>
      </nav>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
