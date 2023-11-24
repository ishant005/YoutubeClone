import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Head from "./components/Head"
import './App.css'
import Body from './components/Body'
import store from "./utils/store";
import MainContainer from './components/MainContainer';
import {ShowAllSubscription} from "./components/subscriptions/ShowAllSubscription"
import WatchPage from './components/WatchPage';
import { SubscriptionList } from './components/subscriptions/SubscriptionList';

const appRouter=createBrowserRouter([
  {
  path:"/",
  element:  <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
    {
      path:"subscriptions",
      element:<ShowAllSubscription/>
    }
  ],
},
]);

function App() {
  return (
    <div className=''>
   <Provider store={store}>
     
     <Head/>
    
     <RouterProvider router={appRouter}/>
     
   {/* Head
   bidy
   sidebar
   menuites
   Maincontainer
   buttonslist
   videocontainer
    */}
   
    
   
    </Provider>
    </div>
  
  )
}

export default App
