import CityWeather from "../CityWeather"
import WeekWeather from "../WeekWeather"

function DetailCard(){
    return (
        <div className="ml-[20px] h-full flex-1">
            <WeekWeather />
            <CityWeather />
        </div>
    )
}

export default DetailCard