import React from 'react'
import CustomText from '../CustomText'

type Props = {
    text: String
}

const Footer: React.FC<Props> = ({text}) => {
    return(
        <div className="footer">
            <CustomText value={text}/>
        </div>
    )
}
export default Footer