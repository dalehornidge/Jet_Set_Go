'use client'

import styled from "styled-components";
import BotFace from "../components/BotFace";

const Right = styled.div`
    background-color: #ed9f9f;
    padding: 200px 300px;
`

const RightContainer: React.FC = () => {
    return (
        <Right>
            <BotFace/>
            <h1>Right Container</h1>
            </Right>
    )
}

export default RightContainer;