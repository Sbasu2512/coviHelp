import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const WorldList = (props) => {
  let data = props.data.data ;
      const world =  data? (data.map((countries, i) => {
        const population = (countries.population < 0 || countries.population === null)? '0': countries.population ;

        const cases_per_million = (countries.latest_data.calculated.cases_per_million_population < 0 || countries.latest_data.calculated.cases_per_million_population === null) ? '0' : countries.latest_data.calculated.cases_per_million_population ;

        const death_rate = (countries.latest_data.calculated.death_rate < 0 || countries.latest_data.calculated.death_rate === null)? '0' : countries.latest_data.calculated.death_rate ;

        const recoveryRate = (countries.latest_data.calculated.recovery_rate < 0 || countries.latest_data.calculated.recovery_rate === null)? '0' : countries.latest_data.calculated.recovery_rate;
        
      return (
        <div key={i}>
          <CardGroup>
          <Card style={{ width: '30%' }} bg={'dark'} text={'white'} border="light">
          <Card.Body>
            <Card.Title>{countries.name}</Card.Title>
           <Card.Text> Population: {population} </Card.Text>
             <Card.Text> Cases/Million: {cases_per_million} </Card.Text>
                <Card.Text> Death Rate: {death_rate} % </Card.Text>
           <Card.Text> Recovary Rate: {(Math.round((recoveryRate) * 100)/100).toFixed(2)} % </Card.Text>
            <Card.Text> Cases Today: {countries.today.confirmed} </Card.Text>
                <Card.Text> Deaths Today: {countries.today.deaths}  </Card.Text>
                <Card.Text> Total Confirmed Cases: {countries.latest_data.confirmed}   </Card.Text>
                <Card.Text> Total Deaths: {countries.latest_data.deaths}   </Card.Text>
                <Card.Text> Total Recovered: {countries.latest_data.recovered}   </Card.Text>
                <Card.Text> Last Updated on {countries.updated_at} </Card.Text>
          </Card.Body>
  </Card>
  </CardGroup>
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