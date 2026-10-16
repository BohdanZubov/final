import React from 'react'
import { weatherIcon } from '../../utils/weatherIcons'

const WeatherIcon = ({ condition, className }) => {
  const Icon = weatherIcon(condition)
  return <Icon className={className} />
}

export default WeatherIcon
