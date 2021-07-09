import React from 'react'
import {useDispatch} from 'react-redux'
import {removeMovie} from '../action/countAction'
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Movieslist.css'
  
const MoviesCard = (props) => {
    const dispatch = useDispatch()
    const {movie} = props
    const handleRemove = (id) => {
        dispatch(removeMovie(id))
    }
    
    return(
              
              <div class="mui-card xs-shadow">
                 <img src="./logo.jpg" class="mui-card-img-top" alt="..."/>
                <h5 >Name - {movie.name}</h5>
                <p>Rank - {movie.rank}</p>
                 <Button  onClick={() => {handleRemove(movie.id)}}><DeleteIcon/></Button><br/>   
             </div>                            
    )
}
export default MoviesCard