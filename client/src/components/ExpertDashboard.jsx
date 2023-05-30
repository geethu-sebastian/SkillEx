import React from 'react'
const col='https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg'
const ExpertDashboard = () => {
  return (
    <div className="flex flex-row mx-auto  ">
         <div className='w-1/5 flex px-8 rounded-r-3xl bg-[#363636]

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
      <div className='w-4/5'>
       <div className='p-8'>
       <h1 className=' p-5 text-3xl font-semibold'>My Dashboard</h1>
       </div>
       <div>
        <Collections/>
       </div>
        
     
        
       
      </div>
    </div>
  )
}
const Collections = () => {
    return (
      <div >
          <div className='w-full px-6 '>
         
          <div className='grid grid-cols-1  md:grid-cols-3 gaps-6 md:gaps-4'>
            
              {Array(6).fill().map((nft,i)=>(
                  
               <Card nft={i+1}/>
              ))}
  
          </div>
        
          </div>
  
      </div> 
    )
  }
const Card=({nft})=>{
    return(
        <div className='p-4'>
<div className='w-full  shadow-xl shadow-black rounded-3xl
overflow-hidden my-3 '>
  
    <img classname='shadow-lg shadow-black object-cover
     rounded-lg ' src={col} />
   
   
   

   
  
  
</div>
<div>
    
</div>
        </div>

    )

}
export default ExpertDashboard