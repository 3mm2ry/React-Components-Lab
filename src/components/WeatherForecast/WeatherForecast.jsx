import "./WeatherForecast.css";

function WeatherForecast(prop) {
  return (
    <div className="weather">
      <h2>{prop.day}</h2>

      <img src={prop.img} alt={prop.imgAlt} />

      <p>
        <span>Conditions:</span> {prop.conditions}
      </p>

      <p>
        <span>Time:</span> {prop.time}
      </p>
    </div>
  );
}

export default WeatherForecast;