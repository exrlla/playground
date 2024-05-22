import { Link } from "react-router-dom";

export default function Hydroflask() {
    return (
      <div className="waterbottle">
        <h1>hydroflask 💧</h1>
        <img src="https://cdn.shoplightspeed.com/shops/645578/files/36193232/hydroflask-hydroflask-21-oz-standard-mouth-bottle.jpg" width={200} alt="hydroflask" />
        <p>You stick to the basics, but you're not afraid to try new things. You have a taste for originality and are always on the go.
        </p>
        <footer>
      <p>Back to <Link to="/">Home</Link> </p>
    </footer>
      </div>
    );
  }