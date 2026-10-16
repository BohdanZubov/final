import React from 'react'

const NewsCard = ({article}) => {
  return (
    <a href={article.url} target='_blank' className='flex w-full flex-col gap-3'>
      <div className='h-52 w-full overflow-hidden rounded-[10px] bg-box'>
        <img src={article.image} alt={article.title} className='h-full w-full object-cover' />
      </div>
      <p className='font-medium text-black text-[16px]'>{article.title}</p>
    </a>
  )
}

export default NewsCard