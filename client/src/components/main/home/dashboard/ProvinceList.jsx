import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ProvinceList = (props) => {
  let data = props.data ;
      const province =  data? (data.map((province, i) => {
      const  dailyChange = province.active_cases_change > 0 ? `(+ ${province.active_cases_change})` : `(- ${province.active_cases_change})`;

      return (
        <div key={i}>
          <CardGroup>
          <Card style={{ width: '18rem' }} bg={'dark'} text={'white'} border="light">
          <Card.Body >
            <Card.Title>{province.province}</Card.Title>
            <Card.Text> Cases Today: {province.cases} </Card.Text>
                <Card.Text> Deaths Today: {province.deaths}  </Card.Text>
                <Card.Text> Recovered Today: {province.recovered}  </Card.Text>
                <Card.Text> Total Active Cases: {province.active_cases} {dailyChange}  </Card.Text>
                <Card.Text> Total Deaths: {province.cumulative_deaths}   </Card.Text>
                <Card.Text> Total Recovered: {province.cumulative_recovered}   </Card.Text>
                <Card.Text> Total Vaccines Administered: {province.cumulative_dvaccine}   </Card.Text>
                <Card.Text> Total cases: {province.cumulative_cases}   </Card.Text>
                <Card.Text> Last Updated on {province.date} </Card.Text>
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
      {province}
    </div>
  )
}

export default ProvinceList ;