function TrainingPopup({
  show,

  close,
}) {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>🐕 Pet Training</h2>

        <p>
          We're preparing professional pet training services. Coming Soon 🚀
        </p>

        <button className="btn" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TrainingPopup;
