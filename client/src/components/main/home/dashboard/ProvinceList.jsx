import React from 'react'

const ProvinceList = (props) => {
  let data = props.data ;
  console.log(data);
  const province = data.summary.map((province) => {
    const  dailyChange = province.active_cases_change > 0 ? `(+ ${province.active_cases_change})` : `(- ${province.active_cases_change})`
    return (
      <ul>
        <h3> {province.province} </h3>
        <p> Cases Today: {province.cases}</p>
        <p> Deaths Today: {province.deaths}</p>
        <p> Recovered Today: {province.recovered}</p>
        <p> Total Active Cases: {province.active_cases} {dailyChange} </p>
        <p> Total Deaths: {province.cumulative_deaths}  </p>
        <p> Total Recovered: {province.cumulative_recovered}  </p>
        <p> Total Vaccines Administered: {province.cumulative_dvaccine}  </p>
        <p> Total cases: {province.cumulative_cases}  </p>
        <p> Last Updated on {province.date}</p>
      </ul> 
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