/// <reference types="react-scripts" />

///// <reference path="../utils/enums.ts" />

declare module 'Models' {

    export type TPopularMovie = {
        results: TResults[]
    }

    export type TResults = {
        poster_path: string,
        id: number,
        backdrop_path: string,
        title: string,
        vote_average: number,
        overview: string,
    }

    export type TError = {
        status_code: number,
        status_message: String,
        success: boolean

    }
    
}
