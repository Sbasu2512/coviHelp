import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const username = "sayantan"
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/symptoms">Social </Link>
      <span>Logged as <strong>User123</strong></span>

    </nav>
  );
};

export default Navigation;