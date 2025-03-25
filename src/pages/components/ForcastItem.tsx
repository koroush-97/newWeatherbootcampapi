import { List } from "@/types/api/ForcastResponse"
import WeatherIcone from "./weathericone/WeatherIcone"
import { log } from "console"

interface Props {
  item : List
}
export default function ForcastItem({item} : Props) {

  let day = new Date(item.dt * 1000).toLocaleString('en-us' , {weekday : 'long' });
  console.log(day);
  


  return (
    <div className={"flex justify-center items-center flex-col"} >
      <div>{day}</div>
      <WeatherIcone icon={item.weather[0].icon} size={36} />
      <div className={"mt-3"} >
          <span className={"text-primary"} >{Math.round(item.main.temp_min) }</span>
          - 
          <span className={"text-primary"} >{Math.round(item.main.temp_max ) }</span>
      </div>
    </div>
  )
}
 