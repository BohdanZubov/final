import React from 'react'
import WeatherIcon from './WeatherIcon'
import IconButton from '../ui/IconButton'
import { FiRefreshCw } from 'react-icons/fi'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const WeatherCard = ({
  onRefresh,
  onToggleFavorite,
  onRemove,
  onSelect,
  city
}) => {
  return (
    <div className='flex w-full h-107.5 max-w-[320px] flex-col rounded-[20px] bg-card px-7.5 py-4.5'>
      <div className='flex items-start justify-between gap-2 font-medium text-[14px] text-black'>
        <span className='truncate'>{city.city}</span>
        <span className='truncate text-right'>{city.country}</span>
      </div>
      <p className='mt-3 text-center font-medium text-[24px]'>{city.time}</p>
      <div className='mt-4 flex items-center justify-center gap-3 font-medium text-[14px] text-black'>
        <span>{city.date}</span>
        <span className='w-px h-4.25 bg-black/40' />
        <span>{city.weekday}</span>
      </div>
      <WeatherIcon condition={city.condition} className="mx-auto my-3 text-[120px] text-amber-400" />
      <p className='text-center font-medium text-[32px]'>{city.temp}℃</p>
      <div className='flex items-center justify-between mt-auto'>
        <div className='flex items-center gap-2'>
          <IconButton label='Refresh Weather' onClick={()=> onRefresh(city.id)}>
            <FiRefreshCw  />
          </IconButton>
          <IconButton label='Favorite' onClick={()=> onToggleFavorite(city.id)}>
            {city.favorite ? <FaHeart className='text-red-500'/> : <FaRegHeart />}
          </IconButton>
        </div>
        <button className='px-6.25 py-2 text-[10px] btn-pill' onClick={()=> onSelect(city.id)}>See more</button>
      </div>
    </div>
  )
}

export default WeatherCard
