import React from 'react'

const Heading = ({text,para}) => {
  return (
      <div>
      <h1 className='text-3xl text-center tracking-wide p-5 m-2 font-bold'>{text}</h1>
      <p className='text-center font-normal hyphens-auto text-lg max-w-[800px] mx-auto'>{ para}</p>
    </div>
  )
}

export default Heading