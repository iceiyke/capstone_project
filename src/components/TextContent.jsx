const TextContent = () => {
  return (
    <>
      <div className="ordersDelivery">
        <h3>ORDER FOR DELIVERY!</h3>
        <ul className="mealsList">
          <li className="meal">Lunch</li>
          <li className="meal">Mains</li>
          <li className="meal">Desserts</li>
          <li className="meal">A La Carte</li>
          <li className="meal">Specials</li>
        </ul>
      </div>
      <div className="specials">
        <div className="card">
          <h3>Greek Salad</h3>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago...
            <br />
          </p>
          <p>$ 12.99</p>
        </div>
        <div className="card">
          <h3>Brushetta</h3>
          <p>
            Our Brushetta is made from grilled bread that has been smeared with
            garlic...
            <br />
          </p>
          <p>$7.99</p>
        </div>
        <div className="card">
          <h3>Grilled Fish</h3>
          <p>
            Lorem ipsum delor sit amet, consectetu monr kutyr...
            <br />
          </p>
          <p>$4.99</p>
        </div>
      </div>
    </>
  );
}
export default TextContent