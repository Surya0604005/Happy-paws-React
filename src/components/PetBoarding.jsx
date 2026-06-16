function PetBoarding() {
  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=16.5062,80.6480",

      "_blank",
    );
  };

  return (
    <section className="pet-boarding" id="petboarding">
      <div className="boarding-image">
        <img src="/assets/pet-boarding.png" alt="Pet Boarding" />
      </div>

      <div className="boarding-content">
        <span>PET BOARDING</span>

        <h2>Safe & Comfortable Stay For Your Pets</h2>

        <p>
          Going out of town? Leave your pets in a loving, secure and supervised
          environment where they receive care, playtime and attention throughout
          the day.
        </p>

        <div className="boarding-features">
          <p>✔ Air Conditioned Rooms</p>

          <p>✔ Daily Walks & Playtime</p>

          <p>✔ CCTV Monitoring</p>

          <p>✔ Trained Pet Caretakers</p>
        </div>

        <button className="btn" onClick={openMaps}>
          📍 Get Directions
        </button>
      </div>
    </section>
  );
}

export default PetBoarding;
