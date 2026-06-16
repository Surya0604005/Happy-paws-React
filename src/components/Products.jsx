import { useState } from "react";

function Products({
  addToCart,

  updateWishlist,
}) {
  const [favorites, setFavorites] = useState({});
  const toggleFavorite = (key, product) => {
    const wasFavorite = favorites[key];

    setFavorites((prev) => ({
      ...prev,

      [key]: !prev[key],
    }));

    updateWishlist(product);
  };

  return (
    <section className="store-products" id="products">
      <div className="section-title">
        <span>OUR STORE</span>

        <h2>Handpicked Premium Products</h2>

        <p>Quality products selected with love and care.</p>
      </div>

      <div className="products-grid">
        <div className="product-box">
          <button
            className="fav-btn"
            onClick={() =>
              toggleFavorite(
                "dog",

                {
                  name: "Premium Dog Treats",

                  price: 349,
                },
              )
            }
          >
            <i
              className={
                favorites.dog ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }
            ></i>
          </button>

          <img src="/assets/dog-food.png" alt="Dog Treats" />

          <h3>Premium Dog Treats</h3>

          <p>Healthy snacks for active dogs.</p>

          <span>₹349</span>

          <button
            className="buy-btn"
            onClick={() =>
              addToCart({
                name: "Premium Dog Treats",

                price: 349,
              })
            }
          >
            Buy Now
          </button>
        </div>

        <div className="product-box">
          <button
            className="fav-btn"
            onClick={() =>
              toggleFavorite(
                "cat",

                {
                  name: "Salmon Cat Food",

                  price: 599,
                },
              )
            }
          >
            <i
              className={
                favorites.cat ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }
            ></i>
          </button>

          <img src="/assets/cat-food.png" alt="cat Food" />

          <h3>Salmon Cat Food</h3>

          <p>Protein-rich grain-free nutrition.</p>

          <span>₹599</span>

          <button
            className="buy-btn"
            onClick={() =>
              addToCart({
                name: "Salmon Cat Food",

                price: 599,
              })
            }
          >
            Buy Now
          </button>
        </div>

        <div className="product-box">
          <button
            className="fav-btn"
            onClick={() =>
              toggleFavorite(
                "bed",

                {
                  name: "Orthopedic Dog Bed",

                  price: 1299,
                },
              )
            }
          >
            <i
              className={
                favorites.bed ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }
            ></i>
          </button>

          <img src="/assets/bed.png" alt="Dog Bed" />

          <h3>Orthopedic Dog Bed</h3>

          <p>Comfort and support for better sleep.</p>

          <span>₹1299</span>

          <button
            className="buy-btn"
            onClick={() =>
              addToCart({
                name: "Orthopedic Dog Bed",

                price: 1299,
              })
            }
          >
            Buy Now
          </button>
        </div>

        <div className="product-box">
          <button
            className="fav-btn"
            onClick={() =>
              toggleFavorite(
                "ball",

                {
                  name: "Pet Toy Ball",

                  price: 199,
                },
              )
            }
          >
            <i
              className={
                favorites.ball ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }
            ></i>
          </button>

          <img src="/assets/ball.jpg" alt="Pet Toy" />

          <h3>Pet Toy Ball</h3>

          <p>Fun and engaging playtime companion.</p>

          <span>₹199</span>

          <button
            className="buy-btn"
            onClick={() =>
              addToCart({
                name: "Pet Toy Ball",

                price: 199,
              })
            }
          >
            Buy Now
          </button>
        </div>

        <div className="product-box">
          <button
            className="fav-btn"
            onClick={() =>
              toggleFavorite(
                "collar",

                {
                  name: "Collar & Leash Set",

                  price: 399,
                },
              )
            }
          >
            <i
              className={
                favorites.collar ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }
            ></i>
          </button>

          <img src="/assets/collar.png" alt="Collar" />

          <h3>Collar & Leash Set</h3>

          <p>Stylish and durable walking essentials.</p>

          <span>₹399</span>

          <button
            className="buy-btn"
            onClick={() =>
              addToCart({
                name: "Collar & Leash Set",

                price: 399,
              })
            }
          >
            Buy Now
          </button>
        </div>

        <div className="product-box">
          <button
            className="fav-btn"
            onClick={() =>
              toggleFavorite(
                "scratcher",

                {
                  name: "Premium Cat Scratcher",

                  price: 899,
                },
              )
            }
          >
            <i
              className={
                favorites.scratcher
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }
            ></i>
          </button>

          <img src="/assets/cat-scratcher.png" alt="Cat Scratcher" />

          <h3>Premium Cat Scratcher</h3>

          <p>Scratch, Climb, Rest In Comfort.</p>

          <span>₹899</span>

          <button
            className="buy-btn"
            onClick={() =>
              addToCart({
                name: "Premium Cat Scratcher",

                price: 899,
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
