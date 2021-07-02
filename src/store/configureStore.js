import { createStore,combineReducers } from 'redux'
import countReducer from '../reducer/countReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count : countReducer
    }))
    return store
}
export default configureStore