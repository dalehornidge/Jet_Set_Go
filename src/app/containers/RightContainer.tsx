'use client'

import styled from "styled-components";
import BotTop from "../components/BotTop";
import FormContainer from "./FormContainer";
import BotContainer from "./BotContainer";

const Right = styled.div`
    background-color: #57e45b;
    box-sizing: border-box;
display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // Consider this only if you want to center vertically as well and your Right component should occupy full viewport height
`

const RightContainer: React.FC = () => {
    return (
        <Right>
            <BotContainer/>
        </Right>
    )
}

export default RightContainer;