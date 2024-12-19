import "./Shoe.css";

export default function Shoe() {
  return (
    <div className="card">
      <img src="/shoe.jpeg" alt="shoe" className="shoe-image" />
      <h2 className="shoe-title">Nike Air Force 1</h2>
      <p className="shoe-description">Classic low-top sneaker with an iconic design</p>
      <p className="shoe-price">Price: $3.00</p>
      <button className="shoe-button">Sell</button>
    </div>
  );
}