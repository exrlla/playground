import { Link } from "react-router-dom";
export default function Nalgene() {
    return (
      <div className="waterbottle">
        <h1>nalgene 🏄🏻</h1>
        <img src="https://nalgene.com/wp-content/uploads/2022/05/wide-mouth.png" width={200} alt="nalgene" />
        <p>You're a hiker, climber, or an adventurer. You might have grown up with this water bottle too. 
          You have an ever growing bucket list.
        </p>
        <footer>
      <p>Back to <Link to="/">Home</Link> </p>
    </footer>
      </div>
    );
  }