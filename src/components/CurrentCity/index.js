import currentBg from '../../assets/background/Hail_background.png'
import rainImg from '../../assets/weather_icon/Rain.png'
import DetailInfo from '../DetailInfo'

function CurrentCity(){
    return (
        <div className="w-[270px] my-5 mx-5 bg-gradient-to-b from-[#8091e4] to-[#5a52d4] rounded-3xl" style={{height: `calc(100% - 40px)`}}>
            <div className="relative w-full h-full" style={{backgroundImage: `url(${currentBg})`}}>
                <p className='text-sm text-white pt-3 pl-4'>23 July, Sunday 12:00</p>
                <div className='flex flex-col items-center'>
                    <h2 className='text-center mt-[25px] text-white font-bold text-[25px]'>London</h2>
                    <h1 className='mt-5 text-center text-white font-bold text-[60px]'>0</h1>
                    <h3 className='text-center text-white text-sm'>0~2°</h3>
                    <img className="w-[120px]" src={rainImg} alt="rain" />
                </div>
                <DetailInfo />
            </div>
        </div>
    )
}

export default CurrentCity