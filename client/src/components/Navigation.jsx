import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/home">Home - </Link>
      <Link to="/login">Login - </Link>
      <Link to="/covid19">Covid-19 - </Link>
      <Link to="/symptoms">Social</Link>

    </nav>
  );
};

export default Navigation;