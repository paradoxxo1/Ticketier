import React from 'react'
import Image from 'next/image'

const NotFoundPage = () => {
    return (
        <div className='pageGeneralClass'>
            <h1 className='text-red-500 text-center text-3xl mt-8'>This Page Not Found </h1>
            <div className='py-16 flex flex-col justify-center items-center'>
                <Image 
                src="/404.png" 
                width={300} 
                height={300} 
                alt="not-found"
                loading='lazy' />
            </div>
        </div>
    )
}

export default NotFoundPage