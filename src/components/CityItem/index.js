
function CityItem(props){
    return (
        <ul className="flex my-9 justify-center">
            {
                props.city.map(item => {
                    return (
                        <li key={item.id} className={`w-[170px] h-[128px] rounded-xl mx-3 ${item.id === 1 ? 'ml-0': ''}`} style={{backgroundImage: `url(${item.bg})`}}>
                            <div className='flex flex-col items-center justify-center w-full h-full bg-[#91aeef] rounded-xl bg-opacity-50'>
                                <img className="w-9 h-9" src={item.weather_img} alt="Sydney"/>
                                <span className="text-[16px] font-bold text-white">{item.cn}</span>
                                <span className='text-[14px] text-white mt-1'>{item.temp}</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CityItem