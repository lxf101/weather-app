import shuidi from '../../assets/icon/shuidi.png'
import fengxiang from '../../assets/icon/fengxiang.png'
import shidu from '../../assets/icon/shidu.png'
import wenduji from '../../assets/icon/wenduji.png'

function DetailInfo(){
    return (
        <div className="absolute bottom-[15px] w-[230px] h-[98px] mx-3 bg-[#ebeefb] rounded-3xl">
            <ul className="w-full h-full flex justify-between items-center">
                <li className="flex-1 flex flex-col items-center">
                    <img className="w-[20px] h-[20px]" src={shuidi} alt="shuidi" />
                    <span className='text-sm text-[#414161] mt-1'>85%</span>
                </li>
                <li className="flex-1 flex flex-col items-center">
                    <img className="w-[20px] h-[20px]" src={fengxiang} alt="fengxiang" />
                    <span className='text-sm text-[#414161] mt-1'>9km/h</span>
                </li>
                <li className="flex-1 flex flex-col items-center">
                    <img className="w-[20px] h-[20px]" src={shidu} alt="shidu" />
                    <span className='text-sm text-[#414161] mt-1'>75ug</span>
                </li>
                <li className="flex-1 flex flex-col items-center">
                    <img className="w-[20px] h-[20px]" src={wenduji} alt="wenduji" />
                    <span className='text-sm text-[#414161] mt-1'>26°</span>
                </li>
            </ul>
        </div>
    )
}

export default DetailInfo