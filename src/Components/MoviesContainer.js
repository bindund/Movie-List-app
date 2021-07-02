import React  from 'react' 
import MoviesForm from './MoviesForm'
import MoviesList from './MoviesList'
import MoviesStats from './MoviesStats'
import "./MoviesContainer.css"


const MoviesContainer =(props) => {
    

    return(
        <>
        <main>
                <div className="block1">
                <MoviesList/>
                </div>
                <div className="block2">
                 <MoviesForm /><hr/>
                 <MoviesStats/>
                 </div>
              
        </main>
        </>
    
    )
}
export default MoviesContainer