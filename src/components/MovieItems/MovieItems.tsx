import React from 'react'
import {TResults}  from 'Models'
import { Link } from 'react-router-dom'

type Prop = {
    movies: TResults[]
}
const MovieItems: React.FC<Prop> = ({movies}) => {

    return(
        <div className="movie-items">
            {
              movies.map(item => {
                return(
                    <Link to={`${'/'}${item.id}`} className="item" key={item.id}>
                        <img alt={item.title} src={`${'https://image.tmdb.org/t/p/w500'}${item.poster_path}`}/>
                    </Link>
                )
              })
            }
        </div>
    )
}

export default MovieItems;