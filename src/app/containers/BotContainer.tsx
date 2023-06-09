import styled from "styled-components";
import BotTop from "../components/BotTop";
import FormContainer from "./FormContainer";

const StyledBotContainer = styled.div`
    display: flex;
    background-color: #FFFF;
    border-radius: 20px;
    flex-direction: column;
    width: 65%;
    height: 60%;
    /* overflow: auto; */
    border-radius: 10px;
  border: 10px solid white;
  border-color: #ff9d41;
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