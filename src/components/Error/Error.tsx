import React from 'react'
import styled from 'styled-components'

type Props = {
    children?: React.ReactNode
}

const ErrorStyled = styled.div`
   color: red;
`
const Error = ({ children }: Props) => {

    return (
        <ErrorStyled>{children}</ErrorStyled>
    )
}

export default Error