import React, { useEffect } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getBlog } from "../features/Blogs/BlogSlice";
function RenderHTML({ htmlContent }) {
  return (
    <div
      style={{
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
        
      }}
      dangerouslySetInnerHTML={{ __html:htmlContent }}
    />
  );
}

const Blogpage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const Blog_Id = location.pathname.split("/")[2];
  const BlogState = useSelector((state) => state.Blog.Blog);
  useEffect(() => {
    if (Blog_Id) {
      dispatch(getBlog(Blog_Id));
    }
  }, [dispatch, Blog_Id]);
  return (
    <>
      <PageHelmet title="blog" />
      <BreadCump title="blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card mb-3">
                {
                  <>
                    <h3 className="title text-center">{BlogState.title}</h3>
                    <img
                      src={
                        BlogState &&
                        BlogState.image &&
                        BlogState.image.length > 0
                          ? BlogState.image[0].url
                          : ""
                      }
                      alt="blog"
                      className="img-fluid w-100 my-4"
                    />
                    <div className="row">
  <div className="col-md">
    <h3>Nobre de vues:{BlogState.numViews} </h3>
  </div>
  <div className="col-md">
    <h3>crée ar:{BlogState.author} </h3>
  </div>
  <div className="col-md">
    <h3>crée a:{moment(BlogState.createdAt).format('MMMM Do YYYY')} Views</h3>
  </div>
</div>

                    <br/>
                    <p>
                      {<RenderHTML htmlContent={BlogState.description} />}
                    </p>
                  </>
                }

                <Link to="/blogs">
                  <IoIosArrowRoundBack className="icons" /> Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogpage;
