
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  city : string,
  getWeatherData: Function
}

// why we get city ? because we get this props to use initilaze state , we want when we start project we have a city default for field of search
export default function SearchForm({city , getWeatherData} : Props) {


// this function for storeing value of search input
  const [nameState , setNamestate] = useState<string>(city)


  // we use this state thats save and updateing name of cities
  const cityNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNamestate(e.target.value)
  }

  // last final mission
  const submitHandler = (e : FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    //point one :
    //  importent point of this project is this func getWeatherData , we want get api to update state , so we use props to 
    // transport this setstate of wheater components to here for useing func of api getWeatherDate
    // --------------
    // point two : we use namestate for updateng name of city , at the up we see this state that = const [nameState , setNamestate] = useState<string>(city) , that updating name of city
    getWeatherData(nameState);
    
  }


// at the first of this component we should make this istracter of our forms
  return (
  <form className={"m-auto flex justify-center border-b-2 pb-6 mb-6"} onSubmit={submitHandler}>
    <input type="text" name={"cityName"} className={"border rounded p-3 "}  onChange={cityNameChangeHandler} value={nameState} />
    <input type="submit" className={"bg-primary border rounded p-3 m-2"} value={"search"} />
  </form>);
}
