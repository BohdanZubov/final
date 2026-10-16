import React from 'react'
import GallerySlider from './GallerySlider'

const GallerySection = ({images}) => {
  return (
    <section className='w=full py-10'>
      <div className='mx-auto w-full max-w-285 px-5 md:px-8'>
        <h2 className='mb-8 font-medium text-[20px] text-black'>Beautiful nature</h2>
         {images.length > 0 && <GallerySlider images={images} />}
      </div>
    </section>
  )
}

export default GallerySection