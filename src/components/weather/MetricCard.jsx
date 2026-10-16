import React from 'react'

const MetricCard = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-50 gap-2 rounded-[15px] bg-box p-5 text-center'>
      {children}
    </div>
  )
}

export default MetricCard
