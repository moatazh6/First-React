import React from "react";

export default function footer() {
  return (
    <>
      <div className="footer  text-white ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-4 text-center">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 my-4">
              <h2 className="text-center">AROUND THE WEB</h2>
              <ul className="list-unstyled d-flex justify-content-center gap-4">
                {["facebook", "x", "instagram", "linkedin"].map(
                  (icon, index) => (
                    <li key={index}>
                      <i className={`fab fa-${icon}`}></i>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col-md-4 my-4 text-center">
              <h1>ABOUT FREELANCER</h1>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="copy-right text-white text-center   py-1 m-0">
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  );
}
