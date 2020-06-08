import rootEpic from '../store/root-epic';
import rootReducer from '../store/root-reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from './types';
import services from '../services/api-service'

const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState,
    Services
>({
    dependencies: services,
});

const composeEnhancers = ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [epicMiddleware];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

epicMiddleware.run(rootEpic);

export default store

