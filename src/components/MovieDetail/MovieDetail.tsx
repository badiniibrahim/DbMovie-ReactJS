import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'


const MovieDetail: React.FC<{}> = ({}) => {
    let { id } = useParams()
    console.log(id)
    return(
        <div>{id}</div>
    )
}

export default MovieDetail