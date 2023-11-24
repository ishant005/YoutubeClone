 import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
 import { GET_VIDEO_CATEGORIES_LIST } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
 const Head = () => {
 

  const[searchQuery,setSearchQuery]=useState(""); 
  const[suggestions,setSuggestions]=useState([]);
  const[showSuggestions,setShowSuggestions]=useState(false);

  const searchCache=useSelector((store)=>store.search); 
  
   
  useEffect(()=>{

    console.log(searchQuery) 
    // make an api call after every key press
    // but if the diff btwn two api call is <200ms
    // decline the API call
   const timer= setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery])
    }
    else{
      getSearchSuggestions()
    }
    
  },200);

   return()=>{
    clearTimeout(timer);
   }
  },[searchQuery])


// key press 
// render the components
// UseEffect();
// starttimer=>make Api call after 200ms

// key press
// destroy the component(useEffect return method)
// render the components
// useEffect()

  const getSearchSuggestions=async()=>{
     const data=await fetch(GET_VIDEO_CATEGORIES_LIST+ searchQuery);
     const json=await data.json();
     setSuggestions(json[1])
     
     dispatch(cacheResults({
      [searchQuery]:json[1],
     }))
     console.log(json);
  }
  // const dispatch=useDispatch();
  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
 
  // const toggleMenuHandler=()=>{
  //   dispatch(toggleMenu());
  // }; 

   return (
     <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
       <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        
        className='h-8 cursor-pointer my-4'
        alt="menu" 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
        />
        <a href="/"></a>
         <img
          className='h-20 w-30 '
        alt="youtube"
        src="https://assets.turbologo.com/blog/en/2019/10/19084944/youtube-logo-illustration-958x575.jpg"/>       
        </div>
        <div className='col-span-10 px-10 m-4'>
          <div>
          <input 
          className='w-1/2 border border-gray-400 p-2 rounded-l-full '
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
          />
          <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>
          </div> 
          {showSuggestions && (
          <div className='fixed bg-white py-3  ml-24 w-[22rem] shadow-lg rounded-lg border border-gray-100'>
             <ul>
              {suggestions.map((s)=>(
        <li key={s.id} className="py-2 shadow-sm hover:bg-gray-100">{s}</li>
              ))}
          
             </ul>
          </div>
         )}
        </div>
        <div className='col-span-10 ml-auto m-5 mx-10'>
          <img 
          className='h-8 '
          alt="usericon" src="data:image/png;base64,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"/>
        </div>
     </div>
   ) 
 }
 
 export default Head
 