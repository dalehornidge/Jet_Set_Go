import styled from "styled-components";

const Left = styled.div`
    background-color: #FFA857;
    box-sizing: border-box;
`

const StyledImage = styled.img`
    width: 80%;
    height: auto;
    padding-left: 5%;
`

const LeftContainter: React.FC = () => {
    return (
        <Left>
            <StyledImage src="/img/polaroids.png" alt="Two people enjoying the sun"/>
        </Left>
    );
}

export default LeftContainter;