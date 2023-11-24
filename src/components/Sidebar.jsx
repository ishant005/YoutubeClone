import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { SubscriptionList } from './subscriptions/SubscriptionList';
const Sidebar = () => {

  // const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  // early return pattern
   
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;

  return (
    <div className='p-2 shadow-lg w-48'>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
         </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
        <Link to="/subscriptions">
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer">
                        Subscriptions
                    </li>
                </Link>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Saved Video</li>
        <li>Watch later</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h3 className="text-xl font-bold py-4 " >Subscriptions</h3>
            <div className="h-[250px] overflow-y-scroll" >
            <SubscriptionList />
            </div>
    </div>
  )
}

export default Sidebar
