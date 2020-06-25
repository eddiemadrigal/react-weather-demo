import React, {useState} from 'react';

const Weather = () => {

    const API_Key = '48b2db95f7ca34199398b4bea1ae86e4';
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [desc, setDesc] = useState('');
    const [temp, setTemp] = useState(null);

    const handleInputCity = e => {
        setCity(e.target.value);
    };

    const handleInputState = e => {
        setState(e.target.value);
    }

    const handleInputCountry = e => {
        setCountry(e.target.value);
    }

    const getWeather = async e => {
        e.preventDefault();
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city},${state},${country}&appid=${API_Key}`
        )
        const res = await api_call.json();
        setDesc(res.weather[0].description);
        setTemp(res.main.temp);
        console.log(res);
    }

    return (
        <div>
            <form onSubmit={getWeather}>
                <label>
                    City:
                    <input name='city' type='text' onChange={handleInputCity} />
                </label>
                <label>
                    State:
                    <input name='state' type='text' onChange={handleInputState} />
                </label>
                <label>
                    Country:
                    <input name='country' type='text' onChange={handleInputCountry} />
                </label>
                <button type='submit'>Get Weather</button>
            </form>     
            <p>City: {city}</p> 
            <p>Description: {desc}</p> 
            <p>Temperature: {temp}</p> 
        </div>
    )
}

export default Weather;