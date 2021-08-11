import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProvinceList from './ProvinceList'

const Dashboard = (props) => {

  const [state, setState] = useState({
    summary: []
  });

  // let today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // const yyyy = today.getFullYear();

  // today = dd + '-' + mm + '-' + yyyy;

  const summaryUrl = `https://api.opencovid.ca/summary`

  useEffect(() => {
    
    
      axios.get(summaryUrl)
      .then((res) => {
        console.log('*********', res);
        setState((prev) => ({
          ...prev,
          summary: res.data.summary,
        }));
        
      })
      .catch((err) => console.log('@@@@@@@@',err.message))
    
    },[])
    
    console.log('!!!!!!!!!!!!', state);

  return (
    <div>
      <section>
        <h2>Province wise Data</h2>
      </section>
      <section>
        <ProvinceList data={state.summary}  />
      </section>
    </div>
  )
}



export default Dashboard;

