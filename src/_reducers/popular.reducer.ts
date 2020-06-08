import { Reducer } from 'redux';
import { getType } from 'typesafe-actions';
import { TResults } from 'Models';

import * as actions from '../_actions/popular.action'

export type PopularMovieState = Readonly<{
    results: TResults[]
}>

export const initialState = {
    results: []
}

type Actions = actions.PopularActions

const popularReducer: Reducer<PopularMovieState, Actions> = (
    state = initialState,
    action: Actions
) => {
    switch(action.type){
        case getType(actions.fetchPopularMovieAsyncAction.success):{
            return {
                ...state,
                results: action.payload.results
            }
        }

        case getType(actions.fetchPopularMovieAsyncAction.failure): {
            return {
                ...state,
                popular: [],
            }
        }
        default:
            return {...state }
        
    }
}

export default popularReducer