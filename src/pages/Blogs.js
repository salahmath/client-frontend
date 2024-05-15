import React, { useEffect, useState } from "react";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Blogcard from "../conmponentes/Blogcart";
import { useDispatch, useSelector } from "react-redux";
import { getBlogcategories, getBlogs } from "../features/Blogs/BlogSlice";
import moment from "moment";
import { Radio } from "antd";
import { Alert, Flex, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Blogs = () => {
  const [radio, setRadio] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Nouvel état de chargement
  const [loading1, setLoading1] = useState(true); // Nouvel état de chargement

  useEffect(() => {
    dispatch(getBlogs()).then(()=>{
      setLoading(false); // Met à jour l'état de chargement
    });
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
useEffect(()=>{
  dispatch(getBlogcategories()).then(()=>{
    setLoading1(false)
  })
},[dispatch])
const catstate=useSelector((state)=>state?.Blog?.Blogcat)
useEffect(() => {
  if (!radio) {
    const filteredByBrand = blogState;
    setFilteredUsers(filteredByBrand);
  } else {
    const filteredByBrand = blogState.filter(
      (blog) => blog.category === radio
    );
    setFilteredUsers(filteredByBrand);
  }

  
}, [radio,  blogState]);
const uniqueCategories = new Set();
  blogState.forEach((product) => {
    if (product.category) {
      uniqueCategories.add(product.category);
    }
  });
  const handleCategoryChange = (value) => {
    setRadio(value);
  };
  return (
    <>
      <PageHelmet title="Blogs" />
      <BreadCump title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">trouver par catégories</h3>
                {loading ? ( // Affiche l'animation de chargement si loading est vrai
                <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    }
  />
        ) : (
                <div>
                  <ul className="ps-0">
                  {Array.from(uniqueCategories).map((cat) => (
                    <>
                      <Radio
                        key={cat}
                        value={cat}
                        checked={radio === cat}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                      >
                        {cat}
                      </Radio>
                      <br/>
                      </>
                    ))}
                  </ul>
                </div>)}
              </div>
            </div>


            <div className="col-9">
            {loading ? ( // Affiche l'animation de chargement si loading est vrai
          <div className="loading-container">
            <Flex gap="small" vertical>
              <Flex gap="small"></Flex>
              <Spin tip="Chargement...">
  <Alert
    message="Liste des Blogs"
    description="Découvrez ci-dessous une liste de tous nos blogs récents."
    type="info"
  />
</Spin>

            </Flex>
          </div>
        ) : (
              <div className="row">
                {filteredUsers ===""?(
                  blogState.map((blog, key) => {
                    return (
                      <div className="col-md-6 mb-4">
                        <Blogcard
                          src={blog.image.map((image) => {
                            return image.url;
                          })}
                          description={
                            <RenderHTML htmlContent={blog.description} />
                          }
                          date={moment(blog.createdAt).format("MMMM Do YYYY")} // Formatage de la date ici
                          title={blog.title}
                          key={key}
                          id={blog._id}
                        />
                      </div>
                    );
                  })):(
                  filteredUsers.map((blog, key) => {
                    return (
                      <div className="col-md-6 mb-4">
                        <Blogcard
                          src={blog.image.map((image) => {
                            return image.url;
                          })}
                          description={
                            <RenderHTML htmlContent={blog.description} />
                          }
                          date={moment(blog.createdAt).format("MMMM Do YYYY")} // Formatage de la date ici
                          title={blog.title}
                          key={key}
                          id={blog._id}
                        />
                      </div>
                    );
                  }))}
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
