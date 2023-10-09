import React from 'react'

function SectionHeadings({subtitle} : {subtitle:string}) {
  return (
    <div>
        <h2 className='text-3xl font medium sm:font-medium sm:text-3xl sm:capitalize'>{subtitle}</h2>
    </div>
  )
}

export default SectionHeadings