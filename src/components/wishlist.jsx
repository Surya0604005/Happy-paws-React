function Wishlist({
  isOpen,

  closeWishlist,

  wishlistItems,
}) {
  return (
    <div className={`cart-panel ${isOpen ? "active" : ""}`}>
      <div className="cart-header">
        <h2>❤️ Wishlist</h2>

        <button className="close-cart" onClick={closeWishlist}>
          ✖
        </button>
      </div>

      <div className="cart-items">
        {wishlistItems.length === 0 ? (
          <p>No favourites yet</p>
        ) : (
          wishlistItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>

              <span>₹{item.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;
