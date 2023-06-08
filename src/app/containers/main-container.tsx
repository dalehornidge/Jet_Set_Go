'use client'
import React, {FC, use} from "react";
import styled from "styled-components";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";

const Main = styled.div`
    display: flex;
    width: 100%;
    padding: 50px 20px;
    background-color: #fcfcfc;
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