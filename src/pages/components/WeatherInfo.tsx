
import WeatherIcone from '@/pages/components/weathericone/WeatherIcone'

interface Props {
  weather?: Weather; 
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
    
export default function WeatherInfo({ weather }: Props) {
  // اگه `weather` مقدار نداشته باشه، یه متن لودینگ نشون بده
  if (!weather) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="grid grid-cols-2 mb-12">
      <div>
        <h1 className="text-2xl">{weather.city || "Unknown City"}</h1>
        <div>{weather.description || "No description available"}</div>
        <div>
          Humidity: <span className="text-primary">{weather.humidity ?? "N/A"}</span> , 
          Wind: <span className="text-primary">{weather.wind ?? "N/A"} </span> - Km/h
        </div>
      </div>

      <div className="flex justify-end">
        <WeatherIcone size={56} icon={weather.icone || "default-icon"} />
      </div>
    </div>
  );
}