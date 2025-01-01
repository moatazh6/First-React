import React from "react";
import logo from "../../assets/avatar.svg";

export default function Home() {
  return (
    <>
      <div className=" home d-flex justify-content-center vh-100 align-items-center flex-column">
        <div>
          <img src={logo} alt="" width={200} />
        </div>

        <div className="one">
          <h1 className="text-white sf">start Framework</h1>
          <div className="divider d-flex align-items-center justify-content-center m-0">
            <div className="line2"></div>
            <i className="star-icon mx-2">★</i>
            <div className="line2"></div>
          </div>
          <p className="text-white ps">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
