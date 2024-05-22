import { Link } from 'react-router-dom'; 
import '../styles.css';

const NavBar = () => { 
    return ( 
        <div className="navbar"> 
            <Link to="/owala" >  Owala  </Link> 
            <Link to="/stanley" >  Stanley </Link> 
            <Link to="/yeti" >  Yeti  </Link> 
            <Link to="/hydroflask" >  Hydroflask </Link> 
            <Link to="/nalgene" >  Nalgene  </Link> 
        </div> 
    ); 
}; 

export default NavBar