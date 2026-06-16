import { useState } from "react";

function Navbar({
  openCart,

  openWishlist,

  wishlistCount,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <i className="fa-solid fa-paw"></i>
        Happy Paws
      </div>

      <div className="nav-right">
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>

          <a href="#services">Services</a>

          <a href="#products">Products</a>

          <a href="#about">About</a>

          <a href="#footer">Contact</a>
        </nav>

        <div className="header-icons">
          <button className="wishlist-icon" onClick={openWishlist}>
            <i className="fa-solid fa-heart"></i>

            <span>{wishlistCount}</span>
          </button>

          <button className="cart-icon" onClick={openCart}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
    </header>
  );
}

export default Navbar;
