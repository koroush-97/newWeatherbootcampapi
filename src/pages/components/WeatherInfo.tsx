
import WeatherIcone from '@/pages/components/weathericone/WeatherIcone'

interface Props {
  weather: Weather
}


// at the first of mission , we make stracture of project
// and we get weather from weather component to use arry of = 
      // city: response.name,
      // wind: response.wind.speed,
      // humidity: response.main.humidity,
      // description:response.weather[0].description,
      // icone: response.weather[0].icon,
      // daily: []
      // to fill info of citys and forcasteing 
export default function WeatherInfo({weather} : Props ) {



  return(
    <div className={"grid grid-cols-2 mb-12"} >

        <div>
          <h1 className={"text-2xl"} >{weather.city}</h1>
          <div>{weather.description}</div>
          <div>Humidity : <span className={"text-primary"} >{weather.humidity}</span> , Wind: <span className={"text-primary"} >{weather.wind} </span> - Km/h</div>
        </div>

        <div className={"flex justify-end "} >
          <WeatherIcone size={56} icon={weather.icone} />
        </div>
      
    </div>
  );
}
