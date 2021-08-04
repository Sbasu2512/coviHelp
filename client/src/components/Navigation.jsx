import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/symptoms">Symptoms </Link>
      <Link to="/testing_locations">Testing Locations </Link>
    </nav>
  );
};

export default Navigation;