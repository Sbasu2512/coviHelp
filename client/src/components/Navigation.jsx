import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const username = "sayantan"
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/vaccine">Vaccine </Link>
      <Link to="/covid19">Covid-19 </Link>
      <Link to="/social">Social </Link>
      if(user) { 
        <div>
        <p>{username}</p>
        <Link to="/logout">Logout</Link>
        </div>
        } else {
          <div>
      <p>Welcome Guest</p>
      <Link to="/login">Login</Link>
      </div>
     } 

    </nav>
  );
};

export default Navigation;