import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProvinceList from './ProvinceList'

const Dashboard = (props) => {
  const [state, setState] = useState({
    summary: []
  });

  const summaryUrl = `https://api.opencovid.ca/summary`

  useEffect(() => {
      axios.get(summaryUrl)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          summary: res.data.summary,
        }));
        
      })
      .catch((err) => console.log(err.message))
    
    },[])

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

