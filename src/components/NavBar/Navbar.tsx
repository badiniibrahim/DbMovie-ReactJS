import React from 'react'
import CustomText from '../CustomText'
import resources from '../../utils/resources'

const NavBar: React.FC<{}> = ({}) => {

    return(
        <div className="nav-bar">
            <CustomText value={'The Movie Database'}/>
            <CustomText value={'React & Jsx & Redux'}/>
            <img src={resources["ic-react"]} alt={'react-icon'}/>
        </div>
    )
} 

export default NavBar