import React from 'react'
const mainimg='https://ouch-cdn2.icons8.com/shadCKF3pKkMegyrbS7STWOR8I3RZexmUPEmQD2cTw4/rs:fit:256:385/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTIy/LzUzMzczNzNhLTdi/YTAtNDAyMi04NTA2/LTk1Yjg5MWFjMDQy/Mi5wbmc.png'
export const Homepg = () => {
  return (
    <div className='flex'>
        <div className='w-1/2 flex justify-between items-center'>
        <div className='shadow-xl overflow-hidden md:w-3/5 mt-4 md:mt-8 mx-auto '>
            <img  className='py-8 mt-8' src={mainimg}></img>
        </div>
       
        </div>
        <div className=' mt-8 py-8'>
        <h2 className='text-7xl font-bold py-8'>
            Learn new <br/> skills. Easily
        </h2>
        <p className='text-xl'>"Unlock your Learning Potential: Discover and<br/>
         Tokenize Expertise with Skill and Knowledge<br/>Marketplace"</p>
         <div className='pt-8'>
         <button className='w-full  text-black shadow-xl shadow-black p-4 md:text-lg 
      bg-white rounded-full '>
        Find your passion right now
      </button>
         </div>
        
        </div>
       
    </div>
  )
}
