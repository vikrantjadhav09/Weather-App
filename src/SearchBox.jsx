import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "176f013996bf3fdfa364bff9157f445a";

    let getWeatherInfo = async () => {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        // ❗ FIX — check for invalid city (404)
        if (jsonResponse.cod != 200) {
            return null;
        }

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        return result;
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        let newInfo = await getWeatherInfo();

        if (!newInfo) {
            setError(true);
            return;
        }

        setError(false);
        updateInfo(newInfo);

        setCity("");
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City Name"
                    variant="standard"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>

                {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                        No such place exists!
                    </p>
                )}
            </form>
        </div>
    );
}
