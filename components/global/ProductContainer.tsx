import React from 'react'
import {contData} from "@/constants"
const ProductContainer = () => {
  return (
    <>
     <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center md:justify-normal md:overflow-x-auto">
    {contData.slice(0,8).map((item, index) => (
        <div key={index}>
            <div className="relative h-40 w-[8rem] md:h-[16rem] md:w-56 bg-amber-400 flex flex-col">
                <div className="bg-red-300 h-[70%] w-full"></div>
                <div className="bg-blue-300 h-[30%]">
                    <div>
                        <div className="text-md font-semibold px-1.5">{item.title}</div>
                    </div>
                    <div className="flex justify-between px-1.5 text-sm font-semibold">
                        <div>₹{item.price}</div>
                        <div>Rating {item.rating}</div>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>

     
      </>

  )
}

export default ProductContainer