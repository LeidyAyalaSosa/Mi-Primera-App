import "../styles/AppStyles.css";

function TitleComponent() {
  return (
    <div className="Container">
      <h1>MI PRIMERA APP</h1>
      <label for="id-input" className="from-label">
        Id:
      </label>
      <input type="number" id="id-input" className="from-input" />
      <label for="name-input" className="from-label">
        Name:
      </label>
      <input type="text" id="name-input" className="from-input" />
      <button>SEND</button>
    </div>
  );
}

export default TitleComponent;
