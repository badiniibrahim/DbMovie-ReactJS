import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, catchError, filter } from 'rxjs/operators';
import { createAsyncAction, isActionOf, ActionType } from 'typesafe-actions';
import _ from 'lodash'

import {
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILURE
} from './actionTypes'

import { TPopularMovie, TError } from 'Models'
import { RootAction, RootState, Services } from '../store/types';


const fetchPopularMovieAsyncAction = createAsyncAction(
        FETCH_MOVIE_REQUEST,
        FETCH_MOVIE_SUCCESS,
        FETCH_MOVIE_FAILURE,
)<undefined, TPopularMovie, TError>()

//Exporte mon actions pour pouvoir l'utiliser dans mon reducer
export type PopularActions = ActionType<typeof fetchPopularMovieAsyncAction>


const managerPopularMovie = (action: RootAction, apiResquest: Services) => {
    return apiResquest<TPopularMovie>({
        path: '/movie/popular',
        method: 'get',
        body: ''
    }).pipe(
        mergeMap((response: any & TError) => {
            if(!_.isEmpty(response.status_message)){
                return of(
                    fetchPopularMovieAsyncAction.failure({
                        status_code: response.status_code,
                        status_message: response.status_message,
                        success: response.success
                    })
                )
            }
            return of(fetchPopularMovieAsyncAction.success(response))
        }),
        catchError(error => {
            return of(
                fetchPopularMovieAsyncAction.failure({
                    status_code: error.status_code,
                    status_message: error.status_message,
                    success: error.success
                })
            )
        })
    )
}


const popularMovieEpic: Epic<RootAction, RootAction, RootState, Services> = (
    actions$,
    state$,
    dependency
) => 
    actions$.pipe(
        filter(isActionOf(fetchPopularMovieAsyncAction.request)),
        mergeMap(action => managerPopularMovie(action, dependency))
    )


export { fetchPopularMovieAsyncAction, popularMovieEpic,managerPopularMovie }