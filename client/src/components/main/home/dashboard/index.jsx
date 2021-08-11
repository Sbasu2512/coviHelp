import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProvinceList from './ProvinceList';
import WorldList from './WorldList' ;

const Dashboard = (props) => {
  const [state, setState] = useState({
    summary: [],
    worldData: []
  });


  const CanadaUrl = `https://api.opencovid.ca/summary` ;
  const worldUrl = `https://corona-api.com/countries`;

  useEffect(() => {
      axios.get(CanadaUrl)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          summary: res.data.summary,
        }));
        
      })
      .catch((err) => console.log(err.message))
    
    },[])

    useEffect(()=> {
      axios.get(worldUrl)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          worldData: res.data
        }));
      })
      .catch((err) => console.log(err))
    }, []);

  return (
    <div>
      <section>
        <h2>Province wise Data</h2>
      </section>
      <section>
        <ProvinceList data={state.summary}  />
      </section>
      <section>
        <h2>World Data</h2>
      </section>
      <section>
        <WorldList data={state.worldData}  />
      </section>
    </div>
  )
}

export default Dashboard;

