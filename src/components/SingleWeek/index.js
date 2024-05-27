

function SingleWeek(props){
    let {week, date, weatherPng, temp} = props
    return (
        <div className='flex items-center flex-col'>
            <h2 className='font-medium'>{week}</h2>
            <h3 className='text-sm mt-3'>{date}</h3>
            <img src={weatherPng} alt="rain" className='w-28 h-28'/>
            <p className='text-sm'>{temp}°</p>
        </div>
    )
}

export default SingleWeek