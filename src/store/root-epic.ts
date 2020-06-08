import { combineEpics } from 'redux-observable';
import { popularMovieEpic } from '../_actions/popular.action'

export default combineEpics(
    popularMovieEpic
)