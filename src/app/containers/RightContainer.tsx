'use client'

import styled from "styled-components";

const Right = styled.div`
    background-color: #ed9f9f;
    padding: 200px 300px;
`

const RightContainer: React.FC = () => {
    return (
        <Right>
            <h1>Right Container</h1>
        </Right>
    )
}

export default RightContainer;