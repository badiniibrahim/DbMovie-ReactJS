/// <reference types="react-scripts" />

import { StateType, ActionType } from 'typesafe-actions';
import { RouterAction, LocationChangeAction } from 'react-router-redux';

import PopularMovieAction from '../_actions/popular.action'

type ReactRouterAction = RouterAction | LocationChangeAction;

export type Store = StateType<typeof import('./index').default>;
export type RootState = StateType<typeof import('./root-reducer').default>;
export type Services = typeof import('../services/api-service').default;

export type RootAction =
        | ReactRouterAction
        | PopularMovieAction;

