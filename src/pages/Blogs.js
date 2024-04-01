import React, { useEffect } from "react";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Blogcard from "../conmponentes/Blogcart";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/Blogs/BlogSlice";
import moment from 'moment';

const Blogs = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getBlogs())
  },[dispatch])
  const blogState = useSelector((state)=>state.Blog.Blogs)
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    } else {
        return text;
    }
}
  function RenderHTML({ htmlContent }) {
    return <div style={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
    }} dangerouslySetInnerHTML={{ __html: truncateText(htmlContent, 100) }} />;
}

  return (
    <>
      <PageHelmet title="Blogs" />
      <BreadCump title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">trouver par catégories</h3>
                <div>
                  <ul className="ps-0">
                    <li>watch</li>
                    <li>TV</li>
                    <li>Laptop</li>
                    <li>Smart watch</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
              {blogState && blogState.map((blog,key)=>{
                return (
                  <div className="col-md-6 mb-4">
                  <Blogcard
                    src={blog.image.map((image)=>{return image.url})}
                    description={<RenderHTML htmlContent={blog.description} />}
                    date={moment(blog.createdAt).format('MMMM Do YYYY')} // Formatage de la date ici
                    title={blog.title}
                    key={key}
                    id={blog._id}
                  />
                </div>
                )
              })}
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;