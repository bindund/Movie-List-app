import React ,{useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import {addMovies} from '../action/countAction'
import "./MoviesForm.css"


const MoviesForm = (props) => {
    const [name , setName] = useState('')
    const [rank , setRank] = useState('')
    const dispatch = useDispatch()

    const count = useSelector((state) => {
        return state.count
    })
    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeRank =(e) => {
        setRank(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData ={
            id:Number(new Date()),
            name:name ,
            rank:rank
        }
        dispatch(addMovies(formData))
        setName('')
        setRank('')
    }

    return(
        <div className="add_Movie">
                <form onSubmit={handleSubmit}>
                <h2>Add Movie</h2>
                <TextField type="text" placeholder ="enter movie name" value={name} onChange={changeName} /><br/>
                <TextField id="standard-number" type="number" placeholder="IMDB Ranking"
                  value={rank} onChange={changeRank}/><br/>
                    <Button  className="card" size="small" type="submit" 
                    value="ADD"  variant="contained" ><AddCircleIcon/></Button>
            </form>
        </div>
    )
}
export default MoviesForm