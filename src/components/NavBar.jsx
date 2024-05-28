import { Link } from 'react-router-dom';
import '../styles.css'; 

export default function NavBar() {
  return (
    <div className="map-container">
      <br />
      <h2>Welcome to ReactTown!</h2>
      <div className="map">
        <Link to="/" >🏡</Link>
        <Link to="/1986`" >🪴</Link>
        <Link to="/1992" >🏫</Link>
        <Link to="/1998" >🏛️</Link>
        <Link to="/2006" >🏛️</Link>
        <Link to="/2013" >🏛️</Link>
        <Link to="/2017" >🏛️</Link>
      </div>
    </div>
  );
}
