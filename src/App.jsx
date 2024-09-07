import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import First from './components/First'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
     
      {/*HEADER*/}
      <Header/>
       {/*APP BODY*/} 
       <div className="app_body">
        {/* <First/> */}
        <Sidebar/>
        <Feed/>
        <Widgets/>
       </div>
       {/*SIDER*/}
        {/*FEED*/}
        
         {/*WIDGETS*/}
      </div>
      
    </>
  )
}

export default App
