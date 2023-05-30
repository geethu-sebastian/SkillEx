//import React from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

const pic1='https://g.foolcdn.com/editorial/images/706290/nft-abstract-design.jpg'
const imgnft='https://uploads-ssl.webflow.com/632c0b24c6c60510a1d60f5c/6332b75485f2ddcc9487a7f4_nfts-bored-ape-yacht-club-819x1024.jpg';
const bc='https://external-preview.redd.it/YCJRQHUnO7gm_9mFD0ZCt5Na_1ekIWrVaaI_yuDPnc8.jpg?width=640&crop=smart&auto=webp&s=513d966290cc24746de352cdb8570e58a338ec28'
const Marketplace = () => {
    return (
      //
      <div className='w-full mx-16 bg-[#151c25]'>
      
        <div className=' w-full
        md:flex flex-initial p-8'>
          <div className="px-6 p-3 w-1/4">
          <h3 className='text-white text-5xl font-semibold'>SkillEx</h3>
          </div>
          <div className="w-full p-2 flex flex-row">
          <div className="flex items-center justify-center w-2/4">
  <input
  
    type="text"
    placeholder="Search NFT, Collections, or Artist"
    className="text-black text-center w-full rounded-full bg-white  border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
  />

</div>

            <div className="px-5 flex flex-row">
            <button className="rounded-full p-4 px-8 bg-pink-600 text-white font-semibold">1493 ETH</button>
            
            </div>
            <div className="px-5 flex flex-row">
            <button className="rounded-full p-4 px-3 bg-pink-600 text-white font-semibold">1</button>
            
            </div>
            <div className="px-3 flex flex-row">
            <button className="rounded-full p-4 px-3 bg-pink-600 text-white font-semibold">1</button>
            
            </div>
            <div className="px-8 flex flex-row">
            <button className="rounded-full p-4 px-8 bg-pink-600 text-white font-semibold">1</button>
            
            </div>
            
          </div>
        </div> 
       <div className="flex flex-row mx-auto">
       <ul className=' md:flex flex-col  w-1/4'>
        
        <li className='mx-8 cursor-pointer text-3xl font-semibold py-4 '>Market Place </li>
        <li className='mx-8 cursor-pointer py-4 text-lg'>Dashboard</li>
         
          <li className='mx-8 cursor-pointer py-3 text-lg'>NFT store</li>
          <li className='mx-8 cursor-pointer py-3 text-lg'>Favourites</li>
        
          <li className='mx-8 cursor-pointer text-3xl font-semibold py-6'>Account </li>
          <li className='mx-8 cursor-pointer py-3 text-lg'>Wallet</li>
          <li className='mx-8 cursor-pointer py-3 text-lg'>My Collections</li>
          <li className='mx-8 cursor-pointer py-3 text-lg'>Settings</li>
       
          </ul>
          <div className="flex flex-row w-full ">
          <div className="w-3/5">
          <div className="relative">
  <img className="h-64 w-full rounded-md pr-7" src={pic1} alt="Image" />
  <h2 className="absolute bottom-0 left-0 p-8 ml-4 font-semibold font-sans shadow-xl text-white text-2xl">Discover, Collect, Sell and <br/> Create your own NFTs</h2>
</div>

          
         
          <p className="text-3xl font-semibold px-2 pt-8">Trending Collections</p>
          <div>
            <Collections/>
          </div>
          <p className="text-3xl font-semibold px-2 pt-8">Browse Categories</p>
          <div >
            <Browsecat/>
          </div>
          </div>
       <div className="w-1/4 ">
       
       <div className=" flex flex-row p-6 px-6 h-2/5 w-full rounded-md bg-gray-600 ">
           <h2 className="text-xl w-3/4 font-semibold">Top Seller</h2>
           <h2 className="px-2 py-1">See all</h2>
          </div>
          <br/>
          <div className="flex flex-row p-6 px-6 h-2/5 w-full rounded-md bg-gray-600 ">
           <h2 className="text-xl w-3/4 font-semibold">Top Creators</h2>
           <h2 className="px-2 py-1">See all</h2>
          </div>
       </div>
         
          </div>
        
          
       </div>
        
       
     
       
      </div>
    )
  }
  const Collections = () => {
    return (
      <div className='bg-[#151c25] gradient-bg-artworks'>
          <div className='w-full '>
         
          <div className='grid grid-cols-1  md:grid-cols-3 gaps-6 md:gaps-4 py-2.5'>
            
              {Array(3).fill().map((nft,i)=>(
                  
               <Card nft={i+1}/>
              ))}
  
          </div>
        
          </div>
  
      </div> 
    )
  }
  const Card=({nft})=>{
      return(
          <div className='p-2'>
  <div className='w-full shadow-xl shadow-black rounded-md 
  overflow-hidden bg-gray-800 my-3 p-3'>
     
      <img classname='w-full shadow-lg shadow-black object-cover
       rounded-lg mb-3' src={imgnft}/>
     
     
      <div className='text-white flex justify-between items-center p-2'>
       <div className="w-full px-8 ml-4">
       <button className='text-sm shadow-lg shadow-black bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>View Details</button>
       </div>
      
      
      </div>
  
     
    
    
  </div>
  <div>
      
  </div>
          </div>
  
      )
  
  }
  const Browsecat = () => {
    return (
      <div className='bg-[#151c25] gradient-bg-artworks'>
          <div className='w-full '>
         
          <div className='grid grid-cols-1  md:grid-cols-3 gaps-6 md:gaps-4 py-2.5'>
            
              {Array(3).fill().map((nft,i)=>(
                  
               <Browsecard nft={i+1}/>
              ))}
  
          </div>
        
          </div>
  
      </div> 
    )
  }
  const Browsecard=({nft})=>{
      return(
          <div className='p-2'>
  <div className=' relative w-full h-30 shadow-xl shadow-black rounded-md 
  overflow-hidden bg-gray-800 my-3 p-3 '>
     <div className="relative">
      <div className="blur-sm">
      <img classname='w-full shadow-lg shadow-black object-cover
       rounded-lg mb-3' src={bc}/>
      </div>
    
       <h2 className="absolute left-5  pt-4 right-5 top-16 bottom-15 ml-4  font-sans  shadow-xl text-white text-5xl">Music</h2>
     </div>
     
     
     
   
  
     
    
    
  </div>
  <div>
      
  </div>
          </div>
  
      )
  
  }
  
  
  export default Marketplace