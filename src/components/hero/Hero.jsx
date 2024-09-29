import { Link } from "react-router-dom";
import "./hero.css";
import pic from "../../images/restauranfood.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <h2>Little Lemon Restaurant</h2>
      <h3>Chicago</h3>
      <p>
        We are a family owned
        <br />
        Mediterranean restaurant,
        <br />
        focused on traditional
        <br />
        recipes served with a <br />
        modern twist.
      </p>
      <img src={pic} alt="" />
      <Link to="/getTable" className="btn">Reserve a table</Link>
    </div>
  );
};
export default Hero;
