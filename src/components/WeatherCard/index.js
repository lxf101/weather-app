import CurrentCity from "../CurrentCity"
import DetailCard from "../DetailCard"
function WeatherCard(){
    return (
        <div className="weather-card flex items-center w-[1080px] h-3/4 min-w-[1080px] min-h-[545px] bg-[#f3f5fc] rounded-3xl">
            <CurrentCity />
            <DetailCard />
        </div>
    )
}

export default WeatherCard