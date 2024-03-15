import React, { useContext, useState, useEffect } from "react";
import cartContext from "../context/cartContext";
import { FaTimes } from "react-icons/fa";

const ProductsCard = (props) => {
  const {
    img,
    rating,
    title,
    price,
    description,
    keyfeatures,
    pageLink,
    popupDescription,
    popupkeyfeatures,
    popupspecification,
    togglePopup,
    clickPdfDownload,
  } = props;

  const { addItem, isCartOpen } = useContext(cartContext);

  const [isAdded, setIsAdded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    const item = { ...props };
    addItem(item);

    setIsAdded(true);
    setTimeout(() => {
      setShowPopup(!showPopup);
    }, 3000);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };
  const TogglePopup = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };

  return (
    <>
      <div className="product_card" onClick={TogglePopup}>
        <figure>
          <img src={img} alt="item-img" />
        </figure>

        <strong className="rating">{rating}</strong>
        <h4 className="title" style={{ fontWeight: "bolder" }}>
          {title}
        </h4>
        <h3 className="price" style={{ fontWeight: "initial" }}>
          ₹ {price}
        </h3>
        <br></br>
        <h3 className="description" style={{ fontSize: "13px" }}>
       
          Description:<br></br> {description}
        </h3>
        <br></br>
      </div>


      {!isCartOpen && showPopup && (
        <>
          <div className="custom-popup">
            <div className="popup-content">
              {/* Popup content */}
              <h2
                style={{
                  fontWeight: "bold",
                  fontFamily: "Trebuchet MS",
                  fontSize: 25,
                }}
              >
                {title}
              </h2>
              <br />
              <br />
              <figure>
                <img src={img} alt="item-img" />
              </figure>
              {/* Description */}
              <div className="description">
                <p
                  style={{
                    fontWeight: "bold",
                    fontFamily: "-moz-initial",
                    fontSize: 30,
                  }}
                >
                  Description:
                </p>
                <div className="popdescription">
                {popupDescription.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              </div>
              <br/>

              {/* Specification */}
             
                <div className="specification">
                <p
                  style={{
                    fontWeight: "bold",
                    fontFamily: "-moz-initial",
                    fontSize: 30,
                  }}
                >
                  Specification
                </p>
                  <br />
                 
                 
                  <div className="specification-content">
                    {popupspecification.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
                {/* Key Features */}
            <br></br>
                <div className="keyfeaturespop">
                <p
                  style={{
                    fontWeight: "bold",
                    fontFamily: "-moz-initial",
                    fontSize: 30,
                  }}
                >
                  keyfeatures
                </p>
                  <br />
                  <div className="keyfeatures-content">
                    {popupkeyfeatures.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
    

              <br></br>
              <br></br>
              {/* Add to cart button */}
              <a
                href={clickPdfDownload} // Assuming you've added the clickPdfDownload property to your data
                download="product_specification.pdf"
                style={{
                  display: "block",
                  marginTop: "30px",
                  color: "black",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textAlign: "center",
                  width: 150,
                  height: 50,
                  position: "absolute",
                  bottom: 70,
                  right: 0,
                  fontWeight: "bold",
                }}
              >
                More details
              </a>
              <button
                type="button"
                style={{
                  height: 50,
                  width: 150,
                  backgroundColor: "yellowgreen",
                  color: "black",
                  fontWeight: "bold",
                }}
                className={`btn ${isAdded ? "added" : ""}`}
                onClick={handleAddToCart}
              >
                {isAdded ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
          {/* Close button */}

          <button className="corner-button" onClick={TogglePopup}>
            <FaTimes style={{ color: "red", fontSize: "20px" }} />
          </button>
        </>
      )}
    </>
  );
};

export default ProductsCard;
