import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProvinceList = (props) => {
  let data = props.data ;
  console.log(data);
  const province = data.summary.map((province) => {
    const  dailyChange = province.active_cases_change > 0 ? `(+ ${province.active_cases_change})` : `(- ${province.active_cases_change})`
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
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
      </div>
    )
  })



//   active_cases: 3380,
// active_cases_change: 661,
// avaccine: 24612,
// cases: 1017,
// cumulative_avaccine: 5390219,
// cumulative_cases: 237027,
// cumulative_cvaccine: 2516133,
// cumulative_deaths: 2328,
// cumulative_dvaccine: 6614665,
// cumulative_recovered: 231319,
// cumulative_testing: 4928689,
// cvaccine: 18200,
// date: "09-08-2021",
// deaths: 3,
// dvaccine: 0,
// province: "Alberta",
// recovered: 353,
// testing: 20001,
// testing_info: "NULL"

  return (
    <div>
      {province}
    </div>
  )
}

export default ProvinceList ;