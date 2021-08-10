import { Link } from 'react-router-dom';

import './navigation.css'
const Navigation = (props) => {

  return (
    <nav style={{textAlign: 'left'}}>
      <div><Link to="/symptoms/months" className="navButton">Symptoms timeline</Link></div>
      <div><Link to="/symptoms/all" className="navButton">All symptoms</Link></div>
      <div><Link to="/symptoms/survey" className="navButton">Take the survey</Link></div>
    </nav>
    
  );
};

export default Navigation;