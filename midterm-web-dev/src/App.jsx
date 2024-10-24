import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/footer/footer.jsx'
import Cards from './components/movie-card/Cards.jsx';
import Card from './components/movie-card/card.jsx';
import { list } from './components/movie-card/cardlist.js';

function App() {

  return (
    <>
      <Navbar/>
      <Cards list={list}/>
      {/* <h1 className='experiences-heading'>Past experiences</h1> */}
      {/* <Cards list={list2}/> */}
      <div><Footer/></div>
    </>
  )
}

export default App
