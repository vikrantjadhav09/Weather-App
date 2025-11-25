import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-M-0G2h5claKSoJDulPHau74xPvqheMVp7Xg0WjaZ8=";

    const HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";

    const COLD_URL = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGR8ZW58MHx8MHx8fDA%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";


    return (
        <div className="InfoBox">


            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80
                                    ? < ThunderstormIcon />
                                    : info.temp > 15
                                        ? < SunnyIcon />
                                        : < AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Min Temp = {info.tempMin}&deg;C</div>
                            <div>Max Temp = {info.tempMax}&deg;C</div>
                            <div>The Weather can be describes as <i>{info.weather}</i> and Feels Like {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>


        </div>
    );
}