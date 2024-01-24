"use client"
import Image from "next/image"


const ErrorPage = () => {
  return (
    <div className="pageGeneralClass">
        <div className="flex flex-col justify-center items-center py-12">
            <Image src='/error.png' width={300} height={300} alt="error" loading="lazy" />
            <h1 className="text-red-500 text-3xl">Sorry</h1>
            <h1 className="text-red-500 text-3xl">We Have Error</h1>
            <h1 className="text-red-500 text-3xl">Plase Try Again</h1>
        </div>
    </div>
  )
}

export default ErrorPage