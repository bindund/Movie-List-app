import React from 'react'
import MoviesContainer from './Components/MoviesContainer'
import "./App.css"

const App = (props) => {
  return(
    <div>
       <div className="h1">
      <h1>My Big Movie List</h1>
      </div>
      <MoviesContainer/>
    </div>
  )
}
export default App