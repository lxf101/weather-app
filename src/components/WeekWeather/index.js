import SingleWeek from "../SingleWeek"
import RainPng from '../../assets/weather_icon/Rain.png'
import CloudyPng from '../../assets/weather_icon/Cloudy.png'
import SunnyPng from '../../assets/weather_icon/Sunny.png'
import HailPng from '../../assets/weather_icon/Hail.png'

function WeekWeather(){
    return (
        <div className="w-full">
            <ul className="mr-[20px] flex my-12">
                <li className="w-1/4">
                    <SingleWeek week='Monday' date='24 July' weatherPng={RainPng} temp='20~25'/>
                </li>
                <li className="w-1/4">
                    <SingleWeek week='Tuesday' date='25 July' weatherPng={HailPng} temp='25~30'/>
                </li>
                <li className="w-1/4">
                    <SingleWeek week='Wednesday' date='26 July' weatherPng={CloudyPng} temp='20~23'/>
                </li>
                <li className="w-1/4">
                    <SingleWeek week='Thursday' date='27 July' weatherPng={SunnyPng} temp='18~27'/>
                </li>
            </ul>
        </div>
    )
}

export default WeekWeather