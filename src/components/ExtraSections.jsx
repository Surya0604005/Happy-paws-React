function ExtraSections({ openTrainingPopup }) {
  return (
    <>
      {/* Vet Care */}
      <section className="vet-care">
        <div className="vet-image" id="vetcare">
          <img src="/assets/vcare.png" alt="Vet Care" />
        </div>

        <div className="vet-content">
          <span>VET CARE</span>

          <h2>Professional Healthcare For Your Pets</h2>

          <p>
            Our experienced veterinarians provide routine checkups,
            vaccinations, health consultations and preventive care to keep your
            pets healthy and happy.
          </p>

          <div className="vet-features">
            <p>✔ Vaccinations</p>

            <p>✔ Health Checkups</p>

            <p>✔ Emergency Support</p>

            <p>✔ Nutrition Guidance</p>
          </div>

          <a
            href="https://wa.me/919491064509"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* Adoption */}

      <section className="adoption">
        <div className="section-title" id="adoption">
          <span>ADOPTION CENTER</span>

          <h2>Find Your New Best Friend</h2>

          <p>Give a loving pet a forever home.</p>
        </div>

        <div className="adoption-grid">
          <div className="adoption-card">
            <img src="/assets/gdog.png" alt="Golden Retriever" />

            <h3>Golden Retriever</h3>

            <p>2 Years Old • Friendly & Playful</p>
          </div>

          <div className="adoption-card">
            <img src="/assets/cat.png" alt="Persian Cat" />

            <h3>Persian Cat</h3>

            <p>1 Year Old • Calm & Loving</p>
          </div>

          <div className="adoption-card">
            <img src="/assets/bdog.png" alt="Beagle Puppy" />

            <h3>Beagle Puppy</h3>

            <p>6 Months Old • Energetic</p>
          </div>
        </div>
      </section>

      {/* Grooming */}

      <section className="grooming" id="grooming">
        <div className="grooming-content">
          <span>GROOMING & SPA</span>

          <h2>Your Pet Deserves To Feel Beautiful</h2>

          <p>
            Expert grooming services designed to keep your pets healthy, clean
            and comfortable.
          </p>

          <div className="price-card">
            <div>
              <h3>Basic Groom</h3>

              <p>Bath • Dry • Brush</p>
            </div>

            <span>₹499</span>
          </div>

          <div className="price-card">
            <div>
              <h3>Full Spa</h3>

              <p>Haircut • Nail Trim • Ear Cleaning</p>
            </div>

            <span>₹999</span>
          </div>

          <div className="price-card">
            <div>
              <h3>Royal Pamper</h3>

              <p>Luxury Spa Experience</p>
            </div>

            <span>₹1599</span>
          </div>

          <a
            href="https://wa.me/919491064509"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Book Grooming Session
          </a>
        </div>
      </section>

      {/* Testimonials */}

      <section className="testimonials" id="testimonials">
        <h2 className="heading">What Pet Parents Say</h2>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p>"Amazing grooming service. My dog loved it!"</p>

            <h4>- Sweety</h4>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p>"Great products and excellent customer service."</p>

            <h4>- Deepu</h4>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p>"Best pet shop in the city."</p>

            <h4>- Vamsi</h4>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="about" id="about">
        <div className="about-image">
          <img src="/assets/about-us.png" alt="About Happy Paws" />
        </div>

        <div className="about-content">
          <h2 className="about-heading">About Happy Paws</h2>

          <p>
            At Happy Paws, we are passionate about providing the best care for
            your beloved pets. From nutritious food and toys to grooming
            essentials and accessories, we ensure your companions stay healthy
            and happy.
          </p>

          <p>
            Our mission is to create a one-stop destination for pet owners by
            offering trusted products, premium services and exceptional customer
            care.
          </p>

          <a href="#services" className="btn">
            Explore Services
          </a>
        </div>
      </section>

      {/* <Footer /> */}

      <section className="footer-contact" id="footer">
        <div className="footer-grid">
          <div className="footer-box">
            <div className="footer-logo">
              <i className="fa-solid fa-paw"></i>
              Happy Paws
            </div>

            <p>
              Your trusted destination for pet food, grooming, toys and
              accessories.
            </p>

            <div className="social-icons">
              <a href="https://www.instagram.com/heyyy_blue?igsh=MW0weGZpZTgzaHV1dw==">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://youtube.com/shorts/chaReGoNGow?si=ld-b0llC1CfCApYC">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="https://wa.me/919491064509">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-box">
            <h3>Services</h3>

            <a href="#grooming">Grooming & Spa</a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                openTrainingPopup();
              }}
            >
              Pet Training
            </a>

            <a href="#vetcare">Vet Care</a>

            <a href="#petboarding">Pet Boarding</a>

            <a href="#adoption">Adoption Support</a>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>

            <a href="#services">Services</a>

            <a href="#products">Products</a>

            <a href="#about">About</a>
          </div>

          <div className="footer-box">
            <h3>Stay in the Loop 🐾</h3>

            <p>Weekly pet care tips & exclusive offers.</p>

            <input type="email" placeholder="your@email.com" />

            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Happy Paws Pet Shop. Made with ❤️ for pets.</p>
        </div>
      </section>
    </>
  );
}

export default ExtraSections;
