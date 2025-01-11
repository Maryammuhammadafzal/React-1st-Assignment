import React from 'react'

function Card(props) {
        let {title , image , description} = props;
  return (
    <div className='w-[30%] h-72 flex flex-col items-center bg-white rounded-2xl shadow-lg shadow-gray-400'>
      <div className="image w-[90%] h-48 my-3 flex">
        <img src="https://picsum.photos/200/300" alt="image" className='w-full rounded-2xl h-full' />
      </div>
      <div className="text w-[80%] h-[10%] my-3 flex flex-col items-start justify-center">
        <h2 className="text-xl font-light leading-9">{title}</h2>
        <p className="text-[14px] font-light">{description}</p>
      </div>
    </div>
  )
}

export default Card
