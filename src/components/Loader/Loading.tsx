import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
    return (
        <>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#565656"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </>
    )
}

export default Loading