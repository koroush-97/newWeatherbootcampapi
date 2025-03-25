import ForcastItem from "@/pages/components/ForcastItem"
import {ForcastResponse} from "@/types/api/ForcastResponse"

interface Props {
  forecast : ForcastResponse
}



export default function ForcastList({forecast} : Props) {

  console.log(forecast);

  const firstFiveForecasts = forecast.list.slice(0, 5);


  return (
  <div className={" flex flex-row"} > 
    {
      firstFiveForecasts.map( (item ) => (
        <ForcastItem item={item} />
      ))}
  
  </div>
  )
  
}
