import React, { useState } from 'react'
function InputTranjections({addTransection}) {
const[text, setText]=useState("");
const[amount, setAmount]=useState(null);

const handleSubmit = (e)=>{
e.preventDefault()

if(text ==="" || amount === 0 ) return;

addTransection({text, amount: +amount  });
setText("")
setAmount("null")
}

  return (
    <>
    <form onSubmit={handleSubmit} className=' flex  justify-center  gap-2 '>
<div className='gap-2'>
<input onChange={(e)=>setText(e.target.value)}   value={text} className='border border-lime-600 outline-none rounded w-42 p-2 my-2 text-blue-200 bg-transparent' type="text" placeholder='please enter details' /> <br/>
<input onChange={(e)=>setAmount(e.target.value)} value={amount} className=' border inline-block border-lime-600 outline-none rounded w-42 p-2 text-gray-200 bg-transparent' type="number" placeholder='Transection amount' />


<button type='submit' className='bg-indigo-500 hover:bg-indigo-600 block px-4 py-2 rounded mt-2 mx-auto text-white'>Add Tranjection</button>
</div>
    </form>
    </>
  )
}

export default InputTranjections;



