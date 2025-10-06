import React, { useEffect, useState } from 'react'
import Button from './button';

const Boxx = () => {
    const [color, setColor] = useState('bg-black')
    const [text, setText] = useState('Black')

    useEffect(() => {
        document.title = `Color ${text}`
    }, [text])

    useEffect(()=> {
        setTimeout(() => {
            console.log(`side effect`)
        }, 5000);
    }, []) 

  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
        <div className={`w-40 h-40 rounded-full flex text-white items-center justify-center text-xl ${color}`}>{text}</div>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <Button func={()=> {setColor('bg-green-700'); setText('Green')}} style={'bg-green-700 text-green-100 hover:bg-green-600'} text={'Green'} />
                <Button func={()=> {setColor('bg-yellow-500'); setText('Yellow')}} style={'bg-yellow-600 text-yellow-100 hover:bg-yellow-500'} text={'Yellow'} />
                <Button func={()=> {setColor('bg-blue-700'); setText('Blue')}} style={'bg-blue-700 text-blue-100 hover:bg-blue-600'} text={'Blue'} />
                <Button func={()=> {setColor('bg-red-700'); setText('Red')}} style={'bg-red-700 text-red-100 hover:bg-red-600'} text={'Red'} />
            </div>
            <div className='flex items-center justify-center'>
                <Button func={() =>{setColor('bg-black'); setText('Black')}} style={'border-2 border-slate-700 hover:bg-slate-100'} text={'Reset'} />
            </div>
        </div>
    </div>
  )
}

export default Boxx