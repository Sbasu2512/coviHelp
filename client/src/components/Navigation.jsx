import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/vaccine">Vaccine </Link>
      <Link to="/covid19">Covid-19 </Link>
      <Link to="/social">Social </Link>
      <p>Welcome Guest</p>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navigation;