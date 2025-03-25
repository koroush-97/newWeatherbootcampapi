import { useState } from "react";
import ForcastList from "./ForcastList";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
// this is our func thats we made for calling api
import { callForecastApi, callWeatherApi } from "../api/api";
import {ForcastResponse} from "@/types/api/ForcastResponse"


interface Props {
  city : string
}

export default function Weather({city}: Props ) {

  //at first , this state made for saving initial infos that we need

  const [weatherState , setWeatherState] = useState<Weather>({
    city: '',
    wind: 0 ,
    humidity :0,
    description: '',
    icone: '',
    daily: []
  })

  const [forecastState , setForcastState] = useState<ForcastResponse | null >(null)

  // at seconde , we made an func to use apicallbacks for call apis and fill initial state
  const getWeatherDate = async (city : string) => {
    const response = await callWeatherApi({city})


    const weather : Weather = {
      city: response.name,
      wind: response.wind.speed,
      humidity: response.main.humidity,
      description:response.weather[0].description,
      icone: response.weather[0].icon,
      daily: []
    }

    setWeatherState(weather)


    const forecastResponse =  await callForecastApi( {lat: response.coord.lat , lon: response.coord.lon} )
    setForcastState(forecastResponse);

  }

  // we call this func , and we call it for time that we have empty state
  if(weatherState.city.length === 0){
    getWeatherDate(city)
  }

  return(
  <div className={"shadow mt-4 rounded-2xl p-8 py-16 bg-[#fff]"} >
    <SearchForm city={city} getWeatherData={getWeatherDate} />
    <WeatherInfo weather={weatherState} />
    {forecastState && <ForcastList forecast={forecastState} />}

  </div>
  ) 
  
}
