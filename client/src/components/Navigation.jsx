import { Link } from 'react-router-dom';

const Navigation = (props) => {

  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/symptoms">Social </Link>
      <br />
      <br />
    </nav>
  );
};

export default Navigation;