import React from 'react'

function SectionHeadings({subtitle} : {subtitle:string}) {
  return (
    <div>
        <h2 className='text-3xl font-medium capitalize mb-8 sm:text-3xl sm:capitalize text-center'>{subtitle}</h2>
    </div>
  )
}

export default SectionHeadings