import React, { useContext, useEffect, useState } from "react";
import cartContext from "../context/cartContext";
import productImage from "../assets/images/payment.jpg"; // Import your product image
import { FaTimes } from "react-icons/fa"; // Import close icon from react-icons library

const Cart = () => {
  const {
    isCartOpen,
    cartItems,
    toggleCart,
    removeItem,
    incrementItem,
    decrementItem,
  } = useContext(cartContext);
  const [checkoutClicked, setCheckoutClicked] = useState(false); // State to track if checkout button is clicked
  const [imageClosed, setImageClosed] = useState(false); // State to track if the image is closed

  useEffect(() => {
    const docBody = document.body;

    isCartOpen
      ? docBody.classList.add("overflow_hide")
      : docBody.classList.remove("overflow_hide");
  }, [isCartOpen]);

  useEffect(() => {
    const outsideClose = (e) => {
      if (e.target.id === "cart") {
        toggleCart(false);
      }
    };
  
    window.addEventListener("click", outsideClose);

    return () => {
      window.removeEventListener("click", outsideClose);
    };
  }, [toggleCart]);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const handleCheckoutClick = () => {
    setCheckoutClicked(true);
    toggleCart(false); // Close the cart popup after checkout button is clicked
    toggleCart(!isCartOpen);
  };

  const handleCloseImage = () => {
    setImageClosed(true);
  };

  return (
    <>
      {isCartOpen && !checkoutClicked &&  (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>
                Cart <small>({cartQuantity})</small>
              </h2>
              <div
                title="Close"
                className="close_btn"
                onClick={() => toggleCart(false)}
              >
                <span>&times;</span>
              </div>
            </div>

            <div className="cart_body">
              {cartQuantity === 0 ? (
                <h2>Cart is empty</h2>
              ) : (
                cartItems.map((item) => {
                  const { id, img, title, price, quantity } = item;
                  const itemTotal = price * quantity;

                  return (
                    <div className="cart_items" key={id}>
                      <figure className="cart_items_img">
                        <img src={img} alt="product-img" />
                      </figure>

                      <div className="cart_items_info">
                        <h4>{title}</h4>
                        <h3 className="price">
                          ₹ {itemTotal.toLocaleString()}
                        </h3>
                      </div>

                      <div className="cart_items_quantity">
                        <span onClick={() => decrementItem(id)}>&#8722;</span>
                        <b>{quantity}</b>
                        <span onClick={() => incrementItem(id)}>&#43;</span>
                      </div>

                      <div
                        title="Remove Item"
                        className="cart_items_delete"
                        onClick={() => removeItem(id)}
                      >
                        <span>&times;</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="cart_foot">
              <h3 style={{ color: "black" }}>
                <small>Total:</small>
                <b>₹ {cartTotal.toLocaleString()}</b>
              </h3>

              <button
                type="button"
                className="checkout_btn"
                disabled={cartQuantity === 0}
                onClick={handleCheckoutClick}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {!imageClosed && checkoutClicked && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="centered-image" style={{ position: "relative" }}>
            <img
              style={{ width: "500px", height: "600px" }}
              src={productImage}
              alt="product-img"
            />
            <div
              className="total-value"
              style={{
                position: "absolute",
                top: 250,
                right: 150,
                zIndex: 1,
                padding: "10px",
                backgroundColor: "goldenrod",
              }}
            >
              <h3 style={{ color: "Black" }}>
                <small>Total: </small>
                <b>₹ {cartTotal.toLocaleString()}</b>
              </h3>
            </div>
            <FaTimes className="close-icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
