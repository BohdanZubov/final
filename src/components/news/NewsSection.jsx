import React from 'react'
import NewsCard from './NewsCard'

const NewsSection = ({articles}) => {
  return (
    <section className='w-full py-10'>
      <div className='w-full mx-auto max-w-285 px-5 md:px-8'>
        <h2 className='mb-8 font-medium text-black text-[20px]'>Interacting with our pets</h2>
        <div className='grid grid-cols-1 justify-items-center gap-y-8 gap-x-5 md:grid-cols-3 lg:grid-cols-4'>
          {articles.map(article => (
            <NewsCard key={article.id} article={article}/>
          ))}
        </div>

        <button className='btn-pill mt-8 px-7.5 py-2.5 text-[16px]'>See More</button>

      </div>
    </section>
  )
}

export default NewsSection