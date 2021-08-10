import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProvinceList from './ProvinceList'

const Dashboard = (props) => {

  const [state, setState] = useState({
    summary: [],
  });

  // let today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // const yyyy = today.getFullYear();

  // today = dd + '-' + mm + '-' + yyyy;

  const summaryUrl = `https://api.opencovid.ca/summary`
  // const dailyData = `https://api.opencovid.ca/summary?date=today`

  useEffect(() => {
    
      Promise.all([
        axios.get(summaryUrl),
      ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          summary: all[0].data.summary,
        }));
      })
      .catch((err) => console.log(err.message))
    
    },[])
    

  return (
    <div>
      <section>
        <h2 className='page-title'></h2>
      </section>
      <section>
        <ProvinceList data={state}  />
      </section>
    </div>
  )
}



export default Dashboard;

