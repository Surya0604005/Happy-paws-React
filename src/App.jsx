import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ExtraSections from "./components/ExtraSections";
import { useState } from "react";
import Wishlist from "./components/Wishlist";
import PetBoarding from "./components/PetBoarding";
import TrainingPopup from "./components/TrainingPopup";

import "./style.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);

    setIsCartOpen(true);
  };
  const openCart = () => {
    setIsCartOpen(true);
  };

  const [wishlistItems, setWishlistItems] = useState([]);

  const updateWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.name === product.name);

      if (exists) {
        return prev.filter((item) => item.name !== product.name);
      }

      return [...prev, product];
    });
  };

  const [showTrainingPopup, setShowTrainingPopup] = useState(false);

  const openTrainingPopup = () => {
    setShowTrainingPopup(true);
  };

  const closeTrainingPopup = () => {
    setShowTrainingPopup(false);
  };

  const [wishlistOpen, setWishlistOpen] = useState(false);

  const openWishlist = () => {
    setWishlistOpen(true);
  };

  const closeWishlist = () => {
    setWishlistOpen(false);
  };

  return (
    <>
      <Navbar
        openCart={openCart}
        openWishlist={openWishlist}
        wishlistCount={wishlistItems.length}
      />

      <Wishlist
        isOpen={wishlistOpen}
        closeWishlist={closeWishlist}
        wishlistItems={wishlistItems}
      />

      <Cart
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />

      <Hero />

      <Services />

      <PetBoarding />

      <Products addToCart={addToCart} updateWishlist={updateWishlist} />

      <ExtraSections openTrainingPopup={openTrainingPopup} />
      <TrainingPopup show={showTrainingPopup} close={closeTrainingPopup} />
    </>
  );
}

export default App;
