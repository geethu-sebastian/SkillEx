import React from 'react'
import Navbar from './Navbar'
const Expert_uploadcourses = () => {
  return (
    
   
   <div className="flex flex-row mx-auto   ">
   
         <div className='w-1/5 py-6  flex px-8 rounded-r-3xl bg-[#363636]

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
        
       <br/><br/><br/><br/><br/>
       <br/> <br/><br/><br/><br/>

          </ul>
         </div>
   
   
     
     
      <div className='w-full'>
      <h2 className='text-3xl text-center pt-5 mt-6'>Upload Course</h2>
      
    
    <div className='border rounded-2xl p-5 mx-auto mt-8 w-2/5  h-5/6'>
     <div className='border  h-2/5 rounded-2xl'></div>
     <h2 className='text-xl mt-8 px-2 pb-5'> Course Name</h2>
     <div className='border h-1/6 rounded-2xl'></div>
     <h2 className='text-xl mt-8 px-2 pb-5'> Course Description</h2>
     <div className='border h-1/6 rounded-2xl'></div>
     <div className='text-center mt-6 pt-8'>
     <button className='text-xl shadow-lg shadow-black bg-[#9B3AFC]
 hover:bg-[#9b3afcc8] rounded-md py-2 mt-8 mb-4 px-8'>Upload</button>
     </div>

     </div>
   
    
      </div>
    
     
         
         
        
          
      
     
   
          
      
      
        

      
      
    
    

    
     
  
    </div>
   
  )
}

export default Expert_uploadcourses