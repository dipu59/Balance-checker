import React from 'react'

function IncomeExpancess({income, expances}) {
  return (
    <>
    <div className='container mx-auto flex justify-around my-6 md:my-0'>
        <div >
            <p className='text-green-500 text-lg'>Total Income:</p>
            <p className='text-green-500 font-semibold text-xl'>${income}</p>
        </div>
        <div>
            <p className='text-red-500 text-lg'>Expanses:</p>
            <p className='text-red-500 font-semibold text-xl'>${expances}</p>
        </div>
    </div>
    </>
  )
}

export default IncomeExpancess;