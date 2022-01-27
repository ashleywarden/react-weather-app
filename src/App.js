import Header from './components/Header'
//import Forecast from './components/Current-Weather/Forecast'
import WeatherCard from './components/Forecast/WeatherCard'
import Forecast from './components/Current-Weather/Forecast'
import {Container} from 'react-bootstrap'
import CitySelector from './components/Forecast/CitySelector'
import UseFetch from './components/Forecast/UseFetch'
import Conditions from './components/Current-Weather/Conditions'
import WeatherList from './components/Forecast/WeatherList'
import {API_KEY, API_BASE_URL} from './apis/fiveday-config'
import './components/Forecast/App.css'

const App = () => {

  const {data, error, isLoading, setUrl} = UseFetch();
  console.log(data)

  return (
    <Container className="App">
      <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`, `${API_BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)} />
        {/*filter to show only one time slot per day. by default, it shows 5 days with 3 hours each*/}
        {data && <WeatherList weathers={data.list.filter(reading => reading.dt_txt.includes("18:00:00"))} /> /*&& <Conditions data={data} />*/ }
      </Container>

      <Forecast />

    </Container>
  )
}

export default App;
