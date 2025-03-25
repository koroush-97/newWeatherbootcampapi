// all time callback apis write in one part
import {ForcastResponse} from '@/types/api/ForcastResponse'
import {WeatherResponse} from '@/types/api/WeatherResponse'

const baseUrl =  `https://api.openweathermap.org/data/2.5/`
const apiKey = `3dce9b1c66837262a25b3f448d354a76&units`

interface WeatherProps {
  city: string
}
interface ForcastProps {
  lat: number,
  lon: number
}

export const callWeatherApi  = async ({city} : WeatherProps) : Promise<WeatherResponse> => {
  const response = await fetch(`${baseUrl}weather?q=${city}&appid=${apiKey}&units=metric`);
  return await response.json();
}

export const callForecastApi  = async ({lat , lon} : ForcastProps ) : Promise<ForcastResponse> => {
  const response = await fetch(`${baseUrl}forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
  return await response.json();
}
