import CityItem from "../CityItem"
import SydneyBg from '../../assets/City/Sydney.png'
import LondonBg from '../../assets/City/London.png'
import NewYorkBg from '../../assets/City/Newyork.png'
import ShanghaiBg from '../../assets/City/Shanghai.png'
import cloudyday from '../../assets/weather_icon/Cloudy_day.png'
import cloudy from '../../assets/weather_icon/Cloudy.png'
import hail from '../../assets/weather_icon/Hail.png'
import rain from '../../assets/weather_icon/Rain.png'
import snow from '../../assets/weather_icon/Snow.png'
import sunny from '../../assets/weather_icon/Sunny.png'


function CityWeather(){
    let city = [
        {
            'id': 1,
            'bg': SydneyBg,
            'weather_img': sunny,
            'cn': 'Sydney',
            'temp': '28~32°'
        },
        {
            'id': 2,
            'bg': ShanghaiBg,
            'weather_img': cloudy,
            'cn': 'Shanghai',
            'temp': '20~23°'
        },
        {
            'id': 3,
            'bg': NewYorkBg,
            'weather_img': cloudyday,
            'cn': 'New York',
            'temp': '18~20°'
        },
        {
            'id': 4,
            'bg': LondonBg,
            'weather_img': snow,
            'cn': 'London',
            'temp': '0~2°'
        }
    ]

    return (
        <div className="w-full">
            {/* search bar */}
            <div className="w-[400px] h-11 relative bg-[#fff] rounded-xl">
                <input className="absolute left-2 top-2 px-2 h-7 border-transparent focus:outline-none" type="text" placeholder="Search for a city" autoComplete="false"/>
                <span className="absolute right-1 top-2 w-20 h-7 text-white leading-7 bg-[#5952d6] rounded-xl text-center text-sm cursor-pointer">Search</span>
            </div>
            {/* city item */}
            <CityItem city={city}/>
        </div>
    )
}

export default CityWeather