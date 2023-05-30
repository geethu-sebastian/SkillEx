import React from 'react'
import Navbar from './Navbar';
const imgnft='https://uploads-ssl.webflow.com/632c0b24c6c60510a1d60f5c/6332b75485f2ddcc9487a7f4_nfts-bored-ape-yacht-club-819x1024.jpg';
const Expertnfts = () => {
  return (
    <div className='flex flex-row'>
      <Navbar/>
         <div>
         <div className='p-8'>
       <h1 className=' p-5 text-3xl font-bold'>My NFTs</h1>
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
       <div className='w-2/3'>
       <div className='grid grid-cols-1  md:grid-cols-3 gaps-6 md:gaps-4'>
          
          {Array(3).fill().map((nft,i)=>(
              
           <Card nft={i+1}/>
          ))}

      </div>
       </div>
      
      
        </div>

    </div> 
  )
}
const Card=({nft})=>{
  return(
      <div className='p-4'>
<div className='w-full  shadow-xl shadow-black rounded-3xl
overflow-hidden my-3 p-4 '>

  <img classname='shadow-lg shadow-black object-cover
   ' src={imgnft} />
  <div className="pt-3 text-center w-full">
     <p>Course Name <br/> Sale price</p>
       </div>
 
 

 


</div>
<div>
  
</div>
      </div>

  )

}
export default Expertnfts