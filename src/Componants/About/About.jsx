import React from "react";

function About() {
  return (
    <>
      <div className="About vh-100 justify-content-center align-items-center d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center text-white">
          <h1>about component</h1>
        </div>
        <div className="divider d-flex align-items-center justify-content-center m-0">
          <div className="line "></div>
          <i className="star-icon mx-2">★</i>
          <div className="line"></div>
        </div>

        <div className="container ">
          <div className="row d-flex justify-content-center mt-0 text-white">
            <div className="col-md-4">
              <div className="item">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
