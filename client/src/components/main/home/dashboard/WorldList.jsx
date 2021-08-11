import React from 'react';
import Card from 'react-bootstrap/Card';

const WorldList = (props) => {
  console.log(props.data.data)
  let data = props.data.data ;
      const world =  data? (data.map((countries, i) => {
//(Math.round(num * 100) / 100).toFixed(2)
      return (
        <div key={i}>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{countries.name}</Card.Title>
           <Card.Text> Population: {countries.population} </Card.Text>
             <Card.Text> Cases/Million: {countries.latest_data.calculated.cases_per_million_population} </Card.Text>
            
                <Card.Text> Death Rate: {countries.latest_data.calculated.death_rate} % </Card.Text>
           <Card.Text> Recovary Rate: {(Math.round((countries.latest_data.calculated.recovery_rate) * 100)/100).toFixed(2)} % </Card.Text>
            <Card.Text> Cases Today: {countries.today.confirmed} </Card.Text>
                <Card.Text> Deaths Today: {countries.today.deaths}  </Card.Text>
                <Card.Text> Total Confirmed Cases: {countries.latest_data.confirmed}   </Card.Text>
                <Card.Text> Total Deaths: {countries.latest_data.deaths}   </Card.Text>
                <Card.Text> Total Recovered: {countries.latest_data.recovered}   </Card.Text>
                <Card.Text> Last Updated on {countries.updated_at} </Card.Text>
          </Card.Body>
  </Card>
        </div>
      )
    })) : (
      <Card.Body>
    Loading...
  </Card.Body>
    )

  return (
    <div>
      {world}
    </div>
  )
}

export default WorldList ;