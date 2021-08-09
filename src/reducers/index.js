import { combineReducers } from 'redux';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {ADD_MOVIES, ADD_FAVOURITE,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES} from '../actions';

const intialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}

export function movies( state=intialMovieState, action){
    console.log('MOVIES REDUCERS');
    // if(action.type== ADD_MOVIES){
    //     return{
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray=state.favourites.filter(
                movie=>movie.Title !==action.movie.Title
            );
            return{
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }

            
        default:
            return state;
    }
}

const initialSearchState={
    return :{}
};

export function search (state=initialSearchState, action){
    console.log('SEARCH REDUCERS');
    return state;   
}

const intialRootState={
    movies:intialMovieState,
    search: initialSearchState
};



// export default function rootReducer(state=intialRootState, action){
//     return{
//         movies:movies(state.movies, action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
});