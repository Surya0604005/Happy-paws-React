function Cart({
  isOpen,

  closeCart,

  cartItems,
}) {
  const handleFinalBuy = () => {
    if (cartItems.length === 0) return;

    const items = cartItems

      .map((item) => `${item.name} - ₹${item.price}`)

      .join("\n");

    const total = cartItems.reduce(
      (sum, item) => sum + item.price,

      0,
    );

    const message = `Hello Happy Paws,

I would like to order:

${items}

Total: ₹${total}`;

    window.open(
      `https://wa.me/919491064509?text=${encodeURIComponent(message)}`,

      "_blank",
    );
  };

  return (
    <div className={`cart-panel ${isOpen ? "active" : ""}`}>
      <div className="cart-header">
        <h2>🛒 Your Cart</h2>

        <button className="close-cart" onClick={closeCart}>
          ✖
        </button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No items added yet</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>

              <span>₹{item.price}</span>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <h3>
          Total: ₹
          {cartItems.reduce(
            (total, item) => total + item.price,

            0,
          )}
        </h3>

        <button className="buy-btn" onClick={handleFinalBuy}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
