import styled from "styled-components";

const Left = styled.div`
    background-color: grey;
    padding: 200px 300px;
`

const LeftContainter: React.FC = () => {
    return (
        <Left>
            <h1>Left Container</h1>
        </Left>
    );
}

export default LeftContainter;