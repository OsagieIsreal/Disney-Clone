// import {BrowerRouter as Router, Switch Route} from 'react'
import './App.css'
import Header from './componets/Header'
import Slider from './componets/Slider'
import ProductionHouse from './componets/ProductionHouse'
import GenreMovieList from './componets/GenreMoviesList'

function App() {

  return (
      <>
        <Header/>

        <Slider/>

        <ProductionHouse />

        <GenreMovieList/>
      </>
  )
}

export default App
