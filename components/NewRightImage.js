import Image from 'next/image'
import React from 'react'

const NewRightImage = () => {
  return (
    <div className="flex justify-center items-center">
      <Image 
        src="/rightsideimage.png" 
        alt="View of a coastline" 
        width={500} 
        height={350}
        
        className="object-contain" 
      />
    </div>
  )
}

export default NewRightImage