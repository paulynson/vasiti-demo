import React from 'react'

function Loader() {
  return (
      <div className='flex justify-center items-center'>
           <div className="lds-spinner text-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;