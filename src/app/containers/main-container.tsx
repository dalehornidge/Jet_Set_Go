'use client'
import React, {FC, use} from "react";
import styled from "styled-components";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";

const Main = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 40px 60px;
    background-color: #ffff;
`;

const Container = styled.div`
flex: 1;
/* padding: 20px; */
box-sizing: border-box;
`

const MainContainer: React.FC = () => {
    return (    
        <Main>
        <Container><LeftContainer /></Container>
        <Container><RightContainer /></Container>
        </Main>
    );
}

export default MainContainer;