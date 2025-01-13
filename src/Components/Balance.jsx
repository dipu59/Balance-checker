import React from 'react'

 function Balances({balance}) {
  return (
    <>
    <div className=' text-center  py-2 md:py-6'>
    <p className='text-lg text-gray-400'>Your Balance</p>
    <span className='text-2xl text-gray-300 font-semibold'>${balance}</span>
    </div>
    </>
  )
}
export default Balances;
