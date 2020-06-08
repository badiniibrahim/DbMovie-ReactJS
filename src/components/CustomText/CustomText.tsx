import React from 'react'

type Props = {
    value: String
}
const CustomText: React.FC<Props> = ({value}) => {
    return(
        <p>{value}</p>
    )
}

export default CustomText