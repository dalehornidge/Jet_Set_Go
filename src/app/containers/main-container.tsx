'use client'
import React, {FC, use} from "react";
import styled from "styled-components";
import LeftContainter from "./LeftContainer";
import RightContainer from "./RightContainer";

const Main = styled.div`
    display: flex;
    justify-content: space-between;
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