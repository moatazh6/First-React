import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="container-contact w-50 ">
        <div className="py-4">
          <h1 className="text-center mt-5">Contact Page</h1>
          <div className="divider d-flex align-items-center justify-content-center m-0">
            <div className="line3"></div>
            <i className="star-icon3 mx-2">★</i>
            <div className="line3"></div>
          </div>
          {/* userName */}
          <div className="mb-3">
            {formData.userName && (
              <label className="form-label text-primary">userName:</label>
            )}
            <input
              type="text"
              className="form-control"
              id="userName"
              aria-describedby="nameHelp"
              placeholder="userName"
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>

          {/* userAge */}
          <div className="mb-3">
            {formData.userAge && (
              <label className="form-label text-primary">userAge:</label>
            )}
            <input
              type="number"
              className="form-control"
              id="userAge"
              aria-describedby="ageHelp"
              placeholder="userAge"
              value={formData.userAge}
              onChange={handleInputChange}
            />
          </div>

          {/* userEmail */}
          <div className="mb-3">
            {formData.userEmail && (
              <label className="form-label text-primary">userEmail:</label>
            )}
            <input
              type="email"
              className="form-control"
              id="userEmail"
              aria-describedby="emailHelp"
              placeholder="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
            />
          </div>

          {/* userPassword */}
          <div className="mb-3">
            {formData.userPassword && (
              <label className="form-label text-primary">userPassword:</label>
            )}
            <input
              type="password"
              className="form-control"
              id="userPassword"
              aria-describedby="passwordHelp"
              placeholder="userPassword"
              value={formData.userPassword}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
