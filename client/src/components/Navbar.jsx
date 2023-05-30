import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row w-2/5">
    <div className='w-full flex flex-row px-8 rounded-r-3xl  bg-[#363636]

'>
    <ul className=' md:flex flex-col py-5 ;
w-full'>
   
   <li className='mx-8 cursor-pointer text-center text-3xl font-semibold py-4 '>SkillEx </li>
   <div className='text-center py-9'>
       <button className='rounded-full bg-white p-10 '>profile</button>
   </div>
   <div className='pt-8 '>
       
   <li className='mx-8 cursor-pointer text-center py-4 font-bold text-xl rounded-md  hover:bg-[#616995]
'>
   
       Dashboard</li>
    
     <li className='mx-8 cursor-pointer text-center py-4 font-bold text-xl rounded-md hover:bg-[#616995]'>Wallet</li>
     <li className='mx-8 cursor-pointer py-4 px-6 text-center font-bold text-xl rounded-md hover:bg-[#616995]'>Settings</li>
     
     <div className='flex flex-col py-9 mt-9'>
       <div className='py-8 font-semibold text-xl text-center'>
       <button>Log out</button>
       </div>
   </div>
 
  
  
   </div>
   
  <br/>
     </ul>
    </div>
   
   
</div>
  )
}

export default Navbar