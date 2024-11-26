import {useState} from 'react'

const WeatherForm = ({ onSearch }) => {
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(city.trim()){
            onSearch(city)
            setCity('')
        }
    }

  return (
    <form 
        className='flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
    >
        <input
            type='text'
            placeholder='Enter city name'
            value={city}
            onChange={ (e) => setCity(e.target.value)}
            className='border rounded-md p-2 w-64'
        />

        <button 
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700'
        >
            Search
        </button>

    </form>
  )
}

export default WeatherForm