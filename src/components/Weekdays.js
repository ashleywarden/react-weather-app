import Weather from './Weather'

const Weekdays = ({ weekdays }) => {
    return (
        <div className='week'>
            {weekdays.map((weather) => (
                <Weather key={weather.id} weather={weather}/>
            ))}
        </div>
    )
}



export default Weekdays

//*{weekdays.length < weekdays.length-1} ? (/