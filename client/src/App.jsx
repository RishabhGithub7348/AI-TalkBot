import React ,{useEffect, useState}from 'react'
import { BrowserRouter ,Link, Route,Routes } from 'react-router-dom'
import {Home, Ai_chatbot} from './pages';
import './index.css'
import { MdLightMode } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

import {TalkBot} from './assets';
const App = () => {

  const [theme, setTheme] = React.useState('light');
 
  useEffect(() => {
    if(theme === 'light'){
      document.documentElement.classList.remove('dark');
    }else{
      document.documentElement.classList.add('dark');
  }
  },[theme])

  const handleSwitch = () => {
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }

  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white dark:bg-[#212936]  px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-[#182334] dark:border-b-2  ">
      <Link to="/">
        <img src={TalkBot} alt="logo" className="w-28 object-contain" />
      </Link>
      
      <div className='flex items-center justify-center'>
        <span>
          <button onClick={handleSwitch} >
          {
            theme === 'light' ? <MdLightMode style={{ fontSize: 30} } className="text-[#1976D2] dark:text-slate-200 text-[20px] mr-2" /> : <FaMoon style={{ fontSize: 30} } className="text-[#1976D2] dark:text-slate-200 text-[20px] mr-2" />
          }
          </button>
          
          {/* <button onClick={handleSwitch} className="font-inter font-medium bg-[#6469ff] dark:bg-slate-200  dark:text-slate-800 text-white text-[14px] px-4 py-2 rounded-md">Switch Theme</button> */}
        </span>
      <Link to="/create-chat" className="font-inter ml-5 font-medium bg-[#1976D2] dark:bg-slate-200 dark:text-slate-800 text-white px-4 py-2 rounded-md">Login</Link>
      </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe]   dark:bg-[#212936]   min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-chat" element={<Ai_chatbot />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App
