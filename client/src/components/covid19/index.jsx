import { Link } from "react-router-dom";
import TestingLocations from "../testing-locations/index"


const Covid = () => {

  const src = require('../../helpers/img/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg') ;

    return (
    <div>
      <img src={src} alt="imageofcovidvirus"/>
      <section>
      <h2>How do you get infected?</h2>
        <ul>
          <li>
            The main route of transmission I respiratory droplets and close contact with infected people
          </li>
          <li>
            When you sneeze or cough, you produce droplets of fluid from your nose and mouth
          </li>
          <li>
            These droplets can carry infection which can be spread to others by entering their eyes, nose or mouth. This is the way the flu and many other viruses are spread.
          </li>
          <li>
            Usually, you need to be close to the person (within 6 feet) for the virus to spread this way.
          </li>
          <li>
            There is also a possibility of aerosol transmission when exposed to high concentration aerosol for a longer periods of time and in a relatively enclosed environment
          </li>
          <li>
            The WHO has stated that the risk of spread from someone without symptoms is "very low" and that the chances of fecal transmission are "low".
          </li>
        </ul>
      </section>
      <section>
        <h2>I think I'm infected, now what?</h2>
        <ul>
          <li>
             Inform institution/health organization in your country via the emergency number, which will tell you what to do next.
          </li>
          <li>
            Self-isolation at home has been recommended for people diagnosed with COVID-19 and those who suspect they have been infected.
          </li>
          <li>
            Public health agencies have issued self-isolation instructions which include notification of healthcare providers by phone and restricting all outdoor activities, except for getting medical care.
          </li>
          <li>
            Do not go to work, school, or public areas. Avoid using public transportation, ride-sharing, or taxis.
          </li>
          <li>
            Those, who have recently travelled to a country with widespread transmission or who have been in direct contact with someone diagnosed with COVID-19, have also been asked by some government health agencies to self-quarantine or practice social distancing for 14 days, counting it from the time of the last potential exposure.
          </li>
        </ul>
        <p>Source: Centers for Disease Control and Prevention</p>
      </section>
      <TestingLocations />
    </div>


  );
};

export default Covid;