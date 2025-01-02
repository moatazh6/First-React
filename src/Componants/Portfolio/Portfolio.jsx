import React, { useState } from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal-content")) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div className="portfolio vh-100 mb-0">
        <div className="header position-relative">
          <h1 className="text-center header">Portfolio Component</h1>
        </div>
        <div className="divider d-flex align-items-center justify-content-center m-0">
          <div className="line3"></div>
          <i className="star-icon3 mx-2">★</i>
          <div className="line3"></div>
        </div>
        <div className="container">
          <div className="row g-2">
            {[image1, image2, image3, image1, image2, image3].map(
              (image, index) => (
                <div className="col-md-4" key={index}>
                  <div className="portfolio-item position-relative">
                    <img
                      src={image}
                      alt={`Portfolio ${index}`}
                      className="w-100 img-thumbnail"
                      onClick={() => handleImageClick(image)}
                    />
                    <div className="overlay">
                      <i className="fa-solid fa-plus fa-3x text-white "></i>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="img-fluid" />
          </div>
        </div>
      )}
    </>
  );
}
