import React from 'react'
import {useSelector} from 'react-redux'
import {Card , CardContent} from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia';

import './MoviesStats.css'

const MoviesStats = (props) => {
    const count = useSelector((state) => {
        return state.count
    })

    const handleRank=()=>{
        const minimum=count.map((ele)=>{
            const rank=ele.rank
            return rank
        })
        const rate=Math.max(...minimum)
        const movie=count.map((ele)=>{
            if(ele.rank==rate){
                return ele.name
            }
        })
        return movie
    }
    
    return(
        <div className="top_movie">
                <h1>  Total Movies - {count.length} </h1>
               <h3> # Top Ranked Movie - {handleRank()}</h3>    
        </div>
    )
}
export default MoviesStats