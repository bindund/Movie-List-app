import React , {useState , useEffect} from 'react'
import MoviesCard from './MoviesCard';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import {useSelector} from 'react-redux'
import './Movieslist.css'


const MoviesList = (props) => {
    

    const [search , setSearch] = useState('')
    const [filter , setfilter] = useState('')
    const [fill , setFill] = useState([])
    const count = useSelector((state) => {
        return state.count
    })

    useEffect(() => {
        setFill(count)
    },[count])

    const changeSearch = (e) => {
        setSearch(e.target.value)
        const filtered = count.filter((mov) => {
            return (mov.name.toLowerCase().includes(search.toLowerCase()))
        })
        setFill(filtered)
        if(e.target.value==""){
            setFill(count)
        }
    }
    let mov = [...count]
    const changeSort = (e) => {
        setfilter(e.target.value)
        let arr = mov.sort((a,b) => {
            let name1 = a.name.toLowerCase()
            let name2 = b.name.toLowerCase()
            if(name1>name2){
                return 1
            }else if(name1<name2){
                return -1
            }else{
                return 0
            }
        })

        console.log(arr)
        if(e.target.value=="ascending"){
            setFill(arr)
        }else if(e.target.value=="descending"){
            const des = arr.reverse()
            setFill(des)
            console.log(des)
        }else if(e.target.value==""){
            setFill(count)
        }
    }
    const handleSubmit=(e) => {
        e.preventDefault()
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                 <div class="wrap">
                <div class="search">
                <input type="text" class="searchTerm" placeholder="Search..." value={search} onChange={changeSearch}/>
                 <button type="submit" class="searchButton">
                    <i class="fa fa-search"><SearchIcon/></i>
                </button>
                        <Select value={filter} onChange={changeSort}>
                        <option aria-label="None" value="" placeholder="none">None</option>
                        <option value="ascending">ascending</option>
                        <option value="descending">descending</option>
                        </Select>
                         </div>
                </div>
                </form >
            
            
            <div >
            {
                fill.map((ele) => {
                    return <MoviesCard key={ele.id} movie={ele}/>
                })
            }
            </div>
        </div>
        
    )
}
export default MoviesList