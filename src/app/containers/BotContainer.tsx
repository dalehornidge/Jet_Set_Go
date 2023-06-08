import styled from "styled-components";
import BotTop from "../components/BotTop";
import FormContainer from "./FormContainer";

const StyledBotContainer = styled.div`
    display: flex;
    background-color: pink;
    flex-direction: column;
    width: 65%;
    height: 80%;
    overflow: auto;
`

const BotContainer: React.FC = () => {
    return (
        <StyledBotContainer>
            <BotTop/>
            <FormContainer/>
        </StyledBotContainer>
    );
}



export default BotContainer;