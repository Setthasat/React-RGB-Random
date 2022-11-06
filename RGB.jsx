import React, { useState } from 'react'

function rgbcolor() {

    const [rgb, setRGB] = useState([0,0,0])

  return (
    <div>
        <p className='rgb text-white'>Random RGB : {rgb.join(', ')}</p>
        <button className='text-white hover:bg-slate-800 bg-slate-700 rounded-lg m-1 p-1 shadow-xl underline underline-offset-2' onClick={() => {
            setRGB(rgb.map(() =>{
                return Math.floor(Math.random() * 256);}
            ))
        }}>Random</button>
            
        
    </div>
  )
}

export default rgbcolor
