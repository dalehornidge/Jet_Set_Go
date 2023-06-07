'use client'
import React, {FC, use} from "react";
import styled from "styled-components";
import LeftContainter from "./LeftContainer";
import RightContainer from "./RightContainer";

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 100px 20px;
    background-color: #9ae78b;
`;

const MainContainer: React.FC = () => {
    return (    
        <Main>
            <LeftContainter/>
            <RightContainer/>
        </Main>
    );
}

export default MainContainer;