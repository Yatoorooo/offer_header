import React, {useState} from 'react';
import abslogo from './assets/abs-logo.svg';
import vector from './assets/Vector.svg';
import search from './assets/search.svg';
import vectorRight from './assets/Vector-right.svg';

import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <div >
    <div className='header-page'>
     <header className="header-logo">
       <img src={abslogo} alt="" />
     </header>
     <nav className=' ul-navigation'>
      <ul className='button-header '>
      <li className='li-nav' ><a className='btn' href="">News</a></li>
      <li className='li-nav' ><a className='btn' href="">Entertainment</a></li> 
      <li className='li-nav' ><a className='btn' href="">Lifestyle</a></li> 
      <li className='li-nav' ><a className='btn' href="">Sports</a></li>
      <li className='li-nav' ><a className='btn' href="">Business</a></li>
      <li className='li-nav' ><a className='btn' href="">Weather</a></li>
      <li className='li-nav' ><a className='btn' href=""  onMouseOver={() => setOpen(!isOpen)}>More <img src={vector} alt="" /></a></li>
      <ul className={`dropdown ${isOpen ? "active" : ""} `} >
        <li className='li-nav-drop'>More</li>
        <li className='li-nav-drop'>More</li>
      </ul>
      
      <form className='search-menu'>
       <button className='button-search' type='submit'><img src={search} alt="" /></button> 
      <input 
      
        type="text"
        placeholder='Search' />
      </form>
      </ul>
     </nav>
     
     </div>
     </div>
     <main className='main-menu'>
      <div className='nav-menu'>
        <p className='p-main'>Home </p>
        <img src={vectorRight} alt=""></img>
        <p className='p-main'>Blog </p>
        <img src={vectorRight} alt=""></img>
        <p className='p-main'>Blog</p>
      </div>
     </main>
    </>
  )
}

export default App
