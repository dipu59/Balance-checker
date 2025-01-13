import React from 'react'

function TranjectonLists({transitions}) {
  const Time = new Date();
  return (
    <>
        <ul className='list-none w-[94%] md:w-[80%] mx-auto mt-8 m-3 flex flex-col gap-2'>
        {transitions.map((transition)=>(
            <li key={Math.random()} className={`rounded font-semibold ${transition.amount > 0 ? 'bg-green-100 text-green-700 px-3 py-2': 'bg-red-100 text-red-700 px-3 py-2'}`}>
                <p className='inline '>{transition.text}</p>
                 {/* <span key={Math.random()} className='inline ml-[20%]'>{Time.getSeconds()}</span> */}
                <span className='float-end text-center'>{transition.amount}</span>
            </li>
        ))

        }
        </ul>
    </>
  )
}

export default TranjectonLists