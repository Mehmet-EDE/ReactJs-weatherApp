import axios from 'axios';
import { useState, useEffect } from 'react'
import CityList from '../city/Citylist.json'

export default function Weather() {
    const [weather, setWeather] = useState();
    const [isLoading, setIsloading] = useState(true)
    const [city, setCity] = useState('Sivas')

    const Deneme = (e) => setCity(e.target.value)

    useEffect(() => {
        var key = "8e932031e0c0ba518f24cafcda93ac9f"
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
        )
            .then((res) => setWeather(res.data))
            .catch((err) => console.log(err))
            .finally(() => setIsloading(false));
    }, [city])
    return (
        <div>
            <select onChange={Deneme} name="" id="">
                {
                    CityList.map((item) => (
                        <option key={item.id} defaultValue={58} value={item.name} selected={item.id === 58}>{item.name}</option>
                    )
                    )
                }
            </select>
            <hr />
            <h2 className="cityName">{city}</h2>
            <div className="weather">
                {
                    !isLoading &&
                    <div>
                        <h2>{weather.weather[0].main}</h2>
                        <h2>{Math.floor(weather.main.temp)} °C</h2>
                        {console.log(weather)}
                    </div>
                }
            </div>
        </div>
    )
}
